import React from 'react';

class Search extends React.Component {
   constructor(props){
       super(props)
            this.state = {
                text: ''
            }
   }
    

    onSubmit = (e) =>{
        e.preventDefault();
        let text = this.state.text
        this.props.searchUsers(text)
         this.setState({text})
    }
    onChange = (e) =>{

        // let text = e.target.value;
        // this.setState({text})
        this.setState({[e.target.name] : e.target.value})

        
      }
    render() { 
        return ( 
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..."  onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
         );
    }
}
 
export default Search ;