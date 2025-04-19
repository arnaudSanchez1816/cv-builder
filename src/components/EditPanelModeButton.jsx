import { Icon } from "@iconify/react"
import "../styles/EditPanelModeButton.css"
import { mergeClassNames } from "../utils"

function EditPanelModeButton({ text, iconId, onClick, isActive }) {
    let className = "edit-panel-mode-btn"
    if (isActive) {
        className = mergeClassNames(className, "active")
    }

    return (
        <button className={className} onClick={onClick}>
            <Icon icon={iconId} />
            <span>{text}</span>
        </button>
    )
}

export default EditPanelModeButton
