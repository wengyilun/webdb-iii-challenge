

import express from 'express'
import setupStudentRoutes from './students'
import setupCohortRoutes from './cohorts'

function setupRoutes(app){
	const studentRouter = express.Router()
	setupStudentRoutes(studentRouter)
	app.use('/api/students', studentRouter)
	
	const cohortRouter = express.Router()
	setupCohortRoutes(cohortRouter)
	app.use('/api/cohorts', cohortRouter)
	
	app.get('/', async (req, res) => {
		console.log('root route called')
	})
	
}

export default setupRoutes
