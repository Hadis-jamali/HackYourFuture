import express from 'express';
import studentsRouter from './student.js'

const app = express();
const port = 3000;
app.use('/student',studentsRouter)
app.get('*', (req,res)=>{
    res.status(404).send('not found')
})