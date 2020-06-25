import React, { Component } from 'react';

//  import ReactPlayer from 'react-player';
 import './css/responsiveplayer.css';
 const ResponsivePlayer = ({url}) =>{
    return(
        <div className='player-wrapper'>
        {/* <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
          height='100%'
          controls={true}
        /> */}
      </div>
    )
 }

 export default ResponsivePlayer;