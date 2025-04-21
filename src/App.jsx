import "./styles/App.css"
import EditPanel from "./components/EditPanel"
import ResumePreviewPanel from "./components/ResumePreviewPanel"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import { Navigation, MODE_EDIT, MODE_CUSTOMIZE } from "./navigation"
import { createResume } from "./data"
import { ResumeContext } from "./contexts/ResumeContext"
import CustomizationPanel from "./components/CustomizationPanel"
import ResumePreviewModal from "./components/ResumePreviewModal"

function App() {
    const [navigation, setNavigation] = useState({
        nav: new Navigation(MODE_EDIT),
    })

    const [resume, setResume] = useState(createResume())

    const navMode = navigation.nav.mode

    const [showResumeModal, setShowResumeModal] = useState(false)

    const onPreviewClick = () => {
        setShowResumeModal(true)
    }
    const onResumeModalClose = () => {
        setShowResumeModal(false)
    }

    return (
        <div className="app">
            <ResumeContext value={{ resume, setResume }}>
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
                    onPreviewClicked={onPreviewClick}
                    activeMode={navMode}
                />
                {navMode === MODE_EDIT && <EditPanel />}
                {navMode === MODE_CUSTOMIZE && <CustomizationPanel />}
                <ResumePreviewPanel onShowResumeModal={onPreviewClick} />

                {showResumeModal && (
                    <ResumePreviewModal
                        isOpen={showResumeModal}
                        onClose={onResumeModalClose}
                    />
                )}
            </ResumeContext>
        </div>
    )
}

export default App
