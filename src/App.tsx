import Diagnostics from './components/pages/Diagnostics';
import Diagnostic1 from './components/pages/Diagnostic1';
import Diagnostic2 from './components/pages/Diagnostic2';
import Diagnostic3 from './components/pages/Diagnostic3';
import Footer from './components/defaultComponents/Footer'
import Header from './components/defaultComponents/Header'
import Login from './components/pages/Login/Login'
import Htmlcontainer from './App'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Htmlcontainer>
      <Login/> 
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/main">

          </Route>
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Htmlcontainer>
    </BrowserRouter>
  );
}

export default App;
