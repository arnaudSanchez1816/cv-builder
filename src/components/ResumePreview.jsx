import "../styles/ResumePreview.css"
import ResumeHeader from "./ResumeHeader"
import { exampleResume } from "../data"
import ResumeSectionItem from "./ResumeSectionItem"
import ResumeSection from "./ResumeSection"

function ProfessionalExperienceEntry({ entryData }) {
    const { companyName, startDate, endDate, jobTitle, location, description } =
        entryData

    return (
        <ResumeSectionItem
            title={jobTitle}
            subTitle={companyName}
            location={location}
            description={description}
            startDate={startDate}
            endDate={endDate}
        />
    )
}

function EducationEntry({ entryData }) {
    const {
        schoolName,
        startOfStudyDate,
        endOfStudyDate,
        studyTitle,
        schoolLocation,
    } = entryData

    return (
        <ResumeSectionItem
            title={studyTitle}
            subTitle={schoolName}
            location={schoolLocation}
            startDate={startOfStudyDate}
            endDate={endOfStudyDate}
        />
    )
}

function ProjectEntry({ entryData }) {
    const { projectName, startDate, endDate, description } = entryData

    return (
        <ResumeSectionItem
            title={projectName}
            description={description}
            startDate={startDate}
            endDate={endDate}
        />
    )
}

function ResumePreview({ ref }) {
    const resumeData = exampleResume

    let professionalXp = null
    if (resumeData.professional && resumeData.professional.length > 0) {
        professionalXp = (
            <ResumeSection title="Professional Experience">
                {exampleResume.professional.map((item) => (
                    <ProfessionalExperienceEntry
                        key={item.id}
                        entryData={item}
                    />
                ))}
            </ResumeSection>
        )
    }

    let education = null
    if (resumeData.education && resumeData.education.length > 0) {
        education = (
            <ResumeSection title="Education">
                {exampleResume.education.map((item) => (
                    <EducationEntry key={item.id} entryData={item} />
                ))}
            </ResumeSection>
        )
    }

    let projects = null
    if (resumeData.projects && resumeData.projects.length > 0) {
        projects = (
            <ResumeSection title="Projects">
                {exampleResume.projects.map((item) => (
                    <ProjectEntry key={item.id} entryData={item} />
                ))}
            </ResumeSection>
        )
    }

    return (
        <div className="resume-page" ref={ref}>
            <ResumeHeader
                fullName={exampleResume.fullname}
                jobTitle={exampleResume.jobTitle}
                email={exampleResume.email}
                phone={exampleResume.phone}
                address={exampleResume.address}
            />
            <div className="resume-content">
                {professionalXp}
                {education}
                {projects}
            </div>
        </div>
    )
}

export default ResumePreview
