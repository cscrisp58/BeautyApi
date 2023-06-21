import { createPool } from 'mysql2/promise'

export const conn = createPool({
    host: 'bsjx0m7qihwv3i4g98jc-mysql.services.clever-cloud.com',
    user: 'uebuitnyrvpueypm',
    password: '2r598xnZMyY9Ei5XiM0x',
    port: '3306',
    database: 'bsjx0m7qihwv3i4g98jc'
});