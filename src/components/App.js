import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  start_timer() {
    document.getElementById('starter').disabled=true
    document.getElementById('stopper').disabled=false
    this.timeval = setInterval(()=>{this.setState({count: this.state.count+1})},1000)
  }
  end_timer(){
    clearInterval(this.timeval)
    this.setState({count: 0})
    document.getElementById('starter').toggleAttribute("disabled")
    document.getElementById('stopper').setAttribute("disabled","true")
   
  }
  render() {
    return (
      <div className="container">
      <div className="main-div">
        <h1 className="count-value">{this.state.count}</h1>
        <div className="button-group">
        <button id="starter"
          onClick={() => {
            this.start_timer()
          }}
        >
          Start!
        </button>
        <button id="stopper"
          onClick={() => {
             this.end_timer()
          }}
        >
          Stop!
        </button>
       </div>
       </div>
      </div>
    );
  }
}
export default App;
