import EditPanelModeButton from "./EditPanelModeButton"
import EducationDetailsEditSection from "./EducationDetailsEditSection"
import PersonalDetailsEditSection from "./PersonalDetailsEditSection"
import ProfessionalDetailsEditSection from "./ProfessionalDetailsEditSection"
import "../styles/EditPanel.css"
import { Icon } from "@iconify/react/dist/iconify.js"

function EditPanel() {
    const onDetailsModeClicked = () => {}

    const onCustomizeModeClicked = () => {}

    return (
        <main className="edit-panel">
            <aside className="edit-panel-sidebar">
                <div className="sidebar-container">
                    <div className="edit-panel-sidebar-content">
                        <div className="sidebar-app-logo">
                            <Icon icon="academicons:cv-square" />
                        </div>
                        <EditPanelModeButton
                            text="Details"
                            iconId="mage:file-2"
                            onClick={onDetailsModeClicked}
                        />
                        <EditPanelModeButton
                            text="Customize"
                            iconId="nimbus:tools"
                            onClick={onCustomizeModeClicked}
                        />
                    </div>
                    <button className="open-preview-modal">
                        <Icon icon="mdi:eye-outline" />
                    </button>
                </div>
            </aside>
            <div className="edit-panel-content">
                <PersonalDetailsEditSection />
                <EducationDetailsEditSection />
                <ProfessionalDetailsEditSection />
            </div>
        </main>
    )
}

export default EditPanel
