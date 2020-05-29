import React, { Component } from 'react';
import './css/challengeCard.css'
import Challenger1 from './icons/challenger1.svg'
import Challenger2 from './icons/challenger2.svg'
import Trophy1 from './icons/bluetrophy.svg'
import Corwn1 from './icons/bluecrown.svg'
import Badge1 from './icons/blueBadge.svg'
import SearchImg from './icons/search.svg'
import Trophy2 from './icons/orangeTrophy.svg'
import Corwn2 from './icons/orangecrown.svg'
import Badge2 from './icons/orangeBadge.svg'
export default class ChallengeCard extends Component{
    render() {
        return(
            <div className="challenge_Card_Container">
                <div className="challenge_Card_row_1">
                        <div className="challenger_1">
                             <div className="challenger_name_1">
                                  <img src={Challenger1} alt="Challenger1" />
                                  <p style={{fontSize:"15px"}}>Kartic</p>
                             </div>
                             <div className="result_div_1">
                                 <div className="each_score_1">
                                    <div className="icons_TCB_1">
                                        <img src={Trophy1} /> 
                                        <img src={Corwn1} />
                                        <img src={Badge1} />
                                    </div>
                                    <div className="obtained_score_1">
                                        <p>84</p>
                                        <p>333</p>
                                        <p>782</p>
                                    </div>
                                 </div>
                                 <div className="final_score_1">
                                    <p>
                                      Score 8324
                                    </p>
                                 </div>                                  
                             </div>
                        </div>


                      <div className="vs_div">
                             <h1 className="vs_text"> VS </h1>
                      </div>


                      <div className="challenger_2">
                          <div className="result_div_2">
                              <div className="each_score_2">
                                <div className="icons_TCB_2">
                                    <img src={Trophy2} />
                                    <img src={Corwn2} />
                                    <img src={Badge2} />
                                </div>
                              <div className="obtained_score">
                                        <p>88</p>
                                        <p>432</p>
                                        <p>666</p>
                                 </div>
                            </div>      
                            <div className="final_score_2">
                                <p>
                                  Score 8324
                                  </p>
                            </div>
                          </div>
                          <div className="challenger_name_2">
                                  <img src={Challenger2} alt="Challenger2" />
                                  <p style={{fontSize:"15px"}}>Rahul</p>
                          </div>
                      </div>
                </div>
                <div className="challenge_Card_row_2">
                    <div className="buttons">
                        <button className="search_button"><img src={SearchImg} alt="SearchImg" />&nbsp; &nbsp; search</button>
                        <button className="challenge_button">challenge</button>

                    </div>
                </div>
            </div>
        )
    }
}