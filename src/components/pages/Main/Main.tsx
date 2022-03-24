import Footer from 'components/defaultComponents/Footer';
import Header from 'components/defaultComponents/Header';
import Diagnostic1 from 'components/pages/Diagnostics/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostics/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostics/Diagnostic3';
import Diagnostics from 'components/pages/Diagnostics/Diagnostics';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Main = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/main/diagnostics" replace />} />
                <Route path="diagnostics" element={<Diagnostics />}>
                </Route>
                <Route path="diagnostics/diagnostic1" element={<Diagnostic1 />} />
                <Route path="/diagnostics/diagnostic2" element={<Diagnostic2 />} />
                <Route path="/diagnostics/diagnostic3" element={<Diagnostic3 />} />
            </Routes>
            <Footer />
        </>
    )
}
export default Main