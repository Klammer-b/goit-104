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
import { validateMongoIdParam } from '../middlewares/validateMongoIdParam.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createStudentValidationSchema } from '../validation/createStudentValidationSchema.js';
import { updateStudentValidationSchema } from '../validation/updateStudentValidationSchema.js';

const studentsRouter = Router();

studentsRouter.use('/:studentId', validateMongoIdParam('studentId'));
// studentsRouter.use(
//   '/:studentId/diary/:diaryId',
//   validateMongoIdParam('diaryId'),
// );

studentsRouter.get('/', ctrlWrapper(getStudentsController));

studentsRouter.get('/:studentId', ctrlWrapper(getStudentByIdController));

studentsRouter.post(
  '/',
  validateBody(createStudentValidationSchema),
  ctrlWrapper(createStudentController),
);
studentsRouter.patch(
  '/:studentId',
  validateBody(updateStudentValidationSchema),
  ctrlWrapper(patchStudentController),
);

studentsRouter.put(
  '/:studentId',
  validateBody(createStudentValidationSchema),
  ctrlWrapper(putStudentController),
);

studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudentByIdController));

export default studentsRouter;
