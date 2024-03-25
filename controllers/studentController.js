const Student = require('../models/student');
const MarkList = require('../models/MarkList');

async function insertStudent (req, res) {
    // console.log('insertStudent');
    try {
        const { name, code_no, dept, gender } = req.body;
        await Student.create({ name: name, code: code_no, dept: dept, sex: gender});
        console.log('data inserted successfully');
        res.redirect('/');
    } catch (error) {
        console.error(error);
    }
}

async function getStudentId (req, res) {
    // const student_uuids = await Student.findAll({
    //     attributes: ['st_uuid'], raw: true
    // });
    const student_uuids = await Student.findAll({});
    // console.log(student_uuids);
    res.render('marklist', { uuid: student_uuids });
    // console.log('getstudentid test');
}

async function fullStudentDetails (req, res) {
    const markListDetails = await MarkList.findAll({
        include: Student // Include the Student model to fetch associated data
    });
    res.render('result', { markList: markListDetails });
}

async function getFulldetails (req, res) {
    try {
        const uuid = req.params.uuid;
        const fullData = await MarkList.findOne({
            where: { m_uuid: uuid }, // include where clause to filter by m_uuid
            include: Student,
        });
        res.render('viewSingleData', { data: fullData });
    } catch (error) {
        console.error(error);
    }
}

async function insertMarkList (req, res) {
    try {
        const { student_id, ex_name, english, hindi, cs, total } = req.body;
        await MarkList.create({
            examination_name: ex_name, english: english, 
            hindi: hindi, cs: cs, total_marked: total, studentId: student_id
        });
        console.log('data inserted successfully');
        res.redirect('/');
    } catch (error) {
        console.error(error);
    }
}

async function deleteMarkRecord (req, res) {
    try {
        const uuid = req.params.uuid;
        await MarkList.destroy({
            where: { m_uuid: uuid }
        });
        res.redirect('/result');
    } catch (error) {
        console.error(error);
    }
}

module.exports = { insertStudent, getStudentId, insertMarkList, fullStudentDetails, getFulldetails, deleteMarkRecord };