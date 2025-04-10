import "../styles/EditSection.css"
import EditSectionFoldout from "./EditSectionFoldout"

function EditSection({ sectionTitle, sectionIcon, children }) {
    return (
        <section className="edit-section rounded-large">
            <EditSectionFoldout
                sectionTitle={sectionTitle}
                sectionIcon={sectionIcon}
            />
            {children}
        </section>
    )
}

export default EditSection
