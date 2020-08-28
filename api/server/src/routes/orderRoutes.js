import { Router } from 'express'
import OrdersController from '../controllers/ordersController'

const router = Router()
router.get('/', OrdersController.getAllMenus)
router.post('/', OrdersController.getAllMenus)
router.get('/:id', OrdersController.getAllMenus)
router.put('/:id', OrdersController.getAllMenus)
router.delete('/:id', OrdersController.getAllMenus)
export default router