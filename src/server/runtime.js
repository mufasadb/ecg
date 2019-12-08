const staffGen = require('./staffGen');
const cardGen = require('./cardGen');
const cardDo = require(`./cardHandler`);
const db = require(`./dbinteraction`);

let staff = staffGen.staff();
for (member in staff) {
    staff[member].cards = cardGen.cardPack(staff[member].tier)
}
let players = [];
const content = {
    staff: staff
};
function getChoices(staffMemberID) {
    let activeMember = findStaff(staffMemberID);
    activeMember.cards = cardDo.shuffle(activeMember.cards)
    let cardCount = activeMember.rewardQuant
    let choices = []
    for (let i = 0; i < cardCount; i++) {
        choices.push(activeMember.cards[i]);
    }
    return choices
}
function doChoice(userKey, staffMemberID, choiceIds){
    let activeMember = findStaff(staffMemberID)
    db.findUserByKey(userKey).then(results => {
        let user = results.user
        for(card in choiceIds){
            user.cards.push(card)
        }
        for(card in choiceIds){
            activeMember.cards.splice(card,1)
        }
        console.log('user length and staff length')
        console.log(user.cards.length)
        console.log(activeMember.cards.count)
    }).catch(err => {console.log(err)})
}

console.log(getChoices(2));
console.log(doChoice('cba321', 2, [getChoices(2)[1]]))

function findStaff(staffMemberID){
    let memberIndex = staff.findIndex(member => {
        console.log(member.id)
        console.log(staffMemberID)
        return member.id === staffMemberID
    });
    return staff[memberIndex]
}


module.exports = {
    content: function () {
        return content
    },
    rewardChoose: function (staffMemberID) {
        getChoices(staffMemberID)
    },
    doChoice: function (userKey, staffMemberID, choiceIds){
        doChoice(userKey, staffMemberID, choiceIds)
    }
};