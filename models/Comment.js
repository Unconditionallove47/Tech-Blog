//cant get to work but its extra.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
//make sure you set up correctly!!
Comment.init({
    body: {
        type: DataTypes.STRING,
        allowNull:false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
   },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'blog',
            key: 'id'
        }
   },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
});

module.exports = Comment;