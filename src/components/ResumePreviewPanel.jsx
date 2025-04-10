import ResumePreviewHeader from "./ResumePreviewHeader"
import "../styles/ResumePreviewPanel.css"

function ResumePreviewPanel() {
    return (
        <div className="resume-preview">
            <div className="resume-preview-content">
                <ResumePreviewHeader
                    fullName="Arnaud Sanchez"
                    jobTitle="Dev Full Stack"
                    email="asanchez@gmail.com"
                    phone="0102030405"
                    address="Montpellier, France"
                />
            </div>
        </div>
    )
}

export default ResumePreviewPanel
