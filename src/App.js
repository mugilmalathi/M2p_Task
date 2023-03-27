import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import Signin from './components/Account/Signin';

function App() {

  const token = localStorage.getItem('token')

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
