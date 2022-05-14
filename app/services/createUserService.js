const { v4: uuid} = require('uuid')
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const createUserService = async (data) => {
    const id = uuid();
    const password = bcrypt.hashSync(data.password, 10);
    
    const userExist = await userRepository.findByEmail(data.email);
    if (userExist != null) {
        throw {error: { message: 'Email já existe'}};
    }

    let newUser = {id, name: data.name, email: data.email, password};

    const user = await userRepository.save(newUser);
    return user;
}

module.exports = createUserService;