import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Sound Mixer</h1>
      <Background/>
      <h4>created by jasser chaaben</h4>
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
        <div id="buttons">
          <div className='icon' onClick={this.playSound}><img src="./icons/school.png" alt="school Icon"></img><audio id="school" className="backgroundSound" loop src="./audio/School.mp3"/></div>
          <div className='icon' onClick={this.playSound}><img src="./icons/tent.png" alt="tent Icon"></img><audio id="carnival" className="backgroundSound" loop src="./audio/Carnival.mp3"/></div>
          <div className='icon' onClick={this.playSound}><img src="./icons/traffic.png" alt="traffic Icon"></img><audio id="traffic"  className="backgroundSound" loop src="./audio/City.mp3"/></div>
          </div>
      </div>
    );
  }
}
export default App;
