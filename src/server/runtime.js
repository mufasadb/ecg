const staffGen = require('./staffGen');
const cardGen = require('./cardGen');
const cardDo = require(`./cardHandler`)

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
function changeDeck(staffMemberID, selectedID){
    let activeMember = findStaff(staffMemberID)
}

console.log(getChoices(1));

function findStaff(staffMemberID){
    let memberIndex = staff.findIndex(member => {
        console.log(member.id)
        console.log(staffMemberID)
        return member.id === staffMemberID
    });
    return staff[memberIndex]
}
function findCard(staff,cardID){
    let cardIndex = staff.cards.findIndex(card => {
        return card.id === cardID
    });
    return card[cardIndex]
}

module.exports = {
    content: function () {
        return content
    },
    rewardChoose: function (staffMemberID) {
        getChoices(staffMemberID)
    }
};