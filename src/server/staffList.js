staff = [
    {
        name: "Zombie",
        id: 1,
        attack: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 1
        },
        defence: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 1
        },
        rewardMethod: {
            pick: true,
            give: false
        },
        rewardQaunt: 1,
        tier: 1,
        retaliation: {
            clipAll: false,
            clipTypeSelection: "",
            clipRaritySelection: "",
            clipDurabilitySelection: "Lowest"
        },
        duration: 20, //in minutes
        location: "ground",
        boxCheck: 0
    },
    {
        name: "Brutus",
        id: 2,
        attack: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 5
        },
        defence: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 9
        },
        rewardMethod: {
            pick: false,
            give: true
        },
        rewardQaunt: 2,
        tier: 2,
        retaliation: {
            clipAll: false,
            clipTypeSelection: "Armour",
            clipRaritySelection: "",
            clipDurabilitySelection: ""
        },
        duration: 20, //in minutes
        location: "ground",
        boxCheck: 2
    },
    {
        name: "Aborath",
        id: 3,
        attack: {
            fire: 3,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 2
        },
        defence: {
            fire: 2,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 5
        },
        rewardMethod: {
            pick: false,
            give: true
        },
        rewardQaunt: 2,
        tier: 2,
        retaliation: {
            clipAll: false,
            clipTypeSelection: "",
            clipRaritySelection: "Highest",
            clipDurabilitySelection: ""
        },
        duration: 20, //in minutes
        location: "ground",
        boxCheck: 3
    },
    {
        name: "Malachai",
        id: 4,
        attack: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 2,
            shield: 2,
            chaos: 0,
            wild: 5
        },
        defence: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 3,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 5
        },
        rewardMethod: {
            pick: true,
            give: false
        },
        rewardQaunt: 2,
        tier: 3,
        retaliation: {
            clipAll: false,
            clipTypeSelection: "",
            clipRaritySelection: "Lowest",
            clipDurabilitySelection: "Highest"
        },
        duration: 20, //in minutes
        location: "ground",
        boxCheck: 4
    },
    {
        name: "Kitava",
        id: 5,
        attack: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 0,
            health: 2,
            shield: 2,
            chaos: 0,
            wild: 5
        },
        defence: {
            fire: 0,
            cold: 0,
            lightning: 0,
            physical: 3,
            health: 0,
            shield: 0,
            chaos: 0,
            wild: 5
        },
        rewardMethod: {
            pick: false,
            give: true
        },
        rewardQaunt: 1,
        tier: 4,
        retaliation: {
            clipAll: true,
            clipTypeSelection: "",
            clipRaritySelection: "",
            clipDurabilitySelection: ""
        },
        duration: 20, //in minutes
        location: "ground",
        boxCheck: 5
    }
]


module.exports = {
    staffList: function () { return staff }
}