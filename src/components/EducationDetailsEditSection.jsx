import EditSection from "./EditSection"
import "../styles/EducationDetailsEditSection.css"

function EducationDetailsEditEntry({
    studyTitle,
    schoolName,
    schoolLocation,
    startOfStudyDate,
    endOfStudyDate,
}) {
    return (
        <li className="education-entry">
            <div className="education-entry-reorder">
                <button>Up</button>
                <button>Down</button>
            </div>
            <div className="education-entry-content">
                <div>
                    <span>{studyTitle}</span>
                    <span>, {schoolName}</span>
                </div>
                <div>
                    <span>
                        {startOfStudyDate.getFullYear()}-
                        {endOfStudyDate.getFullYear()}
                    </span>
                    <span> | </span>
                    <span>{schoolLocation}</span>
                </div>
            </div>
            <button className="education-entry-edit">Edit</button>
        </li>
    )
}

function EducationDetailsEditSection() {
    return (
        <EditSection
            sectionTitle="Education"
            sectionIcon="mdi:education-outline"
        >
            <ul className="education-list">
                <EducationDetailsEditEntry
                    studyTitle="Master Info"
                    schoolName="Fac Sciences Mtp"
                    schoolLocation="Montpellier, France"
                    startOfStudyDate={new Date(2016, 1, 1)}
                    endOfStudyDate={new Date(2018, 1, 1)}
                />
                <EducationDetailsEditEntry
                    studyTitle="Licence Info"
                    schoolName="Fac Aix Montperrin"
                    schoolLocation="Aix-en-Provence, France"
                    startOfStudyDate={new Date(2015, 1, 1)}
                    endOfStudyDate={new Date(2016, 1, 1)}
                />
                <EducationDetailsEditEntry
                    studyTitle="DUT"
                    schoolName="IUT Aix"
                    schoolLocation="Aix-en-Provence, France"
                    startOfStudyDate={new Date(2013, 1, 1)}
                    endOfStudyDate={new Date(2015, 1, 1)}
                />
            </ul>
            <button className="education-list-add">Add</button>
        </EditSection>
    )
}

export default EducationDetailsEditSection
