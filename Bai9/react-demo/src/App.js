import logo from './logo.svg';
import './App.css';

function App() {
  
    const todos = ["PHP","REACTJS"]
    const isUserLoggedIn =  true;
    
    return <div className = "app">
       {isUserLoggedIn ? "Hello User" : "Login Now"}
      
      {todos.map((todo,index)=>{
        return <p key={index}>{todo}</p>
      }
      )}
      
      </div>
  
}

export default App;
