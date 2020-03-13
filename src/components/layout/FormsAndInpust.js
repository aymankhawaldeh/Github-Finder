import React , {useState, useEffect} from 'react';

function FormsAndInpust (props){
    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('male')

    const handleSubmit = (e) =>{
    e.preventDefault();
    list && setList([...list, {name:name, age:age, gender:gender}])
    console.log(list)
    e.target.reset();
    }

    const handleInputChangeName = (e) =>{
      let newName = e.target.value
      setName(newName)
    }

    const handleInputChangeGender = (e) =>{
      let newGender = e.target.value
      setGender(newGender)
    }

    const handleInputChangeAge = (e) =>{
        let newAge = e.target.value
        setAge(newAge)    
    }

    return(
        <div>
            <h3>Ayman AlSagga</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='your name' name='name'  onChange={handleInputChangeName} required/>
                <input type='number' placeholder='your age' name='age'  onChange={handleInputChangeAge} required/>  <br />
                <label > Male <input type='radio'  value='male' name="gender"  onChange={handleInputChangeGender} required/></label> 
                <label > Female <input type='radio'   value='female' name="gender"  onChange={handleInputChangeGender} required/></label>
                <br />
                <button>Send !</button>
            </form>
            <ul>
            {list.map((item, i)=>{
                console.log(item)
                return( <li key={i}>  
                    <span>{item.name}  </span>
                    <span>{item.age}  </span>
                    <span>{item.gender}</span>
                </li>)
            })}
            </ul>
        </div>
    )


}

export default FormsAndInpust;