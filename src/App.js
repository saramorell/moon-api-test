import React, { Component } from 'react';
import './App.css';
import MoonComponent from './components/MoonComponent'

class App extends Component {

  state = {
      currentMp: []
    }


    // get current moon phase
    async componentDidMount() {
      const ts = await Math.round((new Date()).getTime() / 1000)
      const response = await fetch(`http://api.farmsense.net/v1/moonphases/?d=${ts}`)
      const json = await response.json()
        console.log(json)
    this.setState({currentMp: json} )
    console.log(this.state.currentMp)
  }

  moonData = () => {
    return this.state.currentMp.map((p, i) =>{
      return <MoonComponent {...p} key={i} />
    })
  }



  render() {
    return (
      <div className="App">
      {this.moonData()}

      </div>
    );
  }
}

export default App;
