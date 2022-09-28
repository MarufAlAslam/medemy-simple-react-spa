import './App.css';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <div className='course-container'>
        <div className='course-holder'>
          <div className='container'>
            <h2 className='blue bold'>
              <FontAwesomeIcon className='me-2' icon={faBook} />
              MEDEMY | Find Your Desired Course From Here.
            </h2>
          </div>
        </div>
        <div className='profile-holder'>
          <div className='container'>
            <h2>profile</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
