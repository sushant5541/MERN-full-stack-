


// let NameComponent = (props) => {
// return <div>
//   <h1>Hello {props.Name}, welcome to ITD</h1>
//   <p>Your age {props.Age} years old</p>
//   <p> country {props.Country}</p>
// </div>
// }



// let Name =""

// return Name ? <h1 style={{"backgroundColor":"red", "color":"white"}}> Welcome {Name}</h1>:
//              <h1 style={{"backgroundColor":"red", "color":"white"}}> Welcome User</h1>
// }



// import {useState} from "react"

// let GreenBox = () => {
//    return <div style={{"backgroundColor":"green", "color":"white", "width":"100%", "height":"100px"}}></div>
// }


// let RedBox = () => {
//     return <div style={{"backgroundColor":"red", "color":"white", "width":"100%", "height":"100px"}}></div>
//  }

//  let NameComponent = (props) => {

//     let [data, setData]  = useState(props.box)


//     return (<>
//         <button onClick={() => setData("Green")}> Click Me</button>
//         {data === "Green" ? <GreenBox/> : <RedBox/>}
    
//     </>
        
     
//     )
    // }



    let SomeDiv = (props) => {

        return (<div style={{backgroundColor:"gray", height:"100%", width:"100%", padding:"20px"}}>
                    <h1>{props.car_name}</h1>

        </div>)
    }


    let NameComponent = (props) =>{

        let datas =["Mahindra", "Tata", "Hyundai"]

        return (<ul>
            {datas.map(el => <SomeDiv car_name={el}/>)}
        </ul>)
    }

    




export default NameComponent;