import EditSection from "./EditSection"
import "../styles/EducationDetailsEditSection.css"
import DetailsEditList from "./DetailsEditList"
import { exampleResume } from "../data"

function EducationDetailsEditSection() {
    const data = exampleResume.education

    return (
        <EditSection
            sectionTitle="Education"
            sectionIcon="mdi:education-outline"
        >
            <DetailsEditList
                dataSource={data}
                itemRender={(item) => (
                    <>
                        <div className="color-accent-blue">
                            <span className="bold">{item.studyTitle}</span>
                            <span className="italic">, {item.schoolName}</span>
                        </div>
                        <div className="color-grey-800 text-[0.9rem]">
                            <span>
                                {item.startOfStudyDate.getFullYear()}-
                                {item.endOfStudyDate.getFullYear()}
                            </span>
                            <span> | </span>
                            <span>{item.schoolLocation}</span>
                        </div>
                    </>
                )}
            />
        </EditSection>
    )
}

export default EducationDetailsEditSection
