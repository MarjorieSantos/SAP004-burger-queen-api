import { Router } from 'express'
import RequestsController from '../controllers/requestsController'

const router = Router()
router.get('/', RequestsController.all)
router.post('/', RequestsController.add)
router.get('/:id', RequestsController.getById)
router.put('/:id', RequestsController.all)
router.delete('/:id', RequestsController.all)
router.get('/:id/items', RequestsController.getItemsById)
router.post('/:id/items', RequestsController.createItem)
export default router