const { v4: uuid } = require('uuid')
const bcrypt = require('bcrypt');
// const userRepository = require('../repositories/userRepository');
const userRepository = require('../repositories/userMongoRepository');

const userService = {
    getAll: async () => {
        const selectDefault = ['id', 'name', 'email'];
        const orderDefault = 'name';

        const users = await userRepository.findAllOrderBy(selectDefault, orderDefault);
        return users;
    },
    save: async (data) => {
        const id = uuid();

        const password = bcrypt.hashSync(data.password, 10);

        const userExist = await userRepository.findByEmail(data.email);

        if (userExist != null) {
            throw { error: { message: 'Email já existe' } };
        }

        let newUser = {
            id,
            name: data.name,
            email: data.email,
            password
        };

        const user = await userRepository.save(newUser);

        return user;
    },
    getOne: async (id) => {
        if (!id) {
            throw { message: 'ID inválido', status: 404 };
        }

        const user = await userRepository.findOne(id);

        if (user == null) {
            throw { error: { message: 'User não encontrao' } }
        }

        return user
    }

}

module.exports = userService;