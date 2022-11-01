import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    
  }

 render() {
  return (
    <div className='AppBackground'>
      <div className='HomePageContent'>
        <div className='contentContainer'>
          <div style={{display: 'flex'}}>
            <div className='introduction'>
              Anthony Michael Gatto -
            </div>
            <div className='intro2'>
              Software Engineer
            </div>
          </div>
          <hr></hr>
          <div className='photosContainer'>
            <img src="Hiking.jpeg" height="378px" width="283.5px" class="d-block" alt="Hiking Photograph"/>
          </div>
        </div>
      </div>
      
    </div>
  );
}
}

