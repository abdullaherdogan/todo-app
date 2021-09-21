import './App.css';
import List from './components/todo-list';
import {useState} from 'react'
function App() {
  const [todoInput,setTodoInput] = useState({todo:'',isComplete:false})
  const [todoList,setTodoList] = useState([])
  const setTodo=(e)=>{
    setTodoInput({...todoInput,todo:e.target.value})
  }
  const handleKeyPress = (e)=>{
    if (e.key==="Enter"&&todoInput.todo!=="") {
    setTodoInput({...todoInput,isComplete:false})
      setTodoList([...todoList,todoInput])
      setTodoInput({todo:'',isComplete:false})
    }
  }

  return (
    <div className="App">
      <h1>TODOs</h1>
      <div className="card">
        <input placeholder="What needs to be done?" value={todoInput.todo} onChange={setTodo} onKeyPress={handleKeyPress} />
        <List todoList={todoList} setTodoList={setTodoList} setTodoInput={setTodoInput} todoInput={todoInput} />
      </div>
    </div>
  );
}

export default App;
