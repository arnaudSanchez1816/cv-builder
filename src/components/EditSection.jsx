import "../styles/EditSection.css"
import EditButton from "./EditButton"
import EditSectionFoldout from "./EditSectionFoldout"

function EditSection({
    sectionTitle,
    sectionIcon,
    useFoldout = true,
    children,
}) {
    return (
        <section className="edit-section rounded-large">
            {useFoldout && (
                <EditSectionFoldout
                    sectionTitle={sectionTitle}
                    sectionIcon={sectionIcon}
                />
            )}

            {children}
        </section>
    )
}

export default EditSection
