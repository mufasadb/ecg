import React, { Component } from 'react';
import heart from './assetts/heart.png';
import fire from './assetts/fire.png';
import cold from './assetts/cold.png';
import lightning from './assetts/lightning.png';
import physical from './assetts/physical.png';
import chaos from './assetts/chaos.png';
import wild from './assetts/wild.png';

class Card extends Component {
    constructor() {
        return super();
    }
    render() {
        let src = "";
        switch(this.props.att){
            case "heart": 
            src = heart
            break;
            case "fire": 
            src = fire
            break;
            case "lightning": 
            src = lightning
            break;
            case "cold": 
            src = cold
            break;
            case "physical": 
            src = physical
            break;
            case "chaos": 
            src = chaos
            break;
            case "wild": 
            src = wild
            break;
        }
        return(<div className="icon" key={this.props.key}><img src={src}/></div>)
    }