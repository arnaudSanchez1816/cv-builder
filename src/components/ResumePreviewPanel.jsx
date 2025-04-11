import ResumePreviewHeader from "./ResumePreviewHeader"
import "../styles/ResumePreviewPanel.css"
import { exampleResume } from "../data"

function ResumePreviewPanel() {
    return (
        <div className="resume-preview">
            <div className="resume-preview-scroll-container">
                <div className="resume-preview-content">
                    <ResumePreviewHeader
                        fullName={exampleResume.fullname}
                        jobTitle={exampleResume.jobTitle}
                        email={exampleResume.email}
                        phone={exampleResume.phone}
                        address={exampleResume.address}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResumePreviewPanel
