import Diagnostic1 from 'components/pages/Diagnostics/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostics/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostics/Diagnostic3';
import Diagnostics from 'components/pages/Diagnostics/Diagnostics';
import HomePage from 'components/pages/MenuPages/HomePage';
import Recommendations from 'components/pages/MenuPages/Recommendations';
import UserResults from 'components/pages/Results/UserResults';
import UserProfile from 'components/pages/UserProfile/UserProfile';
import { useContext } from 'react';
import { Context } from 'index';
import { Navigate, Route, Routes } from 'react-router-dom';


interface Props {
    onOpenChat(): any
}

export const Main = ({ onOpenChat }: Props) => {

    const { store } = useContext(Context)
    const { isAuth } = store

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/main/home" replace />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="home" element={<HomePage onOpenChat={() => onOpenChat()}/>} />
            {store.user && <Route path="profile" element={<UserProfile />} />}
            {isAuth && <Route path="profile/diagnresult1" element={<UserResults diagnnumber={1} />} />}
            {isAuth && <Route path="profile/diagnresult2" element={<UserResults diagnnumber={2} />} />}
            {isAuth && <Route path="profile/diagnresult3" element={<UserResults diagnnumber={3} />} />}
            <Route path="recommend" element={<Recommendations />} />
            <Route path="diagnostics/diagnostic1" element={<Diagnostic1 />} />
            <Route path="diagnostics/diagnostic2" element={<Diagnostic2 />} />
            <Route path="diagnostics/diagnostic3" element={<Diagnostic3 />} />
        </Routes>
    )
}
export default Main