// import React from 'react';

// class State extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             msg:'I Have used state method for this component'
//         }
//     }

//     click(){
//         this.setState({
//             msg:'i have learned state method today'
//         }

//         )

//     }

//     render(){
//         return(
//             <div>
//                 <h3>{this.state.msg}</h3>
//                 <button onClick={ () => { this.click() }}>Click Here</button>
//             </div>
//         )
//     }
// }


// export default State;


// import React from 'react';


// class State extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             msg:"Text Messgae"
//         }
//     }

//     click(){
//         this.setState({
//             msg:'Changed text Message'
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h3>{this.state.msg} </h3>
//                 <button onClick={ () => { this.click() }} ></button>
//             </div>
//         )
//     }
// }

// export default State;


import React from 'react';




// class State extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             msg:'Text Message'
//         }
//     }

//     click(){
//         this.setState({
//             msg:'Changed text message'
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h4>
//                     {this.state.msg}
//                 </h4>
//                 <button onClick={ () => { this.click() } }>Click Here</button>
//             </div>
//                 )
//     }
// }



class State extends React.Component{
    state={
        name:'Akshay ',
        lastname: 'chidre',
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}{this.state.lastname}</h1>
            </div>
            
        )
    }
}


export default State;