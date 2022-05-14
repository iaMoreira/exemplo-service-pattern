const userService = require("../services/userService");
const createUserService = require("../services/createUserService");;

const userController = {
    index: async (req, res) => {
        const users = await userService.getAll();
        return res.json(users);
    },

    store: async (req, res) => {
        const data = req.body
        try {
            // const user = await userService.save(data);
            const user = await createUserService(data);
            return res.status(201).json(user)  
        } catch (error) {
            res.status(error.status || 400).json(error);
        }
    },
    show: async (req, res) => {
        const {id} = req.params

        try {
            const user = await userService.getOne(id);
            return res.status(200).json(user)  
        } catch (error) {
            return res.status(error.status || 404).json(error)
        }
    } 

}

module.exports = userController