import { useState } from "react"
import { Store } from "./store/Store"
import Todolist from "./components/Todolist"
import Donetodo from "./components/Donetodo";
import Undonetodo from "./components/Undonetodo";
import Addtodo from "./components/Addtodo";

function App() {
  const [todos, setTodos] = useState([

  ]);

  const changeState = (index) => {
    const newArr = [...todos];
    newArr[index].done = !newArr[index].done;
    setTodos(newArr);
  }

  const addTodo = (data) => {
    const newArr = [...todos];
    newArr.push(data);
    setTodos(newArr);

  };

  return (
    <>
      <Store.Provider value={{ todos, changeState, addTodo }}>
        <main className="container p-4">
          <h1>TO DO LIST</h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <Todolist />
            </div>
            <div className="col-12 col-md-6">
              <Addtodo />
            </div>
            <div className="col-12 col-md-6">
              <Donetodo />
            </div>
            <div className="col-12 col-md-6">
              <Undonetodo />
            </div>
          </div>

        </main>
      </Store.Provider>

    </>
  )
}

export default App
