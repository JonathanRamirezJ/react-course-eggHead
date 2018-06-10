import React, {Component} from 'react';

class App extends Component{
  constructor(){
  	super();
  	this.state = {
      text: 'this is state of text',
      cat: 5
    };
  }

  update(e){
    this.setState({text: e.target.value})
  }

  render(){
    let text = this.state.text;
    let cat = this.state.cat;
    return(
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{text} - {cat}</h1>
      </div>
    );
  }
}

export default App;
