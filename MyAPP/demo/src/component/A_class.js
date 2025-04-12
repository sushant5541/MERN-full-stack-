import React from "react";

class AClass extends React.PureComponent {
    render(){
        console.log(' PureComponent');
    return(
        <div>{this.props.name}</div>
    )
}
}

export default AClass