import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
