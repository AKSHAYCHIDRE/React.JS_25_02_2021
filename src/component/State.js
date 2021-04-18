import React from 'react';

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



// class State extends React.Component{
//     state={
//         name:'Akshay ',
//         lastname: 'chidre',
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}{this.state.lastname}</h1>
//             </div>
            
//         )
//     }
// }



// class State extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             list:[
//                 {name:'akshay', lastname:'chidre' ,phone:'12909', },
//                 {name:'baldev', lastname:'pardeshi' ,phone:'23423223', },
//                 {name:'aniket', lastname:'shinde' ,phone:'283923', }
//             ]
//         }
//     }

//     render(){
//         return(
//             <div>
//                 Array Map function example
//                 {
//                     this.state.list.map((item)=>
//                         <div>
//                             {item.name}{item.lastname}{item.phone}
//                         </div>
//                     )
//                 }
//             </div>
//         )
//     }
// }



// class State extends React.Component{
    
//     constructor(){
//         super();
//         this.state={
//            list:[
//                {name:'test',last:'test2',phone:'232'},
//                {name:'test',last:'test2',phone:'232'}
//            ]
//         }
//     }

    
//     render(){
//         return(
//             <div>
//                 <h3>
//                     Array Map Function example
//                     {
//                         this.state.list.map((item)=>
//                             <div>{item.name}{item.last}</div>
//                         )
//                     }
//                 </h3>
//             </div>
//         )
//     }
// }


class State extends React.Component{
    constructor(){
        super();
        this.state={
            list:[
                {name:'akshaychidre',mobile:'232423'},
                {name:'akshaychidre',mobile:'232423'}
            ]
        }
    }

    render(){
        return(
            <div>

            {
                this.state.list.map((item)=>
                    <div>
                        {item.name}{item.mobile}
                    </div>
                )
            }

            </div>
        )
    }
}




export default State;