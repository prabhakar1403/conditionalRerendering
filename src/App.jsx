import { useState } from 'react'
import './index.css'

function App(name) {
    let [counter, setCounter]= useState(15);
    const addValue = () => {
        setCounter(counter + 1);
    }
    const removeValue = () => {
        setCounter(counter - 1);
    }
      return (
    <>
        <div className='container' style={{backgroundColor : 'lightBlue', borderRadius: '5px'}}>
            <h1>Hello {name.name || 'Coders'}</h1>
            <h3>Lets try some counter functionality</h3>
            <h2>{counter}</h2>
            <button onClick={addValue}>Add Value</button>
            <br />
            <button onClick={removeValue}>Remove Value</button>
        </div>
    </>
    )
}
export default App







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
