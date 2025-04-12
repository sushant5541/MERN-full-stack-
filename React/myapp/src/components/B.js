import D from "./D"

let B =(props) => {
    return (
        <>
        <h1>I am Component B</h1>
        <D username={props.username}/>
        </>
        
    )
}

export default B