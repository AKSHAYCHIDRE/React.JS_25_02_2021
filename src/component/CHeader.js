import React from 'react';


// class CHeader extends React.Component{
//     render(){
//         return(
//             <div>
//                 CHeader component here
//             </div>
//         )
//     }
// }


// class CHeader extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.name} - {this.props.last}
//             </div>
//         )
//     }
// }


class CHeader extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.name}- {this.props.last}</div>
            </div>
        )
    }
}


// class CHeader extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>
//                     {this.props.name} - {this.props.last}
//                 </h2>
//             </div>
//         )
//     }
// }



export default CHeader;
