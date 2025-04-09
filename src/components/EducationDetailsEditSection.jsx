function EducationDetailsEditEntry({
    studyTitle,
    schoolName,
    schoolLocation,
    startOfStudyDate,
    endOfStudyDate,
}) {
    return (
        <li>
            <div>
                <button>Up</button>
                <button>Down</button>
            </div>
            <div>
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
            <button>Edit</button>
        </li>
    )
}

function EducationDetailsEditSection() {
    return (
        <section>
            <h1>Education</h1>
            <ul>
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
            <button>Add</button>
        </section>
    )
}

export default EducationDetailsEditSection
