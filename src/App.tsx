import Footer from 'components/defaultComponents/Footer';
import Header from 'components/defaultComponents/Header';
import Chat from 'components/pages/Chat/ChatBot';
import Login from 'components/pages/Login/Login';
import Registration from 'components/pages/Login/Registration';
import Main from 'components/pages/Main/Main';
import { useContext, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Htmlcontainer from 'styles/App';
import { Context } from 'index';
//<Route path="/main/diagnostics">
//<Diagnostics />
// </Route>

export const MAIN_IP = '178.57.39.247'


const App = () => {
  const data = { name: "123", login: "123", password: "123" }

  const [chatOpened, setChatOpened] = useState(false)
  const { store } = useContext(Context)


  return (
    <Htmlcontainer>
      {chatOpened && <Chat onClose={() => { setChatOpened(false) }}></Chat>}
      <Header onOpenChat={() => { setChatOpened(true) }} />
      <Routes>
        {
          !store.user ? <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="main/*" element={<Main onOpenChat={() => { setChatOpened(true) }} />} />
            <Route path="reg" element={<Registration />} />
          </>
            : <>
              <Route path="*" element={<Navigate to="/main" replace />} />
              <Route path="main/*" element={<Main onOpenChat={() => { setChatOpened(true) }} />} />
            </>
        }
      </Routes>
      <Footer/>
    </Htmlcontainer>
  );
}

export default App;
