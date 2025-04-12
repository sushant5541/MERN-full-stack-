// import React,{ useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';


// function Welcome(props){
//   return(
//     <h1>Hello {props.name}, My age is: {props.age} </h1>
//   )
// }

// class Welcome extends React.Component{
//   render() {
//     return( <>
//      <h1>Hello {this.props.name},</h1>
//      <h1> My age is: {this.props.age} </h1>
//      </>

//     )
//   }
// }

// const element = < Welcome name="sushant" age="22"/>


// const Counter = () =>{
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>Count:{count}</p>
//       <button onClick={() => setCount(count + 1)}> Increment</button>
//     </>
//   )
// }\


//For sending the data child to parent
// function Parent(){
//     const[message, setMessage] = useState("")

//     const handleDataFromChild = (data) =>{
//         setMessage(data)
//     }

//     return (
//         <>
//             <h1>Parent Received: {message}</h1>
//             <Child sendDataToParent={handleDataFromChild}/>
//         </>
//     )
// }

// function Child(sendDataToParent){
//     const sendData = () => {
//         sendDataToParent("Hello from chaild")
//     }

//     return <button onclick={sendData}>Send Data to Parent</button>
// }

//useReducer

// let initialState = {count:0}

// let reducer =(state, action) =>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {count: state.count+1}
//         case 'DECREMENT':
//             return {count: state.count-1}
//         case 'RESET':
//             return {count: 0}
//         default:
//             return {count:state.count}
//     }
// }

// function UseReducerDemo(){

//     const[state, dispatch] = useReducer(reducer, initialState)

//     return (
//         <>
//         <h1>The count : {state.count}</h1>
//         <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
//         <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
//         <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>

//         </>

//     )
// }

//useRef

// const DomAccess = ()=>{

//     let inputEl = useRef(null)

//     useEffect(() =>{
//         // inputEl.current.focus()
//         inputEl.current.value = 100
//     }, [])

//     return (
//         <>
//         <input type='text' ref={inputEl}></input>
//         </>

//     )
// }



// function App() {
//     return (
//       <BrowserRouter>
//         <div>
//           <nav>
//             <ul> 
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             </ul>
//           </nav>
  
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
  
//   function Home() {
//     return <h1>Home</h1>
//   }
  
//   function About() {
//     return <h1>About</h1>
//   }
  
//   function Services() {
//     return <h1>Services</h1>
//   }


//-------------Task-----------

// function App(){

//     const[count, setCount] = useState(0)


//     useEffect(() =>{
//         console.log(count)
//     }, [count])

//     return (
//         <>
//             <p>the Count:{count}</p>
//             <button onClick={setCount((count) => count+1)}></button>
//         </>
//     )

// }


//useMemo 

// function Calculator(){
//     const[number, setNumber] = useState(0)

//     const calculateFactorial = (num) =>{
//         console.log("Factorial Calculating......")
//         let result = 1
//         for(let i=1;i<=num;i++){
//             result *= i
//         }
//         return result
//     }

//     const factorial = useMemo(() => calculateFactorial(number), [number])


//     return (

//         <>
//             <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
//             <p>Factorial of {number} is: {factorial}</p>
//         </>
//     )

// }

//useCallback

// function Parent(){

//     const[count, setCount] = useState(0)

//     const increment = useCallback(() => {
//         setCount(c => c+1)
//     }, [])

//     return(
//         <>
//             <Child onIncrement={increment}/>
//             <p>Count :{count}</p>

//         </>
//     )
// }

//     const Child = React.memo(({ onIncrement }) => {
//         console.log('child rendered');
//         return <button onClick={onIncrement}>+1</button>
//     })


// pureFunction
// import App from './component/App';



// function App() {

//   let inputEle = useRef(null)

//     useEffect(() =>{
//       inputEle.current.focus()
//     },[])


//   return (

//       <input type='text' ref={inputEle}></input>

//   )
// }

import React,{useCallback, useState} from 'react'

function App (){

const [count, setCount] = useState(0)

const increment = useCallback(() =>{
    setCount(c =>c+1)
}, [])


return (
  <>
    <Child onIncrement={increment}/>
    <p>Count: {count}</p>
  </>
)

}

const Child = React.memo(({onIncrement}) =>{
  return <button onClick={onIncrement}> +1</button>
})


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>);


