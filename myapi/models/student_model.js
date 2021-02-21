const db = require('../database');

const student = {
  getstudent: function(callback) {
    return db.query('select * from student', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from student where id_student=?', [id], callback);
  },
  add: function(student, callback) {
    return db.query(
      'insert into student (fname, Iname) values(?,?)',
      [student.fname, student.Iname],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from student where id_student=?', [id], callback);
  },
  update: function(id, student, callback) {
    return db.query(
      'update student set fname=?,Iname=?,where id_student=?',
      [student.fname, student.Iname, id],
      callback
    );
  }
};
module.exports = student;