const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  studentCode: String,
  isActive: Boolean,
});

const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = { StudentModel, connectDatabase };
