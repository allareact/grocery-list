import "./App.css";
import { TodoList } from "./TodoList";
import image from "./shopping.jpg";

function App() {
  return (
    
    <div className="App">
    <img src={ image } class="imageShopping" width="250px" alt="shopping"/>
    <div className="container">
    <h1>Grocery List</h1>
    </div>
      <TodoList/>
    </div>
  );
}

export default App;