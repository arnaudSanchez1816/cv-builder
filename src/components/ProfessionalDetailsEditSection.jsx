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

function ProfessionalDetailsEditSection() {
    return (
        <section>
            <h1>Professional experience</h1>
            <ul>
                <ProfessionalDetailsEditEntry
                    jobTitle="Gameplay programmer"
                    companyName="Smart Tale Games"
                    location="Montpellier, France"
                    startDate={new Date(2018, 1, 1)}
                    endDate={new Date(2024, 1, 1)}
                />
            </ul>
            <button>Add</button>
        </section>
    )
}

export default ProfessionalDetailsEditSection
