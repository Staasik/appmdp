import Diagnostic1 from 'components/pages/Diagnostic1';
import Diagnostic2 from 'components/pages/Diagnostic2';
import Diagnostic3 from 'components/pages/Diagnostic3';
import Diagnostics from 'components/pages/Diagnostics';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/main/diagnostics" replace />} />
            <Route path="diagnostics" element={<Diagnostics />} />
            <Route path="diagnostics/diagnostic1" element={<Diagnostic1 />} />
            <Route path="/diagnostics/diagnostic2" element={<Diagnostic2 />} />
            <Route path="/diagnostics/diagnostic3" element={<Diagnostic3 />} />
        </Routes>
    )
}
export default Main