import { dbPromise } from './config.js';

export async function requireAdmin(req, res, next) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ 
            success: false, 
            message: 'Please log in' 
        });
    }
    try {
        const [rows] = await dbPromise.query('SELECT role FROM users WHERE id = ?', [req.session.userId]);
        if (rows[0]?.role !== 'admin') {
            return res.status(403).json({ 
                success: false, 
                message: 'Admin access required' 
            });
        }
        next();
    } catch (e) {
        res.status(500).json({ 
            success: false, 
            message: 'Server error' 
        });
    }
}

export async function requireSuperAdmin(req, res, next) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ 
            success: false, 
            message: 'Please log in' 
        });
    }
    try {
        const [rows] = await dbPromise.query('SELECT role, invited_by FROM users WHERE id = ?', [req.session.userId]);
        const user = rows[0];
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ 
                success: false, 
                message: 'Admin access required' 
            });
        }
        if (user.invited_by) {
            return res.status(403).json({ 
                success: false, 
                message: 'Super admin only' 
            });
        }
        next();
    } catch (e) {
        res.status(500).json({ 
            success: false, 
            message: 'Server error' 
        });
    }
}