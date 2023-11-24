import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout.component'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          
        </Route>
      </Routes>
    </>
  )
}

export default App