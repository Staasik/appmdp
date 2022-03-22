import {Routes, Route, Navigate} from 'react-router-dom'
import Diagnostics from 'components/pages/Diagnostics'
import Footer from 'components/defaultComponents/Footer'
import Header from 'components/defaultComponents/Header'
import diagnMock from 'mockdata/diagnBlocksMock';
import Diagnostic1 from 'components/pages/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostic3';

export const Main = () =>{
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/main/diagnostics" replace/>}/>
                    <Route path="diagnostics" element={<Diagnostics/>}>
                    </Route>
                    <Route path="diagnostics/diagnostic1" element={<Diagnostic1/>}/>
                    <Route path="/diagnostics/diagnostic2" element={<Diagnostic2/>}/>
                    <Route path="/diagnostics/diagnostic3" element={<Diagnostic3/>}/>
                </Routes>
            <Footer/>
        </>
    )
}
export default Main