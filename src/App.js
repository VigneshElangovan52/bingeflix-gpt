import { Provider } from 'react-redux';
import './App.css';
import Body from './Body';
import Header from './Header';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
    <Header />
    <Body />
    </div>
    </Provider>
  );
}

export default App;
