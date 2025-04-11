import EditSection from "./EditSection"
import "../styles/EducationDetailsEditSection.css"
import DetailsEditList from "./DetailsEditList"

const data = [
    {
        id: 0,
        studyTitle: "Master Info",
        schoolName: "Fac Sciences Mtp",
        schoolLocation: "Montpellier, France",
        startOfStudyDate: new Date(2016, 1, 1),
        endOfStudyDate: new Date(2018, 1, 1),
    },
    {
        id: 1,
        studyTitle: "Licence Info",
        schoolName: "Fac Aix Montperrin",
        schoolLocation: "Aix-en-Provence, France",
        startOfStudyDate: new Date(2015, 1, 1),
        endOfStudyDate: new Date(2016, 1, 1),
    },
    {
        id: 2,
        studyTitle: "DUT",
        schoolName: "IUT Aix",
        schoolLocation: "Aix-en-Provence, France",
        startOfStudyDate: new Date(2013, 1, 1),
        endOfStudyDate: new Date(2015, 1, 1),
    },
]

function EducationDetailsEditSection() {
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
