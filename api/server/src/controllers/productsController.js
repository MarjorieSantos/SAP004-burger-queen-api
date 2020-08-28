import Util from './util';
const util = new Util();

class ProductsController {
    static async getAllOrders(req, res) {
        util.setSuccess(200, 'Menus retrieved', { id: 1 })
        return util.send(res)
    }
}

export default ProductsController;