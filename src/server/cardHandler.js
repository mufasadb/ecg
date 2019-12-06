function shuffle(deck) {
    let deckShuffled = [];
    let ogDeck = JSON.parse(JSON.stringify(deck));
    for (card in deck) {
        let picked = Math.floor(Math.random() * (deck.length - card));
        deckShuffled.push(ogDeck[picked]);
        ogDeck.splice(picked, 1);
    }
    return deckShuffled
}

module.exports = {
    shuffle: function (deck) {
        return shuffle(deck)
    }
}

