import "../styles/ResumePreview.css"
import ResumePreviewHeader from "./ResumePreviewHeader"
import { exampleResume } from "../data"

function ResumePreview({ ref }) {
    return (
        <div className="resume-page" ref={ref}>
            <ResumePreviewHeader
                fullName={exampleResume.fullname}
                jobTitle={exampleResume.jobTitle}
                email={exampleResume.email}
                phone={exampleResume.phone}
                address={exampleResume.address}
            />
        </div>
    )
}

export default ResumePreview
