import './App.css'
import { ToDoList } from './pages/ToDoList'
import { CommonTemplate } from './templates/commonTemplate'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
    <CommonTemplate>
      <ToDoList />

    </CommonTemplate>
    </ChakraProvider>

  </div>
  )
}

export default App
