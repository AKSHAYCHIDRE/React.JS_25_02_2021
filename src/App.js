import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
// import {Header} from './component/Header';
import Header from './component/Header';

// const name = <span>Hi i am, Akshay Chidre</span>;

// // function Test(){

// // }

// const test =() => {
//   alert("Hello Akshay Chidre");
// }

// const age = (a) => {
//   if(a>19){
//     return("you are out");

//   }
//   else{
//     return("you are not out");
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h3>{name}</h3>
//         <button onClick={test}>Click Here </button>
//         {age(19)}
//       </header>
      
//     </div>
//   );
// }


// function App(){
//   return(
//     <>
//     </>
//   )
// }


// const abc = (v) =>{
//   if(a>1){
//     return('test message');
//   }
//   else{
//     return('Test nessae');
//   }
// }


class App extends React.Component{
  render(){
    return(
      <div>
         <Header/>
      </div>
    )
  }
}


// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h5>Test message, Check test class Component.
//         </h5>
//       </div>
//     )
//   }
// }


// var newElement = document.createElement("h4");
// newElement.textContent="Hello, i am akshay chidre";
// document.querySelector("body").appendChild();

export default App;
