import { Route, Routes } from "react-router-dom"
import DiagnosticsList from "./DiagnosticsList"
import AdminStore from "codebase/store/adminStore"
import { createContext } from "react"
import DiagnosticEditor from "./DiagnosticEditor"
import DiagnosticResults from "./Results"

interface IAdminStore {
    adminStore: AdminStore
}

const adminStore = new AdminStore()

export const AdminContext = createContext<IAdminStore>({
    adminStore
})

const Editor = () => {
    return (
        <AdminContext.Provider value={{ adminStore }}>
            <Routes>
                <Route path="/diagnostics" element={<DiagnosticsList/>}/>
                <Route path="/diagnosticEditor/:id" element={<DiagnosticEditor/>}/>
                <Route path="/results" element={<DiagnosticResults/>}/>
            </Routes>
        </AdminContext.Provider>
    )
}

export default Editor