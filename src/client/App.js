import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
export default class App extends Component {
  state = {
    user: {
      name: '',
      id: 'test',
    },
    cards: [],
    staff: []
  };
  componentDidMount() {
    this.getStaff()
    this.getUser()
    this.getUserCards()

  }
  drawUpdatedPage() {
    this.getStaff()
    this.getUserCards()
  }
  select(item) {
    if (this.state.cards[item].selected) {
      let cards = this.state.cards
      cards[item].selected = false
      this.setState({ cards: cards })
    } else {
      let cards = this.state.cards
      cards[item].selected = true
      this.setState({ cards: cards })
    }
  }
  attack(member) {
    let selected = findSelected(this.state.cards)
    fetch('/api/attack', {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        userId: this.state.user.id,
        staffMemberID: member,
        items: selected
      })
    }).then(this.drawUpdatedPage())
  }
  getUserCards() {
    fetch('/api/getUserCards', { header: { key: 'abc123' } })
      .then(res => res.json())
      .then(cards => (this.setState({ cards })))
  }
  getUser() {
    fetch('/api/getUser', { header: { key: '123cba' } })
      .then(res => res.json())
      .then((user) => (this.setState({ user })))
  }
  getStaff() {
    fetch('/api/getStaff', {
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(staff => (this.setState({ staff }))
      );
  }
  newUser() {
    fetch('/api/newUser', {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: 'TestyBoi'
      })
    })
  }
  render() {
    const name = this.state.user.name;
    let staffObj = "";
    let cardObj = "there isn't any cards";
    if (this.state.cards.length > 0) {
      cardObj = this.state.cards.map((card, index) => <div className="card">
        <span className={isSelected(card)}> {card.name}</span>
        <button key={card.id} className="card" onClick={() => { this.select(index) }}>{isSelected(card)}</button>
      </div>)
    }
    if (this.state.staff[0]) {
      staffObj = this.state.staff.map((member) =>
        <div>{member.name}
          <button className='staff' onClick={() => { this.attack(member.id) }} key={member.id}> Attack </button>
        </div>)
    }
    return (
      <div>
        {name ? <h1>{`Hello ${name}`}</h1> : <h1>Loading.. please wait!</h1>}
        <button onClick={() => this.newUser()}>new User</button>
        <div><h3>staff</h3>{staffObj}</div>
        <div className='cardContainer'><h3>cards</h3>{cardObj}</div>
        <div className='selectedContainer'>
          <h3>selected cards</h3>
        </div>
      </div >
    );
  }
}
function isSelected(item) {
  if (item.selected) {
    return 'deselect'
  }
  return 'select'
}
function findSelected(array) {
  let selectedCards = []
  array.map(card => {
    if (card.selected) {
      selectedCards.push(card)
    }
  })
  return selectedCards
}