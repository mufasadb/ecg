
const express = require('express');
const bodyParser = require('body-parser')
const userTools = require(`./userTools`)
const booter = require('./runtime');
const content = booter.content();
const app = express();
const db = require(`./dbinteraction`);
const doStuff = require(`./attackSequence`)
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('dist'));
app.get('/api/getStaff', (req, res) => {
    let data = content.staff
    res.json(data);
});

app.get('/api/getUser', async (req, res) => {
    try {
        let data = await db.findUserByKey(req.header.key)
        let user = data.user
        res.json(user);
    }
    catch (e) { console.log(e) }
});
app.get('/api/getUserCards', async (req, res) => {
    try {
        let data = await db.findUserByKey(req.header.key)
        let cards = data.user.cards
        res.json(cards)
    } catch (e) { console.log(e) }
});
app.post(`/api/attack`, async (req, res) => {
    let items = req.body.items;
    console.log(items)
    let memberID = req.body.staffMemberID;
    doStuff.create(items, memberID);
    return res.json('sumsin')
})
app.post(`/api/newUser`, (req, res) => {
    let name = req.body.name;
    let user = userTools.create(name);
    data = db.userSave(user);
    return res.json(data);
});

function currentStaff() {
    return content.staff
}


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

module.exports = {
    currentStaff: function () {
        let staff = currentStaff();
        return staff
    }
}