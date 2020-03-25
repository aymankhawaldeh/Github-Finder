import React from 'react';

class UserItems extends React.Component{
    


    render(){
        const { login , avatar_url , html_url } = this.props.user
        return(
            <div className='card text-center'>
                <img src={avatar_url} className="round-img" alt="" style={{width : '60px'}} />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" >MORE</a>
                </div>


            </div>
        )
    }
}
export default UserItems;


// const UserItems  =({user:{login , avatar_url , html_url }})=>{
    


   
//         return(
//             <div className='card text-center'>    
//                 <img src={avatar_url} className='round-img' alt="" style={{width : '60px'}} />
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} className="btn btn-dark btn-sm my-1" >MORE</a>
//                 </div>


//             </div>
//         )
    
// }
// export default UserItems;










