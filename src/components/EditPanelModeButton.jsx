import { Icon } from "@iconify/react"
import "../styles/EditPanelModeButton.css"

function EditPanelModeButton({ text, iconId, onClick }) {
    return (
        <button className="edit-panel-mode-btn" onClick={onClick}>
            <Icon icon={iconId} />
            <span>{text}</span>
        </button>
    )
}

export default EditPanelModeButton
