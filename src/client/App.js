import React, { Component } from 'react';
import './app.css';
import Card from './Card.js';
import NewName from './NameForm';
import UserSelect from './UserSelect';
import Button from 'react-bootstrap/Button';
export default class App extends Component {
  state = {
    user: {
      name: '',
      id: '',
      key: ''
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
    if (this.state.user.key !== '') {
      fetch('/api/getUserCards', { header: { key: this.state.key } })
        .then(res => res.json())
        .then(cards => (this.setState({ cards })))
    }
  }
  getUser() {
    if (this.state.user.key !== '') {
      fetch('/api/getUser', { header: { key: this.state.key } })
        .then(res => res.json())
        .then((user) => (this.setState({ user })))
    }
  }
  getStaff() {
    fetch('/api/getStaff', {
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(staff => (this.setState({ staff }))
      );
  }
  setKey(key) {
    this.setState({
      key: key
    });
    this.drawUpdatedPage
  }

  render() {

    const name = this.state.user.name;
    let staffObj = "";
    let cardObj = "there isn't any cards";
    if (this.state.cards.length > 0) {
      cardObj = this.state.cards.map((card, index) => <Card card={card} />)
    }
    if (this.state.staff[0]) {
      staffObj = this.state.staff.map((member) =>
        <div>{member.name}
          <Button className='staff' onClick={() => { this.attack(member.id) }} key={member.id}> Attack </Button>
        </div>)
    }
    return (
      <div>
        <Card />
        {name ? <h1>{`Hello ${name}`}</h1> : <div><h1>We Havn't Met you yet!</h1> <NewName /></div>}
        <UserSelect setKey={() => this.setKey(key)} />
        <div><h3>staff</h3>{staffObj}</div>
        <div className='cardsContainer'><h3>cards</h3>{cardObj}</div>
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