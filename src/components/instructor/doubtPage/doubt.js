import React, { Component } from 'react'
import '../css/doubt.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ClassesDoubt from './doubtClasses'
import SortIcon from '../img/sortime.svg'

export default class InstructorDoubtPage extends Component{

    
    
    render() {
        const routes = [
            {
              path: "/classIV",
              exact: true,
              main: () =><ClassesDoubt />
            },
            {
              path: "/classV",
              main: () =><ClassesDoubt />
            },
            {
              path: "/classVI",
              main: () =><ClassesDoubt />
            },
            {
                path: "/classVII",
                main: () =><ClassesDoubt />
              }

          ]
        return(
            <BrowserRouter>
            <div className="outerContainer_Doubt">
                <div className="div1_doubt">
                    <h1 className="heading_ClearDoubt">Clear doubts</h1>
                    <div className="classes_Nav">
                    <NavLink to="/classIV" style={{textDecoration: "none" }} className="doubt_class"> Class IV</NavLink>
                    <NavLink to="/classV" style={{textDecoration: "none" }} className="doubt_class"> Class V</NavLink>
                    <NavLink to="/classVI" style={{textDecoration: "none" }} className="doubt_class"> Class VI</NavLink>
                    <NavLink to="/classVII" style={{textDecoration: "none" }} className="doubt_class"> Class VII</NavLink>
                    </div>
                </div>
                <div className="sort_btn_div">
                       <button className="sortDoubtButton">Doubts I haven't cleared <img src={SortIcon} alt="sortIcon" /></button>
                       <button className="sortLectureButton">Sorted by lecture <img src={SortIcon} alt="sortIcon" /></button>
                </div>
                <div className="eachClasses_Doubt">
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