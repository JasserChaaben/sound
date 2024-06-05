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
  
  }
  render() {
  
    return (
      <div>
          <button><img src="./icons/school.png" alt="school Icon"></img></button>
          <button><img src="./icons/tent.png" alt="tent Icon"></img></button>
          <button><img src="./icons/traffic.png" alt="traffic Icon"></img></button>
      </div>
    );
  }
}
export default App;
