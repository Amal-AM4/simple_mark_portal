var express = require('express');
var router = express.Router();

const studentController = require('../controllers/studentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MARK PORTAL' });
});

router.get('/addStudent', (req, res) => {
  res.render('addStudent');
});

router.get('/addMarklist', studentController.getStudentId);
router.get('/result', studentController.fullStudentDetails);

router.get('/viewSingleData/:uuid', studentController.getFulldetails);

router.post('/addStudent', studentController.insertStudent);
router.post('/addMarklist', studentController.insertMarkList);

router.get('/deleteSingleData/:uuid', studentController.deleteMarkRecord);

module.exports = router;
