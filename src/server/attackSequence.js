const runtime = require('./runtime')

function findMember(memberID) {
    let memberList = runtime.content().staff;
    let memberIndex = memberList.findIndex(member => {
        return member.id === memberID
    });

    console.log(`member list ${memberList[memberIndex].name}`);
    return memberList[memberIndex];
}

function adStats(itemAtts, totalAtts) {
    for (att in itemAtts) {
        totalAtts[att] = totalAtts[att] + itemAtts[att]
    }
    return totalAtts
}
function declareStats(items, member) {
    console.log(member.name)
    let pass = false;
    let defensiveTypes = ['shield', "armour"]
    let offensiveTypes = ['oHWeapon', 'tHWeapon']
    let jeweleryTypes = ['ring', 'amulet']
    let defensiveAtts = {
        fire: 0,
        cold: 0,
        lightning: 0,
        physical: 0,
        health: 0,
        shield: 0,
        chaos: 0,
        wild: 0
    }
    let offensiveAtts = JSON.parse(JSON.stringify(defensiveAtts))
    let remainingAtts = JSON.parse(JSON.stringify(defensiveAtts))
    console.log(items.length)
    for (item in items) { 

        if (defensiveTypes.includes(items[item].type)) {
            defensiveAtts = adStats(items[item].implicitAttributes, defensiveAtts)
            defensiveAtts = adStats(items[item].explicitAttributes, defensiveAtts)
        }
        else if (offensiveTypes.includes(items[item].type)) {
            offensiveAtts = adStats(items[item].implicitAttributes, offensiveAtts)
            offensiveAtts = adStats(items[item].explicitAttributes, offensiveAtts)
        }
        else if (jeweleryTypes.includes(items[item].type)) {
            remainingAtts = adStats(items[item].implicitAttributes, remainingAtts)
            remainingAtts = adStats(items[item].explicitAttributes, remainingAtts)
        }
        else {
            console.log(`there was an error on identifying how to attribute the following item`)
            console.log(items[item].name)
        }
    }
    let defence = JSON.parse(JSON.stringify(member.defence));
    let attack = JSON.parse(JSON.stringify(member.attack));
    let defendResults = beatable(defensiveAtts, remainingAtts, member.attack)
    remainingAtts = defendResults.remaining
    let attackResults = beatable(offensiveAtts, remainingAtts, member.defence)
    //TODO deal with a jewelery fire (or other) stats may be consumed in 'wild' player attack when they're could be used for 'fire' defence
    console.log(`was it defended? ${defendResults.isBeat}`)
    console.log(`was it killed? ${attackResults.isBeat}`)
    return [defendResults.isBeat, attackResults.isBeat]
}
function beatableAgain(defense, attack, generic, enemyAtt, enemyDef){
    for(att in enemyAtts){
        if(att != 'wild'){
            
        }
    }
    
}
function beatable(primaryAtts, remainingAtts, enemyAtts) {
    for (att in enemyAtts) {
        if (att === 'wild') {
            let primaryLeft = 0
            for (att in primaryAtts) { primaryLeft = primaryLeft + primaryAtts[att] }
            primaryLeft = primaryLeft - enemyAtts[att]
            if (primaryLeft < 0) {
                let remainingLeft = 0
                for (atty in remainingAtts) { remainingLeft = remainingLeft + remaining[atty] }
                remainingLeft = remainingLeft + primaryLeft
                if (remainingLeft < 0) {
                    return {
                        isBeat: false,
                        remaining: remainingAtts
                    }
                }
            }
        } else {
            primaryAtts[att] = primaryAtts[att] - enemyAtts[att]
            enemyAtts[att] = 0
            if (primaryAtts[att] < 0) {
                remainingAtts[att] = remainingAtts[att] + primaryAtts[att] //offensive atts should now be the difference between what you need and what you have
                if (remainingAtts[att] < 0) {
                    return {
                        isBeat: false,
                        remaining: remainingAtts
                    }
                }
            }
        }
    }
    return {
        isBeat: true,
        remaining: remainingAtts
    }
}
function attack(items, memberID) {
    let member = findMember(memberID);
    console.log(member.name)
    let didKill = declareStats(items, member)
    let action = ''
    return action
}
module.exports = {
    create: function (items, memberID) {
        let result = attack(items, memberID)
        return result
    }

}