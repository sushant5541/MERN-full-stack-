import React from "react";
import BRegular from "./BRegular.js";
import AClass from "./A_class";

class App extends React.Component {
    state = {
        name:"Rohit"
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name:"Rohit"})
        }, 1000)
    }

    render(){
        return(
            <>
            <BRegular name={this.state.name}/>
            <AClass name={this.state.name}/>
            </>
        )
       
    }
}

export default App