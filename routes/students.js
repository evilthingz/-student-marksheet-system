const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const ObjectsToCsv = require('objects-to-csv')

const csv = require('csv-parser');
const fs = require('fs');


router.get('/', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        res.json(student)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const student = new Student({
        student_name: req.body.student_name,
        student_id: req.body.student_id,
        subject_1: req.body.subject_1,
        subject_2: req.body.subject_2,
        subject_3: req.body.subject_3,
        subject_4: req.body.subject_4,
        subject_5: req.body.subject_5
    })


    fs.createReadStream('./data.csv')
        .pipe(csv())
        .on('data', (student) => {
            console.log(student);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
    try {
        const a1 = await student.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        student.sub = req.body.sub
        const a1 = await student.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        student.sub = req.body.sub
        const a1 = await student.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router