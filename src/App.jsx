import "./styles/App.css"
import EditPanel from "./components/EditPanel"
import ResumePreviewPanel from "./components/ResumePreviewPanel"
import Sidebar from "./components/Sidebar"

function App() {
    return (
        <div className="app">
            <Sidebar />
            <EditPanel />
            <ResumePreviewPanel />
        </div>
    )
}

export default App
