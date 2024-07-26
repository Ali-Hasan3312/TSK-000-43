import { Toaster } from "react-hot-toast"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
function App() {
  
  return (
    <div>
      <AddTodo />
      <Todos />
      <Toaster />
    </div>
  )
}

export default App
