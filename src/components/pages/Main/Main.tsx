import Diagnostic1 from 'components/pages/Diagnostics/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostics/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostics/Diagnostic3';
import Diagnostics from 'components/pages/Diagnostics/Diagnostics';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'components/pages/MenuPages/HomePage';
import Diagn1Results from 'components/pages/Results/Diagn1Results'
import Diagn2Results from 'components/pages/Results/Diagn2Results'
import Diagn3Results from 'components/pages/Results/Diagn3Results'
import UserProfile from 'components/pages/UserProfile/UserProfile'
import { IUserData } from 'App'

interface Props{
    userData: IUserData | null
}

export const Main = ({ userData }: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/main/home" replace />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="home" element={<UserProfile userData={userData}/>} />
            <Route path="home" element={<HomePage userData={userData}/>} />
            <Route path="diagnostics/diagnostic1" element={<Diagnostic1 userData={userData}/>} />
            <Route path="diagnostics/diagnostic2" element={<Diagnostic2 userData={userData}/>} />
            <Route path="diagnostics/diagnostic3" element={<Diagnostic3 userData={userData}/>} />
        </Routes>
    )
}
export default Main