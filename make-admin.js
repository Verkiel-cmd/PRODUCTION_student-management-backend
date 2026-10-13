import { dbPromise } from './config.js';

const [r] = await dbPromise.query(
    'UPDATE users SET role = "admin" WHERE email = ?', [process.argv[2]]);
console.log(r.affectedRows ? 'Admin' : 'No such user');
process.exit(0);