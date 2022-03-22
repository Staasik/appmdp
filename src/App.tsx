import Login from './components/pages/Login/Login'
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
        <Route path="login" element={<Login />} />
        <Route path="main/*" element={<Main />} />
      </Routes>
    </Htmlcontainer>
  );
}

export default App;
