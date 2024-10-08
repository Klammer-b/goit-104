import createHttpError from 'http-errors';
import { Student } from '../db/models/student.js';
import { createPaginationData } from '../utils/createPagination.js';

export const getAllStudents = async ({
  page = 1,
  perPage = 10,
  sortOrder = 'asc',
  sortBy = 'name',
  filter = {},
}) => {
  const skip = (page - 1) * perPage;
  const studentsQuery = Student.find();

  if (filter.minAge) {
    studentsQuery.where('age').gte(filter.minAge);
  }

  if (filter.maxAge) {
    studentsQuery.where('age').lte(filter.maxAge);
  }

  if (filter.minAvgMark) {
    studentsQuery.where('avgMark').gte(filter.minAvgMark);
  }

  if (filter.maxAvgMark) {
    studentsQuery.where('avgMark').lte(filter.maxAvgMark);
  }

  if (filter.onDuty || filter.onDuty === false) {
    studentsQuery.where('onDuty').equals(filter.onDuty);
  }

  if (filter.gender) {
    studentsQuery.where('gender').equals(filter.gender);
  }

  const [count, students] = await Promise.all([
    Student.find().merge(studentsQuery).countDocuments(),
    Student.find()
      .merge(studentsQuery)
      .skip(skip)
      .limit(perPage)
      .sort({
        [sortBy]: sortOrder,
      }),
  ]);

  return {
    students,
    ...createPaginationData(count, page, perPage),
  };
};

export const getStudentById = async (id) => {
  const student = await Student.findById(id);

  if (!student) {
    throw createHttpError(404, {
      status: 404,
      message: `Student with id ${id} not found!`,
    });
  }

  return student;
};

export const createStudent = async (payload, parentId) => {
  return await Student.create({ ...payload, parentId });
};

export const updateStudent = async (id, payload, options = {}) => {
  const rawResult = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult.value) {
    throw createHttpError(404, {
      status: 404,
      message: `Student with id ${id} not found!`,
    });
  }

  return {
    student: rawResult.value,
    isNew: !rawResult.lastErrorObject.updatedExisting,
  };
};

export const deleteStudentById = async (id) => {
  await Student.findByIdAndDelete(id);
};
