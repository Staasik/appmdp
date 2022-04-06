import Footer from 'components/defaultComponents/Footer';
import Header from 'components/defaultComponents/Header';
import Main from 'components/pages/Main/Main';
import { Navigate, Route, Routes } from "react-router-dom";
import Htmlcontainer from 'styles/App';
import Login from 'components/pages/Login/Login';
import Registration from 'components/pages/Login/Registration';
import { useState, useEffect } from 'react'
import Cookies from 'codebase/Cookies'
import Chat from 'components/pages/Chat/ChatBot';
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>

export interface IUserData {
  name: string,
  login: string,
  password: string
}
export const MAIN_IP = '146.247.34.58'


const App = () => {
  const data = {name:"123", login: "123", password: "123"}

  const [chatOpened, setChatOpened] = useState(false)
  const [userData, setUserData] = useState<IUserData | null>(data)

  useEffect(() => {
    console.log(chatOpened)
  }, [chatOpened])
  
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
          !data.error && setUserData({name: data.name, login: data.login, password: data.password})
        });
    }
  }, [])


  return (
    <Htmlcontainer>
      {chatOpened && <Chat onClose={() => {setChatOpened(false)}}></Chat>}
      <Header userData={userData} onOpenChat={() => {setChatOpened(true)}}/>
      <Routes>
        {
          !userData ? <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="main/*" element={<Main userData={userData} onOpenChat={() => {setChatOpened(true)}}/>} />
            <Route path="reg" element={<Registration />} />
          </>
            : <>
              <Route path="*" element={<Navigate to="/main" replace />} />
              <Route path="main/*" element={<Main userData={userData} onOpenChat={() => {setChatOpened(true)}}/>} />
            </>
        }
      </Routes>
      <Footer />
    </Htmlcontainer>
  );
}

export default App;
