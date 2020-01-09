const mongo = require('mongodb').MongoClient;
const cardTools = require('./cardGen');
const mongoose = require('mongoose');
const uri = "mongodb+srv://server:iwanttoworkforggg@cluster0-52jcd.mongodb.net/test?retryWrites=true&w=majority"
let userSchema = new mongoose.Schema({
    name: String,
    key: String,
    id: Number,
    cards: Object
});

let User = mongoose.model('User', userSchema);
let id = 0
const isOffline = false

const offlineUser = {
    name: "testGuy",
    key: "cba321",
    id: "1337",
    cards: cardTools.basicCards()
}

if (isOffline === false) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

async function userGet(key) {
    User.find({}, (err, users) => {
        console.log(users)
    });
}
async function findUserByKey(key) {
    let response = {}
    if (isOffline) {
        response.status = '200'
        response.user = offlineUser
    } else {
        User.find({ name: "name" }, (err, users) => {
            // console.log(users)
        });//TODO CHECK IF THIS WORKS
    }
    return response
}
async function userList() {
    let response = {}
    let list = []
    await User.find({}, (err, users) => {
        for (user of users) {
            list.push(
                {
                    name: user.name,
                    key: user.key
                }
            )
        }
    })
    response.status = '200'
    response.list = list
    return response
}
async function userSave(data) {
    const response = {}
    if (isOffline) {
        response.status = '200',
            response.user = offlineUser
        return response
    }
    let user = new User(data)
    return await user.save().then((user) => {
        response.status = '200'
        response.user = user
        console.log(response)
        return response;
    }).catch(err => { return console.log(err) });
};
module.exports = {
    userSave: async function (user) {
        return await userSave(user)
    },
    findUserByKey: function (key) {
        return findUserByKey(key)
    },
    userList: async function () {
        return await userList()
    }
};