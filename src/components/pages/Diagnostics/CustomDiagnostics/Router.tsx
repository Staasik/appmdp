import { Route, Routes } from "react-router-dom"
import OneOtherDiagnostic from "./OneOtherDiagnostic"
import OtherDiagnostics from "./OtherDiagnostics"

const Router = () => {
    return (
        <Routes>
            <Route path="custom" element={<OtherDiagnostics />} />
            <Route path="custom/:id" element={<OneOtherDiagnostic />} />
        </Routes>
    )
}

export default Router