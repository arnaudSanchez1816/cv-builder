import DetailsEditList from "./DetailsEditList"
import EditSection from "./EditSection"
import { exampleResume } from "../data"

function ProfessionalDetailsEditSection() {
    const data = exampleResume.professional

    return (
        <EditSection
            sectionTitle="Professional experience"
            sectionIcon="mdi:briefcase-outline"
        >
            <DetailsEditList
                dataSource={data}
                itemRender={(item) => (
                    <>
                        <div className="color-primary-blue">
                            <span className="bold">{item.jobTitle}</span>
                            <span className="italic">, {item.companyName}</span>
                        </div>
                        <div className="color-grey-800 text-[0.9rem]">
                            <span>
                                {item.startDate.getFullYear()}-
                                {item.endDate.getFullYear()}
                            </span>
                            <span> | </span>
                            <span>{item.location}</span>
                        </div>
                    </>
                )}
            />
        </EditSection>
    )
}

export default ProfessionalDetailsEditSection
