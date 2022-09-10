import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux';
import { HomePage } from './pages/home-page';
import { OutputPage } from './pages/output-page';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/regform/" element={<HomePage />} />
            <Route path="/outputform/" element={<OutputPage />} />
          </Routes>

        </div>
      </Router>
    </Provider>


  );
}

export default App;
