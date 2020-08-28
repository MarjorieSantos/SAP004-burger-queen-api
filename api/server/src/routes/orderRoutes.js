import { Router } from 'express'
import OrdersController from '../controllers/ordersController'

const router = Router()
router.get('/', OrdersController.getAllOrders)
router.post('/', OrdersController.getAllOrders)
router.get('/:id', OrdersController.getAllOrders)
router.put('/:id', OrdersController.getAllOrders)
router.delete('/:id', OrdersController.getAllOrders)
export default router