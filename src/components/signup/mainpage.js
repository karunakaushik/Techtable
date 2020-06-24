
import React, { Component } from 'react'
import Headline from './Headline.js'
import SideBar from './sidebar.js'
import Content from './Content.js'
import GradeLevel from './category.js'


export default class Mainpage extends Component {
    render() {
        return(
            <div className="mainpageContainer">
            	<Headline></Headline>
                {/*<SideBar></SideBar>*/}
                <GradeLevel/>
            </div>
        )
    }
}
