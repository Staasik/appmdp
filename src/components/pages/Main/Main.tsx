import Diagnostic1 from 'components/pages/Diagnostics/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostics/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostics/Diagnostic3';
import Diagnostics from 'components/pages/Diagnostics/Diagnostics';
import HomePage from 'components/pages/MenuPages/HomePage';
import Recommendations from 'components/pages/MenuPages/Recommendations';
import UserResults from 'components/pages/Results/UserResults';
import Trackers from 'components/pages/Trackers/Trackers';
import UserProfile from 'components/pages/UserProfile/UserProfile';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Editor from '../Admin/Editor';
import Router from '../Diagnostics/CustomDiagnostics/Router';


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
            {
                isAuth && <>
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="profile/diagnresult1" element={<UserResults diagnnumber={1} />} />
                    <Route path="profile/diagnresult2" element={<UserResults diagnnumber={2} />} />
                    <Route path="profile/diagnresult3" element={<UserResults diagnnumber={3} />} />
                    <Route path="profile/trackers" element={<Trackers />} />
                    <Route path="diagnostics/*" element={<Router />} />
                </> 
            }
            <Route path="recommend" element={<Recommendations /> } />            
            <Route path="diagnostics/diagnostic1" element={<Diagnostic1 />} />  
            <Route path="diagnostics/diagnostic2" element={<Diagnostic2 />} />
            <Route path="diagnostics/diagnostic3" element={<Diagnostic3 />} />
            <Route path="editor/*" element={<Editor/>}/>
        </Routes>
    )
}
export default observer(Main)