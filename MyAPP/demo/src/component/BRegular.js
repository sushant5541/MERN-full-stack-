
import React from "react";

class BRegular extends React.Component {  
  render() {
    console.log('Regular Component');
    return (<div>{this.props.name}</div>)
  }
}

export default BRegular;