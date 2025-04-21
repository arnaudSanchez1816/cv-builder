import Modal from "./Modal"
import { Icon } from "@iconify/react/dist/iconify.js"
import ResumePreview from "./ResumePreview"
import ResumePreviewPanel from "./ResumePreviewPanel"

function ResumePreviewModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="resume-modal">
            <div className="resume-modal-overflow">
                <ResumePreviewPanel />
            </div>
            <button
                autoFocus
                type="button"
                class="resume-modal-close"
                onClick={onClose}
            >
                <Icon icon="mdi:close" />
            </button>
        </Modal>
    )
}

export default ResumePreviewModal
