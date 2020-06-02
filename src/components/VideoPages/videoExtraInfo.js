import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './css/videoExtraInfo.css'
import FormulaIcon from './icons/formula.svg'
import NOtesIcon from './icons/paperclip.svg'
import DoubtsIcon from './icons/chatboxes.svg'
import TestsIcon from './icons/booksIcon.svg'
import Formula from './VideoExtraInfo/formula'
import Notes from './VideoExtraInfo/notes'
import ChatBot from './VideoExtraInfo/doubts'
export default class VideoExtraInfo extends Component{
    state = {
        active: false,
      }
    render(){
        
        const routes = [
            {
              path: "/formula",
              exact: true,
              main: () =><div><Formula /></div>
            },
            {
              path: "/notes",
              main: () => <div style={{width:"100%"}}><Notes /></div>
            },
            {
              path: "/doubts",
              main: () => <div  style={{width:"100%"}}><ChatBot /></div>
            },
            {
                path: "/tests",
                main: () => <h2>Tests</h2>
              }

          ]


        return(
            <BrowserRouter>
                <div className="extra_Info_container">
                    <div className="extra_info_column_1_topics">
                        <div className="formulaSVG_div">
                            <Link to="/formula" style={{textDecoration: "none" }}>
                                <img  src={FormulaIcon} alt="FormulaIcon" /> <br /> 
                                <h1 className="formulaText">Formulae</h1>
                            </Link>
                        </div>
			            <div className="notesSVG_div">
                            <Link to="/notes" style={{textDecoration: "none"}}> 
                                <img src={NOtesIcon} alt="NotesIcon" /> <br /> 
                                <h1 className="notesText">Notes</h1>
                            </Link>
                        </div>			            
                        <div className="doubtsSVG_div">
                            <Link to="/doubts" style={{textDecoration: "none"}}>
                                <img src={DoubtsIcon} alt="DoubtsIcon" /> <br /> 
                                <h1 className="doubtsText">Doubts</h1> 
                            </Link>
                        </div>
                        <div className="testsSVG_div">
                            <Link to="/tests" style={{textDecoration: "none"}}>
                                <img src={TestsIcon} alt="TestsIcon" /><br /> 
                                <h1 className="testsText">Test</h1> 
                            </Link>
                        </div>
           	        </div>

                <div className="extra_info_column_2_details">
                    {routes.map((route, index) => {
                        return(
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                        )
                    })}
                </div>
                </div>           
            </BrowserRouter>
        )
    }
}


