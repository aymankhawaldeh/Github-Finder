import React from 'react';

class FormsAndInpust extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            age : '',
            gender : ''
        }
    }


    handleSubmit = (e) =>{
    e.preventDefault();
    let data = { 
     name: this.state.name,
     age: this.state.age,
     gender: this.state.gender     

    }
    this.setState({data})
    console.log('gfhfh',data)
    e.target.reset();


    
    }
    handleInputChangeName = (e) =>{
            let name = e.target.value
        e.preventDefault();
        this.setState({name})
        
        
    }
    handleInputChangeGender = (e) =>{
        
    e.preventDefault();
    this.setState({gender: e.target.value})
    
    
}

    handleInputChangeAge = (e) =>{
    e.preventDefault();
    this.setState({age: e.target.value})
    
    
}
render(){

    return(
        <div>
            <h3>Abo Elkhawaldeh</h3>
            <form onSubmit={this.handleSubmit}>
                <p>The name is : {this.state.name}</p>
                <input type='text' placeholder='your name' name='name'  onChange={this.handleInputChangeName}/>
                <input type='number' placeholder='your age' name='age'  onChange={this.handleInputChangeAge}/>  <br />
                <label > Male <input type='radio'  value='male' name="gender"  onChange={this.handleInputChangeGender} required/></label> 
                <label > Female <input type='radio'   value='female' name="gender"  onChange={this.handleInputChangeGender} req/></label>
                <br />



                <button>Send !</button>
            </form>
    <h2>{this.state.data && this.state.data.name}</h2>
    <h2>{this.state.data && this.state.data.age}</h2>
    <h2>{this.state.data && this.state.data.gender}</h2>


        </div>
    )
}

}

export default FormsAndInpust;