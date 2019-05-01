
import knex from 'knex'
import knexConfig from '../../knexfile.js'
const db = knex(knexConfig.development)

const dao = {
	getCohorts,
	insertCohort,
	getCohortById,
	updateCohortById,
	deleteCohort,
	
	getStudents,
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

async function getStudents(){
	return db('students')
	.then(students => {
		return  students
	})
	.catch(e => e)
	
}
export default dao
