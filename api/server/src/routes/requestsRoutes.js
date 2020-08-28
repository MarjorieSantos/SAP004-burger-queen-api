import { Router } from 'express'
import ProductsController from '../controllers/productsController'

const router = Router()
router.get('/', ProductsController.all)
router.post('/', ProductsController.add)
router.get('/:id', ProductsController.getById)
router.put('/:id', ProductsController.all)
router.delete('/:id', ProductsController.all)
router.get('/:id/items', ProductsController.getItemsById)
router.post('/:id/items', ProductsController.createItem)
export default router