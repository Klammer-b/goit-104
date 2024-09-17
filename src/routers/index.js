import { Router } from 'express';
import studentsRouter from './students.js';

const router = Router();

router.use('/students', studentsRouter);

export default router;
