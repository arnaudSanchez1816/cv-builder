import EducationDetailsEditSection from "./EducationDetailsEditSection"
import PersonalDetailsEditSection from "./PersonalDetailsEditSection"
import ProfessionalDetailsEditSection from "./ProfessionalDetailsEditSection"
import "../styles/EditPanel.css"

function EditPanel() {
    return (
        <main className="edit-panel">
            <div className="edit-panel-content">
                <PersonalDetailsEditSection />
                <EducationDetailsEditSection />
                <ProfessionalDetailsEditSection />
            </div>
        </main>
    )
}

export default EditPanel
