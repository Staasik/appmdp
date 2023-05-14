import { Route, Routes } from "react-router-dom"
import DiagnosticsList from "./DiagnosticsList"

const Editor = () => {
    return (
        <Routes>
            <Route path="/diagnostics" element={<DiagnosticsList/>}/>
        </Routes>
    )
}

export default Editor