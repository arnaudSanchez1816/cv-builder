import "./styles/App.css"
import EditPanel from "./components/EditPanel"
import ResumePreviewPanel from "./components/ResumePreviewPanel"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import { Navigation, MODE_EDIT, MODE_CUSTOMIZE } from "./navigation"

function App() {
    const [navigation, setNavigation] = useState({
        nav: new Navigation(MODE_EDIT),
    })

    const navMode = navigation.nav.mode
    return (
        <div className="app">
            <Sidebar
                onDetailsModeClicked={() => {
                    const nav = navigation.nav
                    nav.mode = MODE_EDIT
                    setNavigation({ nav: nav })
                }}
                onCustomizeModeClicked={() => {
                    const nav = navigation.nav
                    nav.mode = MODE_CUSTOMIZE
                    setNavigation({ nav: nav })
                }}
                activeMode={navMode}
            />
            {navMode === MODE_EDIT && <EditPanel />}
            {navMode === MODE_CUSTOMIZE && <div> </div>}
            <ResumePreviewPanel />
        </div>
    )
}

export default App
