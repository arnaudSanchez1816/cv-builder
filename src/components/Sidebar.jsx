import { Icon } from "@iconify/react/dist/iconify.js"
import EditPanelModeButton from "./EditPanelModeButton"
import "../styles/Sidebar.css"
import { MODE_CUSTOMIZE, MODE_EDIT } from "../navigation"

function Sidebar({
    activeMode,
    onDetailsModeClicked,
    onCustomizeModeClicked,
    onPreviewClicked,
}) {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-content">
                    <a
                        href="https://github.com/arnaudSanchez1816/cv-builder"
                        target="_blank"
                        title="Source code"
                        rel="noopener noreferrer"
                        className="sidebar-app-logo"
                    >
                        <Icon icon="academicons:cv-square" />
                    </a>
                    <EditPanelModeButton
                        text="Details"
                        iconId="mage:file-2"
                        onClick={onDetailsModeClicked}
                        isActive={activeMode === MODE_EDIT}
                    />
                    <EditPanelModeButton
                        text="Customize"
                        iconId="nimbus:tools"
                        onClick={onCustomizeModeClicked}
                        isActive={activeMode === MODE_CUSTOMIZE}
                    />
                </div>
                <button
                    className="open-preview-modal primary-color-button"
                    onClick={onPreviewClicked}
                >
                    <Icon icon="mdi:eye-outline" />
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
