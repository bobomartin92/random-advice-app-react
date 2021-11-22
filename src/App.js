import { useEffect, useState } from "react";
import "./App.css"

const App = () => {
    const [advice, setAdvice] = useState('');

    const fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => setAdvice(data.slip.advice))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchAdvice()
    },[advice])

    return ( 
        <div className="app">
            <div className="card">
                <h1 className="heading">
                    {advice}
                </h1>
                <button className='button' onClick={fetchAdvice}><span>Give Me Advice!</span></button>
            </div>
        </div>
     );
}
 
export default App;