import Login from './components/Login';
import Register from './components/Register';
import UsersList from './components/UsersList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>MERN Stack Project</h1>
      <div className='row w-100 pl-4'>
        <div className='col-md-6 justify-content-center'>
          <Register />
        </div>
        <div className='col-md-6 justify-content-center'>
          <Login />
        </div>
      </div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-8'>
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default App;
