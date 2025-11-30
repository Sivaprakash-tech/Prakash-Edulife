const { User } = require('../models');
exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id, { attributes: ['id','name','email','role'] });
  res.json(user);
};
exports.listStudents = async (req,res) => {
  const students = await User.findAll({ attributes: ['id','name','email'], where: { role: 'student' } });
  res.json(students);
};
