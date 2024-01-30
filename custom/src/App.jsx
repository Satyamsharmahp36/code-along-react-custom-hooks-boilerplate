

import './App.css'
import useStorage from './component/CustomHook'

function App() {
  
const[state,setState]= useStorage("")



  return (
    <>
    <input type="text" onChange={(e)=>setState(e.target.value)} value={state}/>
    </>
  )
}

export default App
