const User = require('../models/User');

const userMongoRepository = {
    findAll: async () => {
        const users = await User.find();
        return users; 
    },
    findAllOrderBy: async (select, order = 'name' ) => {
        const users = await User.find().sort( { name: 1 } )
        return users;
    },
    save: async (data) => {
        const user = await User(data).save();
        return user;
    },
    findOne: async (id) => {
        const user = await User.findById(id).exec();
        return user;
    },
    findByEmail: async (email) => {
        const user = await User.findOne({ email });
        return user;
    }


}


module.exports = userMongoRepository