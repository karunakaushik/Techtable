import React, { Component } from 'react'
import './css/lmsTestCard.css'
import Crown from './icons/crownicon.svg'
import List from './icons/listicon.svg'
import MapSurfing from './icons/mapsurfingicon.svg'
import DropImg from './icons/dropdownIcon.svg'
import ChallengeCard from './challengeCard'
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class LMSTestCard extends Component {
    // constructor() {
    //     super();
        
    //     // Initial state
    //     this.state = { open: false };
        
    // }
    
    //   toggle() {
    //     this.setState({
    //       open: !this.state.open
    //     });
    // }
    render() {
        
        const chapterdetails=this.props.chapterdetails

        return(
            <div className="testCardContainer">
               <div className="testCard_div1">
                 <div className="fixed_testCard_1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <div className="cardIcon1">
                        <img src={List} alt="List" />
                    </div>
                    <div className="card_Info1">
                        <hi className="cardHeading1">
                           {chapterdetails.chapter}
                        </hi>
                        <p className="chapterTestInfo">
                            Test yourself <br />
                            {chapterdetails.questions}
                        </p>
                    </div>
                        <div className="dropimg_1">
                            <img src={DropImg} alt="DropImg" style={{cursor:'pointer'}} />
                        </div>
                    </div>

                    <div className="collapse" id="collapseExample">
                                <ChallengeCard />
                            
                    </div> 
                </div>
                <div className="testCard_div2">
                    <div className="fixed_testCard_2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <div className="cardIcon2">
                            <img src={MapSurfing} alt="MapsurfingMan" />
                        </div>
                        <div className="card_Info2">
                            <hi className="cardHeading2">
                                Challenge
                            </hi>
                            <p className="chapterTargetInfo">
                                {chapterdetails.challenger}
                                 <br />
                                earn 150x  <img src={Crown} alt="Crown " />
                            </p>
                        </div>
                        <div className="dropimg_2">
                            <img src={DropImg} alt="DropImg" style={{cursor:'pointer'}} />
                        </div>
                    </div>

                    {/* <div className="openable_testCard_2"> */}
                        <div className="collapse" id="collapseExample">
                                <ChallengeCard />
                            
                        </div>                        
                    {/* </div> */}

                </div>
            </div>
        )
    }
}