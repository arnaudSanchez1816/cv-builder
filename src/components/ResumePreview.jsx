import "../styles/ResumePreview.css"
import ResumeHeader from "./ResumeHeader"
import ResumeSectionItem from "./ResumeSectionItem"
import ResumeSection from "./ResumeSection"
import { useContext } from "react"
import { ResumeContext } from "../contexts/ResumeContext"

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
    const { resume } = useContext(ResumeContext)
    const customization = resume.customization

    let professionalXp = null
    if (resume.professional && resume.professional.length > 0) {
        professionalXp = (
            <ResumeSection title="Professional Experience">
                {resume.professional.map((item) => (
                    <ProfessionalExperienceEntry
                        key={item.id}
                        entryData={item}
                    />
                ))}
            </ResumeSection>
        )
    }

    let education = null
    if (resume.education && resume.education.length > 0) {
        education = (
            <ResumeSection title="Education">
                {resume.education.map((item) => (
                    <EducationEntry key={item.id} entryData={item} />
                ))}
            </ResumeSection>
        )
    }

    let projects = null
    if (resume.projects && resume.projects.length > 0) {
        projects = (
            <ResumeSection title="Projects">
                {resume.projects.map((item) => (
                    <ProjectEntry key={item.id} entryData={item} />
                ))}
            </ResumeSection>
        )
    }

    return (
        <div className={`resume-page ${customization.layout}`} ref={ref}>
            <ResumeHeader
                fullName={resume.fullname}
                jobTitle={resume.jobTitle}
                email={resume.email}
                phone={resume.phone}
                address={resume.address}
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
