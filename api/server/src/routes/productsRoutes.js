import { Router } from 'express'
import ProductsController from '../controllers/productsController'

const router = Router()
router.get('/', ProductsController.getAllProducts)
router.post('/', ProductsController.getAllProducts)
router.get('/:id', ProductsController.getAllProducts)
router.put('/:id', ProductsController.getAllProducts)
router.delete('/:id', ProductsController.getAllProducts)
router.get('/:id/items', ProductsController.getAllProducts)
router.post('/:id/items', ProductsController.getAllProducts)
export default router