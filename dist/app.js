import express from 'express';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === 'test' ? `.env.${process.env.NODE_ENV}` : '.env',
});
const app = express();
app.use(compression());
const limiter = rateLimit({
    windowMs: 1 * 1000,
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});
export default app;
//# sourceMappingURL=app.js.map