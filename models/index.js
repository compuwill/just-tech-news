const User = require('./User');
const Post = require("./Post");

// create associations

// one to many, a USER can have many POSTs
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// one to one, one POST can only have ONE user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
