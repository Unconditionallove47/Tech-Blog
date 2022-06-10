const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username:"joe",
        password:"password"
    },
    {
        username:"otherjoe",
        password:"password1"
    },
    {
        username:"therealjoe",
        password:"Password1"
    }
]

const blogs = [
    {
        title:"my first blog",
        body:"Welcome to my blog, im going to do this every day! Like share subscribe",
        UserId:1
    },
    {
        title:"my final blog",
        body:"I cant do this anymore, blogging every day is too hard.  It was a fun half week yall",
        UserId:1
    },
    {
        title:"Cats: a review",
        body:"I love cats I love every kind of cat.  I want to hug all them but you cant. Cant hug every cat......Cant hug every cat. ",
        UserId:2
    }
]

const comments = [
    {
        body: "Now thats what i call music!",
        blog_id: 1,
        user_id: 1
    },
    {
        body: "Yippy!",
        blog_id: 2,
        user_id: 1
    }
]

const seeds = async () => {

    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(users, { individualHooks: true });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);

        process.exit(0);
    } catch(err){
        console.log(err);
    };

};

seeds();