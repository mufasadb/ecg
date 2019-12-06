const cardTools = require(`./cardGen`);
let id = 0

function keyGen(){
    let hexArray = ['a','b','c','d','e','f','g','1','2','3','4','5','6','7','8','9']
    let key = ''
    for(let i = 0; i > 32; i++){
        key = key + hexArray[Math.floor(Math.random()*16)]
    }
    //keys can currently be repeated
    //TODO check if key exists and re-run if it does
    return key
}

function makeUser(name) {
    let key = keyGen()
    let cards = cardTools.basicCards();
    let user = {
        name: name,
        key: key,
        id: id,
        cards: cards
    }
    id ++
    return user
}
function getUser(key){

}


module.exports = {
    create:function (name){
        let user = makeUser(name)
        return user
    }
}