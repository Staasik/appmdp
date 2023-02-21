import Cookies from 'codebase/Cookies';
import Footer from 'components/defaultComponents/Footer';
import Header from 'components/defaultComponents/Header';
import Chat from 'components/pages/Chat/ChatBot';
import Login from 'components/pages/Login/Login';
import Registration from 'components/pages/Login/Registration';
import Main from 'components/pages/Main/Main';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Htmlcontainer from 'styles/App';
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>

export interface IUserData {
  name: string,
  login: string,
  password: string
}
export const MAIN_IP = '178.57.39.247'


const App = () => {
  const data = { name: "123", login: "123", password: "123" }

  const [chatOpened, setChatOpened] = useState(false)
  const [userData, setUserData] = useState<IUserData | null>(null)

  useEffect(() => {
    let login = Cookies.getCookie('login')
    let password = Cookies.getCookie('password')
    if (login && password) {
      fetch(process.env.NODE_ENV == 'development' ? "/acceptLogin" : `http://${MAIN_IP}:5000/acceptLogin`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ login, password })
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          !data.error && setUserData({ name: data.name, login: data.login, password: data.password })
        });
    }
  }, [])


  return (
    <Htmlcontainer>
      {chatOpened && <Chat onClose={() => { setChatOpened(false) }}></Chat>}
      <Header userData={userData} onOpenChat={() => { setChatOpened(true) }} />
      <Routes>
        {
          !userData ? <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="main/*" element={<Main userData={userData} onOpenChat={() => { setChatOpened(true) }} />} />
            <Route path="reg" element={<Registration />} />
          </>
            : <>
              <Route path="*" element={<Navigate to="/main" replace />} />
              <Route path="main/*" element={<Main userData={userData} onOpenChat={() => { setChatOpened(true) }} />} />
            </>
        }
      </Routes>
      <Footer userData={userData} />
    </Htmlcontainer>
  );
}

export default App;
