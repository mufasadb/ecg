import React, { Component } from 'react';
import logo from './arrow.png';
import heart from './heart.png';
class Card extends Component {
    constructor() {
        return super();
    }
    render() {
        const explicitObject = "";
        let implicitObject = "";
        let count = 2;
        for(let i = 0; i < count; i++){
            implicitObject = implicitObject + "<img src={logo}/>"
        }
        return (
            <div>
                <div className="cardConatiner">
                    <div className="cardBorder">
                        <div className="cardHeaderContainer">
                            <div className="cardHeaderLeftImage"> <img src={logo} className="logoLeft" /></div>
                            <div className="cardtitleHolder">
                                <h1 className="cardTitle">Full Plate</h1>
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
                                <div className="cardImplicitStats">{implicitObject}</div>
                                <div className="cardExplicitStats"> {explicitObject}</div>
                                <div className="cardMainImage">
                                    <div className="cardShine">
                                        <img src="https://gamepedia.cursecdn.com/pathofexile_gamepedia/c/c2/Sun_Plate_inventory_icon.png?version=5fc9af4d7887bca14819acd9384a462e"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="cardRightBody">
                                <div className="durabilitySection">
                                    <div className="durabilityTitle">
                                        {/* <h2>durability</h2> */}
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