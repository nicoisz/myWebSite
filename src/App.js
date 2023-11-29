import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout.component'
import './App.scss'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App