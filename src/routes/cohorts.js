
import * as cohortController from '../controllers/cohorts'

function setupCohortRoutes(router){
	router.get("/", cohortController.getCohorts)
	router.post('/', cohortController.postCohorts)
	router.get('/:id', cohortController.getCohort)
	router.put('/:id', cohortController.updateCohort)
	router.delete('/:id', cohortController.deleteCohort)
}

export default setupCohortRoutes
