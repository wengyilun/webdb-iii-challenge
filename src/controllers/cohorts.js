import db from '../utils/db'

export const getCohorts = async (req, res, next) => {
	try {
		const cohorts = await db.getCohorts()
		res.status(200).json(cohorts)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
    }
}

export const getCohort = async (req, res, next) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const cohort = await db.getCohortById(req.params.id)
		if(cohort.length > 0){
			res.status(200).json(cohort)
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
    }
}


export const postCohorts = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertCohort(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
	    res.status(500).json(e);
	}
}

export const updateCohort = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateCohortById(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	 }
}

export const deleteCohort = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteCohort(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}
