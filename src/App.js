import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
// import {Header} from './component/Header';
import CHeader from './component/CHeader';
import State from './component/State';
import Header from './component/Header'
import From from './component/From';

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
         <Header name="akshay" last="chidre">
         <span>Need to learn ReactJs </span>
         </Header>
         <Header name="baldev" last="pardeshi"/>
         <Header name="aniket" last="shinde"/>
         <CHeader name="aniket" last="shinde"/>
         <CHeader name="aniket" last="shinde"/>
         <CHeader name="aniket" last="shinde"/>
         <State/>
         <From/>
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




// var text = document.createElement("h3");
// text.textContent="Hello, I am akshay chidre";
// document.querySelector("body").appendChild();


// var mobile = document.newElement("h1");
// mobile.textContent="Dummy Text content here please check";
// document.querySelector('body').appendchild();


// var laptop = document.createElement("h5");
// laptop.textContent="Hello, i am akshay chidre";
// document.querySelector('body').appendChild();


// function Text(){
//   return(
//     <div>
    
//     </div>
//   )
// }


// class Text extends React.Component{
//   render(){
//     return(
//       <div>
      
//       </div>
//     )
//   }
// }




// var Hand = document.createElement('Text');
// Hand.textConten="Text Content";
// document.querySelector('body').appendchild();


// function Text (){
//     return(
//         <div>
//             Text Message here
//         </div>
//     )
// }

// class Text extends React.component{
//     render(){
//         return(
//             <div>
//                 Text Message here
//             </div>
//         )
//     }
// }


// const Text = (props) =>{
//     return(
//         <div>
//         {props.name} - {props.last}
//         </div>
//     )
// }


// class Text extends React.Component{
//     render(){
//         return(
//             <h1>
//                 {this.props.name} - {this.props.last}
//             </h1>
//         )
//     }
// }


// import React from 'react';


// class State extends React.Component{
    
//     constructor() ={
//         this.state={
//             msg:'Text Message'
//         }
//     }

//     this.state(click){
//         msg:'Text Message changed here'
//     }
    
//     render(){
//         return(
//             <div>
//                 {this.state.msg}
//             </div>
//             <button onClick={ () => { this.click() } }></button>
//         )
//     }
// }


// class Text extends React.Component{
    
//     constructor(){
//         super();
//         this.state={
//             msg:'Text Message here';
//         }
//     }

//     click(){
//         this.state={
//             msg:'Text Message changed here please click on button';
//         }
// }    
//     render(){
//         return(
//             <div>
//             {this.state.msg}
//             </div>
//             <button onclick={ () => {this.click () } }> Text Here </button>
//         )
//     }
// }



// class Text extends React.component{
    
    
//     constructor(){
//         super();
//         this.state={
//             msg:'Text message here'
//         }
//     }


//     onclick(){
//         this.setState{
//             msg:'Text message changed here please click on button'
//         }
//     }


//     render(){
//         return(
//             <div>
//                 <h3>
//                     {this.state.msg}
//                 </h3>
//                 <button onClick={ () => { this.onclick() } }>Click Here</button>
//             </div>
//         )
//     }
// }


// class Text React.Component{
    
//     constructor(){
//         super();
//         this.state{
//             msg:'Text Message'
//         }
//     }

//     click(){
//         this.setState={
//             msg:'Text Message will be changed click on buton'
//         }
//     }

    
//     render(){
//         return(
//             <div>
//                 {this.state.msg}
//                 <button onclick={() => {this.click() }}></button>
//             </div>
//         )
//     }
// }



// class Text React.Component{
    
//     construnctor(){
//         this.state={
//             msg:'Text Message Here'
//         }
//     }

//     click(){
//         this.setState({
//             msg:'Text Message will be changed when we click on button'
//         })
//     }
    
//     render(){
//         return(
//             <div>
//             {this.state.msg}
//             <button onClick={ () => {this.click() }  }></button>
//             </div>
//         )
//     }
// }


// class Text extends React.Component{
    
//     constructor(){
//         super();
//         this.state={
//             msg:'Text Message here'
//         }

//     }

//     click(){
//         this.setState({
//             msg:'Text Message will be changed when click on button'
//         })
//     }


//     render(){
//         return(
//             <div>
//                 {this.state.msg}
//                 <button onclick={ () => { this.click() }}></buton>
//             </div>
//         )
//     }
// }


export default App;