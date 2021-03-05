import React from 'react';



class State extends React.Component{

    constructor(){
        super();
        this.state={
            msg:'I have use state method for this component'
        }        
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
            </div>
        )
    }
}

export default State;