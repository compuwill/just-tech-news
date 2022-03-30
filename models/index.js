const User = require('./User');
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations

// one to many, a USER can have many POSTs
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// one to one, one POST can only have ONE user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});



// VOTE
//Many to Many, User and Post models will be connected, but in this case through the Vote model
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// One to One,
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// One to One
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// One to Many
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// One to Many
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});




//COMMENT
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Vote, Comment };
