import DetailsEditList from "./DetailsEditList"
import EditSection from "./EditSection"
import { exampleResume } from "../data"
import { EditForm, EditFormInput } from "./EditForm"

const sectionIcon = "mdi:briefcase-outline"

function ProfessionalEditEntrySection({ entry, onSubmit, onCancel, onDelete }) {
    const { jobTitle, companyName, startDate, endDate, location } = entry

    return (
        <EditSection
            sectionTitle="Edit Professional experience"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <EditForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                onDelete={onDelete}
            >
                <EditFormInput
                    id="entry-job-title"
                    value={jobTitle}
                    label="Job title"
                />
                <EditFormInput
                    id="entry-company-name"
                    value={companyName}
                    label="Company name"
                />
                <EditFormInput
                    id="entry-job-location"
                    value={location}
                    label="Job location"
                />
                <EditFormInput
                    id="entry-job-start-date"
                    value={startDate}
                    label="Start of employment"
                />
                <EditFormInput
                    id="entry-job-end-date"
                    value={endDate}
                    label="End of employment"
                />
            </EditForm>
        </EditSection>
    )
}

function ProfessionalSection({ onEdit, onEditDone }) {
    const data = exampleResume.professional

    const onItemEdit = (item) => {
        const onSubmitEdit = () => {
            onEditDone()
        }

        const onCancelEdit = () => {
            onEditDone()
        }

        const onEntryDelete = () => {
            onEditDone()
        }
        onEdit(
            <ProfessionalEditEntrySection
                entry={item}
                onCancel={onCancelEdit}
                onSubmit={onSubmitEdit}
                onDelete={onEntryDelete}
            />
        )
    }

    return (
        <EditSection
            sectionTitle="Professional experience"
            sectionIcon={sectionIcon}
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
                                {item.startDate} - {item.endDate}
                            </span>
                            <span> | </span>
                            <span>{item.location}</span>
                        </div>
                    </>
                )}
                onItemEdited={onItemEdit}
            />
        </EditSection>
    )
}

export default ProfessionalSection
