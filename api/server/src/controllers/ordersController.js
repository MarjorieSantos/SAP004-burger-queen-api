import Util from './util';
const util = new Util();

class MenuController {
    static async getAllMenus(req, res) {
        util.setSuccess(200, 'Menus retrieved', { id: 1 })
        return util.send(res)
    }
}

export default MenuController;