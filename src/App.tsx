import Diagnostics from './components/pages/Diagnostics';
import Diagnostic1 from './components/pages/Diagnostic1';
import Diagnostic2 from './components/pages/Diagnostic2';
import Diagnostic3 from './components/pages/Diagnostic3';
import Footer from './components/defaultComponents/Footer'
import Header from './components/defaultComponents/Header'
import Login from './components/pages/Login/Login'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login"><Login/></Route>
          <Route path="main">
            
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
