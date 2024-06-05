import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const[ambient,setambient]=useState('');
  const numRaindrops = 250; 

  const changeAmbient=(amb)=>{
    setambient(amb);
    
     
  }
  useEffect(() => {
    // Function to handle effects when 'ambient' state changes
    if (ambient === "earthquake") {
      Shake();
    } else {
      StopShake();
    }

    if (ambient === "wind") {
      Wind();
    } else {
      StopWind();
    }
  }, [ambient]); // This effect will re-run whenever 'ambient' state changes
  const Shake=()=>{
    document.getElementById("container").classList.add('shake')
  }
  
  const StopShake=()=>{
    document.getElementById("container").classList.remove('shake')
  }
  
  const Wind=()=>{
    document.getElementById("container").classList.add('wind')
  }
  
  const StopWind=()=>{
    document.getElementById("container").classList.remove('wind')
  }
  const renderRaindrops = () => {
    const raindrops = [];
    for (let i = 0; i < numRaindrops; i++) {
      const delay = Math.random() * 5;
      const duration = Math.random() * 0 + 0.5; 
      const leftPosition = Math.random() * 90 +5; 
      const topPosition = Math.random() * 18-20 ; 
      raindrops.push(<div className="raindrop" style={{left: `${leftPosition}%`, top: `${topPosition}%`, animationDelay: `${delay}s`, animationDuration: `${duration}s`}} key={i}></div>);
    }
    return raindrops;
  };
  return (
    <div className="App">
      <h1>Sound Mixer</h1>
      <div id="container">
      <Background/>
      <Ambient changeAmbient={changeAmbient}/>
      </div>
      <h4>created by jasser chaaben</h4>
      {(ambient==="rain"?renderRaindrops():'')} 
    </div>
  );
}

class Background extends React.Component {

  
  constructor(props) {

    super(props);

    this.state = {

    };
    this.playSound=this.playSound.bind(this);
  }
  playSound(event){
    document.querySelectorAll('audio.backgroundSound').forEach(Element=>Element.pause())
    const audio = event.currentTarget.querySelector('audio');
    if (audio) {
      if (audio.paused) {
        audio.play();
        audio.volume=0.4;
    }else{
        audio.currentTime = 5
    }
  }
  const link="./image/"+audio.id+".jpg"
  document.body.style.backgroundImage = 'url('+link+')';
  document.body.style.backgroundSize = 'cover'; 
}
  render() {
  
    return (
      <div>
        <h2>Background</h2>
        <div id="buttons">
          <div className='icon' onClick={this.playSound}><img src="./icons/school.png" alt="school Icon"></img><audio id="school" className="backgroundSound" loop src="./audio/School.mp3"/></div>
          <div className='icon' onClick={this.playSound}><img src="./icons/tent.png" alt="tent Icon"></img><audio id="carnival" className="backgroundSound" loop src="./audio/Carnival.mp3"/></div>
          <div className='icon' onClick={this.playSound}><img src="./icons/traffic.png" alt="traffic Icon"></img><audio id="traffic"  className="backgroundSound" loop src="./audio/City.mp3"/></div>
        </div>
        
      </div>
    );
  }
}
class Ambient extends React.Component {

  
  constructor(props) {

    super(props);

    this.state = {

    };
    this.playSound=this.playSound.bind(this);
  }
  playSound(event){
    document.querySelectorAll('audio.AmbientSound').forEach(Element=>Element.pause())
    const audio = event.currentTarget.querySelector('audio');
    if (audio) {
      if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 5
    }
    this.props.changeAmbient(audio.id);
  }
}
componentDidMount(){
  document.getElementById("rain").volume=0.1;
}
  render() {
  
    return (
      <div>
        <h2>Ambient</h2>
        <div id="buttons">
          <div className='icon' onClick={this.playSound}><img src="./icons/rain.png" alt="rain Icon"></img><audio id="rain"  className="AmbientSound" loop src="./audio/rain.mp3"/></div>
          <div className='icon' onClick={this.playSound}><img src="./icons/wind.png" alt="wind Icon"></img><audio id="wind" className="AmbientSound" loop src="./audio/wind.mp3"/></div>
          <div className='icon' onClick={this.playSound}><img src="./icons/earthquake.png" alt="earthquake Icon"></img><audio id="earthquake"  className="AmbientSound" loop src="./audio/earthquake.mp3"/></div>
        </div>
      </div>
    );
  }
}
export default App;
