const { Model, DataTypes } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
    },
    image: {
        type: DataTypes.STRING
    }
},{
    sequelize: sequelizeInstance,
    modelName: 'post',
    timestamps: true,
    freezeTableName: true
})

module.exports = Post;