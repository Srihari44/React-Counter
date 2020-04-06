import React from 'react';

class App extends React.Component{
    constructor(){

        super(this.props);
        this.state = {count:0};
    }

    handleClick(){
        this.setState(this.state.count+1);
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=> {this.handleClick()}}>Click me!</button>
            </div>
        );
    }
}
export default App;