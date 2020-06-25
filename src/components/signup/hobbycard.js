import React, { Component } from 'react'
import './css/hobbyCard.css'
import Animal from './img/images.svg'
import Music from './img/musical.svg'
import Games from './img/ball.svg'
import Dance from './img/dance.svg'
import puzzle from './img/puzzle.svg'
import Arrow from './img/arrow.svg'
import Reading from './img/bookreader.svg'
import Drawing from './img/brush.svg'
import Exercise from './img/exercise.svg'
export default class HobbyPage extends Component{
    render() {
        return(
            <div className="outercontainerHobbyPage">
              <div className="animalContainer">
                  <div className="circleDiv">
                  <img src={Animal} alt="Animal" />
                  </div>

                  <div className="likeDivHobby">
                      <h1>
                          What do you like
                      </h1>
                  </div>
              </div>
              <div className="hobbiesOutercontainer">
                  <div className="userNameDiv">
                      <p> welcome</p>
                      <h2>Kartic</h2>
                      <br />
                      <h1>
                       Let's get to know you better
                      </h1>

                  </div>
              
              <div className="hobbiesBox">
                  <div className="outerHobbiesBox1">
                      <div className="hobbiesBox1">
                      <img src={Music} alt="Music" />
                  </div>
                       <p>Music</p>
                  </div>
                  <div className="outerHobbiesBox1">
                    <div className="hobbiesBox1">
                      <img src={Games} alt="Games" />
                      </div>
                      <p>Games</p>
                  </div>
                  <div className="outerHobbiesBox1">
                    <div className="hobbiesBox1">
                      <img src={Dance} alt="Dance" />
                      </div>
                      <p>Dancing</p>
                  </div>
                  <div className="outerHobbiesBox1">
                    <div className="hobbiesBox1">
                      <img src={Reading} alt="Reading" />
                      </div>
                      <p>Reading</p>
                  </div>
                  <div className="outerHobbiesBox1">
                  <div className="hobbiesBox1">
                      <img src={puzzle} alt="puzzle" />
                      </div>
                      <p>Puzzle</p>
                  </div>
                  <div className="outerHobbiesBox1">
                    <div className="hobbiesBox1">
                      <img src={Drawing} alt="Drawing" />
                      </div>
                      <p>Drawing</p>
                  </div>
                  <div className="outerHobbiesBox1">
                    <div className="hobbiesBox1">
                      <img src={Exercise} alt="Exercise" />
                      </div>
                      <p>Exercise</p>
                  </div>
              </div>
              </div>
              <div className="continueButtonDiv">
              <button  type="submit"><img src={Arrow} alt="Google" /> &nbsp; CONTINUE</button>
              </div>
            </div>
        )
    }
}
