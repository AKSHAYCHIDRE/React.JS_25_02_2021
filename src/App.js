import logo from './logo.svg';
import './App.css';


const name = <span>Hi i am, Akshay Chidre</span>;

// function Test(){

// }

const test =() => {
  alert("Hello Akshay Chidre");
}

const age = (a) => {
  if(a>19){
    return("you are out");

  }
  else{
    return("you are not out");
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{name}</h3>
        <button onClick={test}>Click Here </button>
        {age(19)}
      </header>
      
    </div>
  );
}




// var newElement = document.createElement("h4");
// newElement.textContent="Hello, i am akshay chidre";
// document.querySelector("body").appendChild();

export default App;
