
import * as studentController from '../controllers/students'

function setupStudentRoutes(router){
	router.get("/", studentController.getStudents)
}

export default setupStudentRoutes
