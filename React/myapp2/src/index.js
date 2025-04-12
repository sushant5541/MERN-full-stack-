import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom"

// import Home from './pages/home'
// import About from './pages/about'
// import Contact from './pages/contact';
// import Layout from './pages/navigation';


let App = () => {

  let [counter, setCounter] = useState(0)

  let callback = () => {
    setCounter((counter) => counter+1)
  }

  useEffect(() => {
    console.log(counter);  
  }, [counter])
 

  return (<>

  <h1>You have visited our website {counter} times </h1>

  <button onClick={callback}>Click Me</button>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>

    </BrowserRouter> */}
  
  </>)}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

