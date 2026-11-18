import { dbPromise } from './config.js';


// Any logged-in user (read-only access)
export async function requireLogin(req, res, next) {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ 
            success: false, 
            message: 'Please log in' 
        });
    }
    next();
}


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
        const [rows] = await dbPromise.query('SELECT role, invited_by, email FROM users WHERE id = ?', [req.session.userId]);
        const configuredEmail = process.env.INITIAL_ADMIN_EMAIL?.trim().toLowerCase();
        const user = rows[0];

        if (
            !configuredEmail ||
            !user ||
            user.role !== 'admin' ||
            user.invited_by !== null ||
            user.email.trim().toLowerCase() !== configuredEmail
        ) {
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