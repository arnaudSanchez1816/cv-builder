import { Icon } from "@iconify/react/dist/iconify.js"
import EditPanelModeButton from "./EditPanelModeButton"
import "../styles/Sidebar.css"

function Sidebar({ onDetailsModeClicked, onCustomizeModeClicked }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-content">
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
                <button className="open-preview-modal primary-color-button">
                    <Icon icon="mdi:eye-outline" />
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
