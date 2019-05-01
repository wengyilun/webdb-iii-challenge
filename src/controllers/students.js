import db from '../utils/db'


export const getStudent = async (req, res, next) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const student = await db.getStudentById(req.params.id)
		if(student.length > 0){
			res.status(200).json(student)
		}else{
			res.status(404).json({ message: 'this student does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const getStudents = async (req, res, next) => {
	console.log('getStudents : getAllStudents')

	try {
		const students = await db.getAllStudents()
		res.status(200).json(students)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}



export const postStudents = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertStudents(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateStudent = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateStudentById(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this student does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const deleteStudent = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteStudent(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this student does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
