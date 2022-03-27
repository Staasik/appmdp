import Footer from 'components/defaultComponents/Footer';
import Header from 'components/defaultComponents/Header';
import Main from 'components/pages/Main/Main';
import {
  Navigate, Route, Routes
} from "react-router-dom";
import Htmlcontainer from 'styles/App';
import Login from 'components/pages/Login/Login';
import Registration from 'components/pages/Login/Registration';
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>
const App = () => {
  return (
    <Htmlcontainer>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="main/*" element={<Main />} />
        <Route path="reg" element={<Registration />} />
      </Routes>
      <Footer />
    </Htmlcontainer>
  );
}

export default App;
