import createHttpError from 'http-errors';
import { Student } from '../db/models/student.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const userRole = req.user.role;

    // якщо користувач є вчителем і дія дозволена вчителю
    if (userRole === 'teacher' && roles.includes('teacher')) {
      return next();
    }

    // якщо користувач є кимось із батьків і дія дозволена батькам
    if (userRole === 'parent' && roles.includes('parent')) {
      const student = await Student.findById(req.params.studentId);

      if (!student || !req.user._id.equals(student.parentId)) {
        return next(
          createHttpError(403, 'User does not have access to such student!'),
        );
      }

      return next();
    }

    return next(createHttpError(403, 'Forbidden!'));
  };
