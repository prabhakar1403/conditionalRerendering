// useGitHubRepos.js 
import { useState, useEffect } from 'react'; 
const useGitHubRepos = (username) =>
     { const [repos, setRepos] = useState([]); 
        useEffect(() => { 
            if (!username) return; 
            fetch(`https://api.github.com/users/${username}/repos`) 
            .then(response => response.json()) 
            .then(data => setRepos(data)) 
            .catch(err => console.error(err)); // Basic error handling 
            },
             [username]); 
             return repos; 
    }; 
    
export default useGitHubRepos;