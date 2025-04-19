import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/EditSectionHeader.css"

const CHEVRON_DOWN_ICON = "mdi:chevron-down"
const CHEVRON_UP_ICON = "mdi:chevron-up"

function EditSectionHeader({
    sectionTitle,
    sectionIcon,
    onFoldoutClicked,
    foldable = true,
    isFolded = false,
}) {
    if (foldable) {
        return (
            <header className="edit-section-header">
                <button
                    className="section-foldout rounded-large rounded-bottom-none"
                    onClick={onFoldoutClicked}
                >
                    <span className="section-header-title">
                        <Icon
                            className="section-header-icon"
                            icon={sectionIcon}
                        ></Icon>
                        <h1>{sectionTitle}</h1>
                    </span>
                    <Icon
                        className="section-foldout-chevron"
                        icon={isFolded ? CHEVRON_DOWN_ICON : CHEVRON_UP_ICON}
                    ></Icon>
                </button>
            </header>
        )
    }

    return (
        <header className="edit-section-header">
            <span className="section-header-title">
                <Icon className="section-header-icon" icon={sectionIcon}></Icon>
                <h1>{sectionTitle}</h1>
            </span>
        </header>
    )
}

export default EditSectionHeader
