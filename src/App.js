import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout.component'
import './App.scss'
import HomePage from './components/home/home.component'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App