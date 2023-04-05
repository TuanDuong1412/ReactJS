import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import Header from './Header';

import { useState } from 'react';
import Footer from './Footer';
import DemoComponent from './DemoComponent';

function App() {

  const [age, setAge] = useState(0);
  const[name,setName] = useState('CEE')
  const onIncreaseAge =()=>{
    setAge(age+1)
  };

  const [userInput, setUserInput] = useState("");
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  
  const handleButtonClick = (e) => {
    alert(userInput)
  }

  return (
  

  <div>
    {/*Bài 1 */}
    <HelloWorld />
    {/*Bài 2 */}
    <div>
      <Header></Header>
      <Footer/>
    </div>
    {/*Bài 3 */}
    <div className='container'>

      <div>{age}</div>
      <div onClick={onIncreaseAge}>Tang age len 1</div>
      <DemoComponent age ={age} displayName={name}></DemoComponent>

    </div>

    <div> 
    <div>
      <input type="text"name="user"placeholder="Please type somthing"onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Print</button>
    </div>
    </div>
  </div>
    
  
  );
  }


  export default App;