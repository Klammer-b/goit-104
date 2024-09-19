import { Router } from 'express';
import {
  createStudentController,
  deleteStudentByIdController,
  getStudentByIdController,
  getStudentsController,
  patchStudentController,
  putStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(getStudentsController));

studentsRouter.get('/:studentId', ctrlWrapper(getStudentByIdController));

studentsRouter.post('/', ctrlWrapper(createStudentController));

studentsRouter.patch('/:studentId', ctrlWrapper(patchStudentController));

studentsRouter.put('/:studentId', ctrlWrapper(putStudentController));

studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudentByIdController));

export default studentsRouter;
