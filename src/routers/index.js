import { Router } from 'express';
import studentsRouter from './students.js';
import authRouter from './auth.js';

const router = Router();

router.use('/students', studentsRouter);
router.use('/auth', authRouter);

export default router;
