import {useState} from 'react'
import App from './App';

function MyForm() {
    const [username, setusername] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (event) => {    
        if (username.trim() !== '') { // Check if username is not empty
        setFormSubmitted(true);
      }
        event.preventDefault();
    }
    const handleChange = (event) => {
        setusername(event.target.value);
    }

  return (
    <>
    { formSubmitted ?  (<App name={username}/>) : 
    <form className='container default' 
        onSubmit={handleSubmit}>
        <label>  
            Name:
            <input type="text"
            onChange={handleChange} 
            style = {{padding : '10px'}}/>
        </label>
        <br />
        <button type='submit' style = {{padding : '10px'} }>Submit</button>
    </form> }
    </>
  )
}

export default MyForm