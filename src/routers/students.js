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
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { upload } from '../middlewares/multer.js';

const studentsRouter = Router();

studentsRouter.use('/:studentId', validateMongoIdParam('studentId'));
studentsRouter.use('/', authenticate);

// studentsRouter.use(
//   '/:studentId/diary/:diaryId',
//   validateMongoIdParam('diaryId'),
// );

studentsRouter.get(
  '/',
  checkRoles('teacher'),
  ctrlWrapper(getStudentsController),
);

studentsRouter.get(
  '/:studentId',
  checkRoles('teacher', 'parent'),
  ctrlWrapper(getStudentByIdController),
);

studentsRouter.post(
  '/',
  validateBody(createStudentValidationSchema),
  ctrlWrapper(createStudentController),
);
studentsRouter.patch(
  '/:studentId',
  upload.single('avatar'),
  validateBody(updateStudentValidationSchema),
  ctrlWrapper(patchStudentController),
);

studentsRouter.put(
  '/:studentId',
  validateBody(createStudentValidationSchema),
  ctrlWrapper(putStudentController),
);

studentsRouter.delete(
  '/:studentId',
  checkRoles('teacher'),
  ctrlWrapper(deleteStudentByIdController),
);

export default studentsRouter;
