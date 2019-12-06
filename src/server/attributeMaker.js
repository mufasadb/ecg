const extraAttReq = .5 //breakpoint for extra attribute, 1 - extraAttReq is the chance of getting the most attributes available for that rarity
function applyExpAtt(rarity, type) {
    let attributes = {
        fire: 0,
        cold: 0,
        lightning: 0,
        physical: 0,
        health: 0,
        shield: 0,
        chaos: 0,
        wild: 0
    }
    if (rarity === "normal") { return attributes }
    let attCount = 1;
    let extraCount = 0;
    //check for extra attribute
    if ((Math.random()) > extraAttReq) {
        extraCount = 1;
    }
    if (rarity === "rare") {
        attCount = 3
    }
    attCount = attCount + extraCount
    attributes = attributeChoose(attributes, attCount, type)
    return attributes
}

function applyImpAtt(type, tier) {
    let attributes = {
        fire: 0,
        cold: 0,
        lightning: 0,
        physical: 0,
        health: 0,
        shield: 0,
        chaos: 0,
        wild: 0
    }
    let attCount = 1;
    let extraCount = 0;
    //check for extra attribute
    for (let i = 1; i < tier; i++) {
        if ((Math.random()) > extraAttReq) {
            extraCount++;
        }
    }
    attCount = attCount + extraCount
    attributes = attributeChoose(attributes, attCount, type)
    return attributes
};

function attributeChoose(attributes, attCount, type) {
    for (let i = 0; i < attCount; i++) {
        let options = []
        if (type === "shield" || type === "armour") {
            options = ["shield", "health"]
        } else if (type === "oHWeapon" || type === "tHWeapon") {
            options = ["physical", "cold", "lightning", "fire"]
        }
        else if (type === "amulet" || type === "ring") {
            options = ["cold", "lightning", "fire", "chaos"]
        }
        else if (type === "currency") {
            return attributes
        }
        else {
            (console.log('no attributes was selected during the attribute generating process'))
            return attributes
        }
        let selected = options[(Math.floor(Math.random() * options.length))]
        attributes[selected] = attributes[selected] + 1
    }
    return attributes
}
module.exports = {
    implicit: applyImpAtt,
    explicit: applyExpAtt
}