import db from '../utils/db'

export const getStudents = async (req, res, next) => {
	console.log('getStudents')
	try {
		const students = await db.getStudents()
		res.status(200).json(students)
	}
	catch(e){
		console.error(e)
		res.status(400).end()
	}
}

