
import knex from 'knex'
import knexConfig from '../../knexfile.js'
const db = knex(knexConfig.development)

const dao = {
	getCohorts,
	insertCohort,
	getCohortById,
	updateCohortById,
	deleteCohort,
	getStudentsByCohort,
	
	getAllStudents,
	getStudentById,
	insertStudents,
	updateStudentById,
	deleteStudent
}


//=====================
//	 	Cohorts
//=====================

async function getCohorts(){
	return db('cohorts')
			.then(cohorts => {
				return cohorts
			})
			.catch(e => e)
	
}

async function getCohortById(id){
	return db('cohorts')
			.where({id:id})
			.then(cohorts => {
				return cohorts
			})
			.catch(e => e)
	
}

async function getStudentsByCohort(cohort_id){
	return db('students')
			.where({cohort_id:cohort_id})
			.then(students => {
				return students
			})
			.catch(e => e)
	
}

async function insertCohort(cohort){
	return db.insert(cohort)
			  .into('cohorts')
			  .then(cohorts => {
				 return cohorts
		   })
		   .catch(e => e)
}

async function updateCohortById(id, cohort){
	return db('cohorts')
			 .where({id:id})
	         .update(cohort)
	         .then(cohorts => {
	         	 return cohorts
		 	  })
	         .catch(e => e)
}

async function deleteCohort(id){
	return db('cohorts')
			 .where({id:id})
	         .del()
	         .then(cohorts => {
	         	 return cohorts
		 	  })
	         .catch(e => e)
}


//=====================
//	 	Students
//=====================

async function getAllStudents(){
	console.log('db. getAllStudents')
	return db('students')
	.then(students => {
		return students
	})
	.catch(e => e)
}


async function getStudentById(id){
	return db('students')
	.where({id:id})
	.then(students => {
		return students
	})
	.catch(e => e)
	
}

async function insertStudents(student){
	return db.insert(student)
	.into('students')
	.then(lastId => {
		return lastId
	})
	.catch(e => e)
}

async function updateStudentById(id, student){
	return db('students')
	.where({id:id})
	.update(student)
	.then(students => {
		return students
	})
	.catch(e => e)
}

async function deleteStudent(id){
	return db('students')
	.where({id:id})
	.del()
	.then(deleteCount => {
		return deleteCount
	})
	.catch(e => e)
}

export default dao
