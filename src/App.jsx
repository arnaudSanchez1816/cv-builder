import "./styles/App.css"
import EditPanel from "./components/EditPanel"
import ResumePreviewPanel from "./components/ResumePreviewPanel"

function App() {
    return (
        <div className="app">
            <EditPanel />
            <ResumePreviewPanel />
        </div>
    )
}

export default App
