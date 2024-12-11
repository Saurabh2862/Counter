import { useState } from 'react';  
import './App.css';  

function App() {  
  let [counter, setCounter] = useState(0);  // Initialize counter with useState  
  const [errorMessage, setErrorMessage] = useState(''); // State for error message  
  
  const addValue = () => {  
    if(counter<=20)
    {
    setCounter(counter + 1);  // Update state correctly  
    setErrorMessage(''); // Clear error message when adding  
    }
    else{
      setErrorMessage('Sorry , value cant"t increased by 20');
    }
  };  

  const removeValue = () => {  
    if (counter > 0) {  
      setCounter(counter - 1); // Update state correctly  
      setErrorMessage(''); // Clear error message if successful  
    } else {  
      setErrorMessage('Sorry, value can’t decrease below 0'); // Set error message  
    }  
  };  

  return (  
    <>  
      <h1>Saurabh Reactjs</h1>  
      <h2>Counter value: {counter}</h2>  
      <button onClick={addValue}>  
        Add Value {counter}  
      </button>  
      <br/>  
      <button onClick={removeValue}>Remove Value: {counter}</button>  
      <footer>  
        {errorMessage && <p style={{color: 'white'}}>{errorMessage}</p>} {/* Display error message */}  
      </footer>  
    </>  
  );  
}  

export default App;