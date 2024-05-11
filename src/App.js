import './App.css';
import { Link ,Outlet} from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to the risk check of your Gdrive🙋</h1>
        <Link to="/dashboard">
          <button className='checkrisk'>Give a try!!</button>
        </Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
