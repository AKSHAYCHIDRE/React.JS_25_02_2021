import React from 'react'

class From extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            addresss:''

        }
    }

    handleusername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    handleaddress = (event) => {
        this.setState({
            addresss:event.target.value
        })
    }

    handlesubmit = (event) => {
        alert(`${this.state.username} ${this.state.addresss}`)
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h2>The from example here </h2>
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <lable>UserName</lable>
                        <input type="text" value={this.state.username} onChange={this.handleusername}/>
                    </div>
                    <div>
                        <lable>UserName</lable>
                        <textarea value={this.state.addresss} onChange={this.handleaddress}></textarea>
                    </div>
                    <button>Submit</button>     
                </form>
                
            </div>
        )
    }
}


export default From;