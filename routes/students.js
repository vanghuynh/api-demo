var express = require('express');
var router = express.Router();

const { StudentModel } = require('../database/database');

/* GET students listing. */
router.get('/', async function (req, res, next) {
  const students = await StudentModel.find();
  res.json({ 'success': true, data: students });
});

/* POST student. */
router.post('/', async function (req, res, next) {
  const { name, studentCode, isActive } = req.body;
  const student = new StudentModel({ name, studentCode, isActive });
  const result = await student.save();
  console.log(result);
  res.json({
    'success': true,
    message: 'Student created successfully',
    data: student,
  });
});

/* PUT student. */
router.put('/:id', async (req, res, next) => {
  const { name, studentCode, isActive } = req.body;
  const { id } = req.params;
  const result = await StudentModel.updateOne(
    { _id: id },
    { name, studentCode, isActive }
  );
  res.json({
    success: true,
    message: 'Student updated successfully',
    data: { _id: id, name, studentCode, isActive },
  });
});

/* DELETE student. */
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id);
  if (!student) {
    return res.json({
      'success': false,
      'message': 'Student not found',
    });
  }
  const result = await StudentModel.deleteOne({ _id: id });
  console.log(result);
  return res.json({
    'success': true,
    'message': 'Student deleted successfully',
  });
});

/* GET student by id. */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id);
  res.json({ 'success': true, data: student });
});

module.exports = router;
