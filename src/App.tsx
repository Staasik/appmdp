import Main from 'components/pages/Main/Main';
import {
  Navigate, Route, Routes
} from "react-router-dom";
import Htmlcontainer from 'styles/App';
import Login from './components/pages/Login/Login';
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>
const App = () => {
  return (
    <Htmlcontainer>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="main/*" element={<Main />} />
      </Routes>
    </Htmlcontainer>
  );
}

export default App;
