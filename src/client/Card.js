import React, { Component } from 'react';
import logo from './arrow.png';
class Card extends Component {
    constructor() {
        return super();
    }
    render() {
        return (
            <div>
                <div className="cardConatiner">
                    <div className="cardBorder">
                        <div className="cardHeaderContainer">
                            <div className="cardHeaderLeftImage"> <img src={logo} className="logoLeft" /></div>
                            <div className="cardtitleHolder">
                                {/* <h1 className="cardTitle">Full Plate</h1> */}
                            </div>
                            <div className="cardHeaderRightImage">  <img src={logo} className="logoRight" /> </div>
                        </div>
                        <div className="cardBody">
                            <div className="cardLeftBody">
                                <div className="cardTypeContainer">
                                    <div className="darkType"></div>
                                    <div className="darkType"></div>
                                    <div className="lightType"></div>
                                    <div className="darkType"></div>
                                    <div className="darkType"></div>
                                </div>
                            </div>
                            <div className="cardCentreBody">
                                <div className="Implicit Stats"></div>
                                <div className="explicitStats"> </div>
                                <div className="mainImage"> </div>
                            </div>
                            <div className="cardRightBody">
                                <div className="durabilitySection">
                                    <div className="durabilityTitle">
                                        {/* <h2>Durability</h2> */}
                                    </div>
                                    <div className="lightType"><img /></div>
                                    <div className="lightType"><img /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >)
    }
}
export default Card;