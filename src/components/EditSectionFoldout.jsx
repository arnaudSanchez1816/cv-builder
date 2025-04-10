import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/EditSectionFoldout.css"

const CHEVRON_DOWN_ICON = "line-md:chevron-down"
const CHEVRON_UP_ICON = "line-md:chevron"

function EditSectionFoldout({ sectionTitle, sectionIcon }) {
    return (
        <button className="section-foldout rounded-large rounded-bottom-none padding-medium">
            <span className="section-foldout-title">
                <Icon
                    className="section-foldout-icon"
                    icon={sectionIcon}
                ></Icon>
                <h1>{sectionTitle}</h1>
            </span>
            <Icon
                className="section-foldout-chevron"
                icon={CHEVRON_DOWN_ICON}
            ></Icon>
        </button>
    )
}

export default EditSectionFoldout
