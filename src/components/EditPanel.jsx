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
        <div className="edit-panel">
            <aside className="edit-panel-sidebar">
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
            </aside>
            <div className="edit-panel-content">
                <PersonalDetailsEditSection />
                <EducationDetailsEditSection />
                <ProfessionalDetailsEditSection />
            </div>
        </div>
    )
}

export default EditPanel
