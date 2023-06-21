import { Router } from "express";
import { deleteService, postService, getServiceById, getServices, updateServiceById } from '../controllers/services-controllers.js'

const router = Router()

router.get('/api/v1/services', getServices);

router.get('/api/v1/services/:id', getServiceById);

router.post('/api/v1/services', postService);

router.put('/api/v1/services/:id', updateServiceById)

router.delete('/api/v1/services/:id', deleteService);

export default router