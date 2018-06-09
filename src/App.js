import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component{
  render(){
    let text = this.props.text;
    let cat = this.props.cat;
    return(
      <div>
        <h1>{text}, {cat}</h1>
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.string,
  cat: PropTypes.number
}

App.defaultProps = {
  text: "This is default props",
  cat: 2
}

export default App;
