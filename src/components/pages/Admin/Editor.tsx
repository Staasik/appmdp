import { Route, Routes } from "react-router-dom"
import DiagnosticsList from "./DiagnosticsList"
import AdminStore from "codebase/store/adminStore"
import { createContext } from "react"
import DiagnosticEditor from "./DiagnosticEditor"

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
            </Routes>
        </AdminContext.Provider>
    )
}

export default Editor