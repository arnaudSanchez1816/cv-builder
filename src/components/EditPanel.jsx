import EducationSection from "./EducationSection"
import PersonalDetailsSection from "./PersonalDetailsSection"
import ProfessionalSection from "./ProfessionalSection"
import "../styles/EditPanel.css"
import { useState } from "react"
import ProjectsSection from "./ProjectsSection"

function EditPanel() {
    const [editedSection, setEditedSection] = useState(null)

    const onEditingDone = () => {
        setEditedSection(null)
    }

    const onEditSection = (editedSectionContent) => {
        setEditedSection(editedSectionContent)
    }

    if (editedSection) {
        return (
            <main className="edit-panel">
                <div className="edit-panel-content">{editedSection}</div>
            </main>
        )
    }

    return (
        <main className="edit-panel">
            <div className="edit-panel-content">
                <PersonalDetailsSection
                    onEdit={onEditSection}
                    onEditDone={onEditingDone}
                />
                <EducationSection
                    onEdit={onEditSection}
                    onEditDone={onEditingDone}
                />
                <ProfessionalSection
                    onEdit={onEditSection}
                    onEditDone={onEditingDone}
                />
                <ProjectsSection
                    onEdit={onEditSection}
                    onEditDone={onEditingDone}
                />
            </div>
        </main>
    )
}

export default EditPanel
