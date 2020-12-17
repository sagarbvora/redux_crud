
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './User.css'
import {Provider} from 'react-redux';
import store from './redux/store';
import Register from "./component/Register";
function App() {
  return (
      <>
          <Provider store = {store}>
              <Register/>
          </Provider>

      </>
  );
}

export default App;
