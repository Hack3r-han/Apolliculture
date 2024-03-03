import './App.css'
import Home from './pages/Home'
import Filter from './components/Filter'
function App() {

  return (
    <>
       <h1 className="text-2xl font-bold underline">
          Hello, Aplliculter!
          <Home />
          <Filter />
      </h1>
    </>
  )
}

export default App
