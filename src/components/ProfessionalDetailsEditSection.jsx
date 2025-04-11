import DetailsEditList from "./DetailsEditList"
import EditSection from "./EditSection"

function ProfessionalDetailsEditEntry({
    jobTitle,
    companyName,
    location,
    startDate,
    endDate,
    description = "",
}) {
    return (
        <li>
            <div>
                <button>Up</button>
                <button>Down</button>
            </div>
            <div>
                <div>
                    <span>{jobTitle}</span>
                    <span>, {companyName}</span>
                </div>
                <div>
                    <span>
                        {startDate.getFullYear()}-{endDate.getFullYear()}
                    </span>
                    <span> | </span>
                    <span>{location}</span>
                </div>
            </div>
            <button>Edit</button>
        </li>
    )
}

const data = [
    {
        id: 0,
        jobTitle: "Gameplay programmer",
        companyName: "Smart Tale Games",
        location: "Montpellier, France",
        startDate: new Date(2018, 1, 1),
        endDate: new Date(2024, 1, 1),
    },
]

function ProfessionalDetailsEditSection() {
    return (
        <EditSection
            sectionTitle="Professional experience"
            sectionIcon="mdi:briefcase-outline"
        >
            <DetailsEditList
                dataSource={data}
                itemRender={(item) => (
                    <>
                        <div className="color-accent-blue">
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
