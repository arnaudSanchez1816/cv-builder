import ResumePreviewHeader from "./ResumePreviewHeader"
import "../styles/ResumePreviewPanel.css"

function ResumePreviewPanel() {
    return (
        <div className="resume-preview">
            <ResumePreviewHeader
                fullName="Arnaud Sanchez"
                jobTitle="Dev Full Stack"
                email="asanchez@gmail.com"
                phone="0102030405"
                address="Montpellier, France"
            />
        </div>
    )
}

export default ResumePreviewPanel
