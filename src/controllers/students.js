import {
  createStudent,
  deleteStudentById,
  getAllStudents,
  getStudentById,
  updateStudent,
} from '../services/students.js';
import { parseFilterParams } from '../utils/validation/parseFilterParams.js';
import { validatePaginationParams } from '../utils/validation/parsePaginationParams.js';
import { parseSortParams } from '../utils/validation/parseSortParams.js';

export const getStudentsController = async (req, res) => {
  const { page, perPage } = validatePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const paginatedStudents = await getAllStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json({
    status: 200,
    message: 'Successfully get all students!',
    data: paginatedStudents,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const id = req.params.studentId;

  const student = await getStudentById(id);

  res.json({
    status: 200,
    message: `Successfully get student with id ${id}!`,
    data: student,
  });
};

export const deleteStudentByIdController = async (req, res) => {
  const id = req.params.studentId;

  console.log(await deleteStudentById(id));

  res.status(204).send();
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).send({
    status: 201,
    message: `Successfully created student!`,
    data: student,
  });
};

export const patchStudentController = async (req, res) => {
  const id = req.params.studentId;
  const { body } = req;

  const { student } = await updateStudent(id, body);

  res.send({
    status: 200,
    message: `Successfully updated a student!`,
    data: student,
  });
};

export const putStudentController = async (req, res) => {
  const id = req.params.studentId;
  const { body } = req;

  const { student, isNew } = await updateStudent(id, body, { upsert: true });

  const status = isNew ? 201 : 200;

  res.status(status).send({
    status,
    message: `Successfully upserted a student!`,
    data: student,
  });
};
