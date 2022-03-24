import Login from './components/pages/Login/Login'
import Registration from './components/pages/Login/Registration'
import Modal from './components/pages/Login/Modal'
import Htmlcontainer from 'styles/App'
import Main from 'components/pages/Main/Main'
import Diagnostics from 'components/pages/Diagnostics';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>
const App = () => {
  return (
    <Htmlcontainer>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace/> } />
        <Route path="login" element={<Registration />} />
        <Route path="main/*" element={<Main />} />
        <Route path="modal/*" element={<Modal />} />
      </Routes>
    </Htmlcontainer>
  );
}

export default App;
