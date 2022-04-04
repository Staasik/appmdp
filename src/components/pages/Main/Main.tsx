import { IUserData } from 'App';
import Diagnostic1 from 'components/pages/Diagnostics/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostics/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostics/Diagnostic3';
import Diagnostics from 'components/pages/Diagnostics/Diagnostics';
import HomePage from 'components/pages/MenuPages/HomePage';
import UserProfile from 'components/pages/UserProfile/UserProfile';
import Recommendations from 'components/pages/MenuPages/Recommendations';
import UserResults from 'components/pages/Results/UserResults';
import { Navigate, Route, Routes } from 'react-router-dom';


interface Props {
    userData: IUserData | null
}

export const Main = ({ userData }: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/main/home" replace />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="home" element={<HomePage userData={userData} />} />
            {userData && <Route path="profile" element={<UserProfile userData={userData} />} />}
            {userData && <Route path="profile/diagnresult1" element={<UserResults userData={userData} diagnnumber={1} />} />}
            {userData && <Route path="profile/diagnresult2" element={<UserResults userData={userData} diagnnumber={2} />} />}
            {userData && <Route path="profile/diagnresult3" element={<UserResults userData={userData} diagnnumber={3} />} />}
            <Route path="recommend" element={<Recommendations userData={userData} />} />
            <Route path="diagnostics/diagnostic1" element={<Diagnostic1 userData={userData} />} />
            <Route path="diagnostics/diagnostic2" element={<Diagnostic2 userData={userData} />} />
            <Route path="diagnostics/diagnostic3" element={<Diagnostic3 userData={userData} />} />
        </Routes>
    )
}
export default Main