const { Model, DataTypes } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user');
const Post = require('./post');

class Like extends Model {}

Like.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    likes: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Post,
          key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
    }
},{
    sequelize: sequelizeInstance,
    modelName: 'likes',
    timestamps: true,
    freezeTableName: true
})

module.exports = Like;