import ResumePreviewHeader from "./ResumePreviewHeader"

function ResumePreviewPanel() {
    return (
        <div>
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
