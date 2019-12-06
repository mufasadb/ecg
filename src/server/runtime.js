const staffGen = require('./staffGen');
const cardGen = require('./cardGen');

let staff = staffGen.staff();
for(member in staff){
    staff[member].cards = cardGen.cardPack(staff[member].tier)
}
let players = [];
const content = {
    staff: staff
};
function getChoices(staffMemberID){
    let memberIndex = staff.findIndex(member => {
        return member.id === staffMemberID
    });
    staff[memberIndex].rewardQuant
    
}

module.exports = {
    content: function () {
        return content
    },
    rewardChoose: function (staffMemberID) {
        getChoices(staffMemberID)
    }
};