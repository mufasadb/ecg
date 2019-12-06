const cards = [
    {
        name: "",
        tier: 1,
        type: {
            oHWeapon: false,
            tHWeapon: false,
            armour: false,
            amulet: false,
            ring: false,
            currency: false,
            shield: false
        },
        rarity: {
            normal: true,
            magic: false,
            rare: false,
            unique: false
        },
        currency: "",
        durability: 0,
        implicitStats : {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 0
        },
        explicitStats: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 0
        },
        uniqueEffects: ""
    }
]
module.exports = {
    cardList: function () { return cards }
}