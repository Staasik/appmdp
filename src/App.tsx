import Footer from 'components/defaultComponents/Footer';
import Header from 'components/defaultComponents/Header';
import Main from 'components/pages/Main/Main';
import { Navigate, Route, Routes } from "react-router-dom";
import Htmlcontainer from 'styles/App';
import Login from 'components/pages/Login/Login';
import Registration from 'components/pages/Login/Registration';
import { useState, useEffect } from 'react'
import Cookies from 'codebase/Cookies'
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>

export interface IUserData {
  userid: number,
  username: string,
  password: string
}

const App = () => {
  const data = {userid:123, username: "123", password: "123"}
  const [userData, setUserData] = useState<IUserData | null>(null)

  useEffect(() => {
    let username = Cookies.getCookie('username')
    let password = Cookies.getCookie('password')
    if (username && password) {
      fetch("/acceptLogin", {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data && setUserData(data)
        });
    }
  }, [])


  return (
    <Htmlcontainer>
      <Header />
      <Routes>
        {
          !userData ? <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="main/*" element={<Main userData={userData}/>} />
            <Route path="reg" element={<Registration />} />
          </>
            : <>
              <Route path="*" element={<Navigate to="/main" replace />} />
              <Route path="main/*" element={<Main userData={userData}/>} />
            </>
        }
      </Routes>
      <Footer />
    </Htmlcontainer>
  );
}

export default App;
