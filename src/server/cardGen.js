const cardList = require("./cardList");
const attMake = require("./attributeMaker");
let uniqueCards = cardList.cardList();
const cardHandler = require("./cardHandler.js")
const basicCurrencyChance = .15
const basicMagicChance = .05
let idCount = 1

let shieldNames = ["Tower Shield", "Round Shield"]
let oneHandedNames = ["One Handed Axe", "One Handed Sword"]
let twoHandedNames = ["Two Handed Axe", "Two Handed Sword"]
let armourNames = ["Leather Armour", "Full Sale Armour"]
let ringNames = ["Two-Stone Ring", "Ruby Ring"]
let amuletNames = ["Onyx Amulet", "Jade Amulet"]
const namincluture = {
    shield: shieldNames,
    oHWeapon: oneHandedNames,
    tHWeapon: twoHandedNames,
    armour: armourNames,
    ring: ringNames,
    amulet: amuletNames,
}

let fireSuffix = [" of the flame", " of ashes"]
let coldSuffix = [" of frost", " of Freezing"]
let lightningSuffix = [" of the storm", " of thunder"]
let physicalSuffix = [" of slaughter", " of bruising", " of Pain"]
let healthSuffix = [" of strength", " of light"]
let shieldSuffix = [" of defence", " of protection"]
let chaosSuffix = [" of degeneration", " of unbreaking"]
let wildSuffix = [" of the wild", " of the wind", " of many", " of nature"]
let suffixNamincluture = {
    fire: fireSuffix,
    cold: coldSuffix,
    lightning: lightningSuffix,
    physical: physicalSuffix,
    health: healthSuffix,
    shield: shieldSuffix,
    chaos: chaosSuffix,
    wild: wildSuffix,
}
let firePrefix = ["Flame ", "Heated ", "Flammable "]
let coldPrefix = ["Icey ", "Frost ", "Frostbitten ", "Chilling "]
let lightningPrefix = ["Shock ", "Thundering "]
let physicalPrefix = ["Sharpened ", "Hammering ", "Fisted ", "Unyielding ", "Tireless ", "Screaming "]
let healthPrefix = ["Life ", "Restoration ", "Medecinal "]
let shieldPrefix = ["Enduring ", "Reinforced ", "Barrier "]
let chaosPrefix = ["Chaotic ", "Poisoned "]
let wildPrefix = ["Unleashed ", "Unbridled"]
let prefixNamincluture = {
    fire: firePrefix,
    cold: coldPrefix,
    lightning: lightningPrefix,
    physical: physicalPrefix,
    health: healthPrefix,
    shield: shieldPrefix,
    chaos: chaosPrefix,
    wild: wildPrefix,
}
function ItemGen(rarity, type, tier) {
    this.type = type
    this.rarity = rarity
    this.currency = "";
    this.durability = 0;
    this.uniqueEffects = ""
    this.implicitAttributes = attMake.implicit(type, tier)
    this.explicitAttributes = attMake.explicit(rarity, type)
    this.name = namer(type, rarity, this.explicitAttributes)
    this.id = idCount
    idCount++
};


//the currency generator is throwned together for now and relies on there being 6 items in the currency array
// TODO make this a little less obscure and reliant on array positioning
// TODO make this less tiered and more based on scaling the tier
function CurrencyGen(tier) {
    let currencyArray = ["Whetstone", "Armourers Scrap", "Transmute", "Alteration", "Alchemy", "Chaos"]
    let currency = "default currency"
    if (tier < 3) {
        currency = currencyArray[Math.floor(Math.random() * 4)]
    } else if (tier == 3) {
        let rand = random(10)
        if (rand < 4) {
            currency = currencyArray[random(4)]
        } else if (rand > 4 && rand < 9) {
            currency = currencyArray[4]
        } else if (rand > 9) {
            currency = currencyArray[5]
        }
    } else if (tier === 4) {
        let rand = random(7)
        if (rand < 2) {
            currency = currencyArray[random(4)]
        } else if (rand > 2 && rand < 6) {
            currency = currencyArray[4]
        } else if (rand > 6) {
            currency = currencyArray[5]
        }
    } else if (tier > 4) {
        let rand = random(5)
        if (rand < 3) {
            currency = currencyArray[4]
        } else { currency = currencyArray[5] }
    }
    this.name = currency
    this.type = "currency"
    this.rarity = "normal"
    this.currency = currency;
    this.durability = 0;
    this.uniqueEffects = ""
    this.explicitAttributes = attMake.explicit(this.rarity, this.type)
    this.implicitAttributes = attMake.explicit(this.rarity, this.type)
    this.id = idCount
    idCount++
}

function cardPackGen(tier) {
    let cardPack = []
    for (let i = 0; i < 60; i++) {
        if (i < 20) { cardPack.push(new CurrencyGen(tier)) }
        else if (i > 19) {
            let rarity = "normal"
            let type = "armour"
            if (tier == 1) {
                if (random(8) > 6) {
                    rarity = "magic"
                }
                let typeOptions = ["armour", "shield", "oHWeapon", "tHWeapon"]
                type = typeOptions[random(4)]
            }
            cardPack.push(new ItemGen(rarity, type, tier))
        }

    }
    cardPack = cardHandler.shuffle(cardPack)
    return cardPack
}
function randomBasicCards() {
    let cardPack = []
    let typeOptions = ["armour", "shield", "oHWeapon", "tHWeapon"]
    for (let i = 0; i < 9; i++) {
        if (random(1) > basicCurrencyChance) {
            cardPack.push(new CurrencyGen(1))
        } else {
            let rarity = 'normal'
            let type = ''
            if (random(1) > basicMagicChance) {
                rarity = 'magic'
            }
            type = typeOptions[random(4)]
            cardPack.push(new ItemGen(rarity, type, 1))
        }
    }
    return cardPack
}



function namer(type, rarity, atts) {
    let name = "Alpha Test Item"
    name = namincluture[type][Math.floor(Math.random() * namincluture[type].length)]
    if (rarity == "magic") {
        let favQuant = 0
        let fav = 0
        for (att in atts) {
            if (atts[att] > favQuant) {
                fav = att,
                    favQaunt = atts[att]
            }
        }
        if (Math.random() > .5) {
            let nameOptions = suffixNamincluture[fav]
            name = name + nameOptions[Math.floor(Math.random() * nameOptions.length)]
        } else {
            let nameOptions = prefixNamincluture[fav]
            name = nameOptions[Math.floor(Math.random() * nameOptions.length)] + name
        }
    }
    if (rarity == "rare") {
        let favQuant = 0
        let fav = 0
        for (att in atts) {
            if (atts[att] > favQuant) {
                fav = att,
                    favQaunt = atts[att]
            }
        }
        let nameOptions = suffixNamincluture[fav]
        let nameSecondOptions = prefixNamincluture[fav]
        name = nameSecondOptions[Math.floor(Math.random() * nameSecondOptions.length)] + name + nameOptions[Math.floor(Math.random() * nameOptions.length)]
    }
    return name
}

function random(val) {
    return Math.floor(Math.random() * val)
}
module.exports = {
    cardPack: function (tier) {
        return cardPackGen(tier)
    },
    uniqueList: function () { return uniqueCards },
    basicCards: function () { return randomBasicCards() }
}