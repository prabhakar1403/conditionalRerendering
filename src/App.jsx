// App.js 
import React, { useState } from 'react'; 
import useGitHubRepos from './hooks/useGitHubRepos'; 
const App = () => { 
    const [username, setUsername] = useState(''); 
    const repos = useGitHubRepos(username); 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        setUsername(e.target.elements.username.value); 
    }; 
    return ( 
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}> 
    <h1>GitHub Repos</h1> 
    <form onSubmit={handleSubmit}> 
        <input type="text" 
        name="username" 
        placeholder="Enter GitHub username" 
        required 
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }} 
        /> 
        <button type="submit" 
        style={{ padding: '8px', width: '100%' }}>
            Submit
            </button> 
            </form> 
        <ul> 
            {repos.map(repo => ( 
                <li key={repo.id}> 
                <a href={repo.html_url} 
                target="_blank" rel="noopener noreferrer">
                    {repo.name}</a> 
                </li> ))} 
        </ul> 
    </div> ); 
    }; 
    
    export default App;







// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
