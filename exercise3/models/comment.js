const { Model, DataTypes } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user');
const Post = require('./post');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    comments: {
        type: DataTypes.TEXT,
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
    modelName: 'comments',
    timestamps: true,
    freezeTableName: true
})

module.exports = Comment;