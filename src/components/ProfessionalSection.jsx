import EditList from "./EditList"
import EditSection from "./EditSection"
import { EditForm, EditFormInput } from "./EditForm"
import { useContext, useState } from "react"
import { ResumeContext } from "../contexts/ResumeContext"

const sectionIcon = "mdi:briefcase-outline"

function ProfessionalEditEntrySection({ entry, onSubmit, onCancel, onDelete }) {
    const [stateEntry, setStateEntry] = useState(entry)
    const { jobTitle, companyName, startDate, endDate, location } = stateEntry

    const onFormSubmitted = () => {
        onSubmit(stateEntry)
    }

    return (
        <EditSection
            sectionTitle="Edit Professional experience"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <EditForm
                onSubmit={onFormSubmitted}
                onCancel={onCancel}
                onDelete={onDelete}
            >
                <EditFormInput
                    id="entry-job-title"
                    value={jobTitle}
                    label="Job title"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            jobTitle: e.target.value,
                        })
                    }}
                />
                <EditFormInput
                    id="entry-company-name"
                    value={companyName}
                    label="Company name"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            companyName: e.target.value,
                        })
                    }}
                />
                <EditFormInput
                    id="entry-job-location"
                    value={location}
                    label="Job location"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            location: e.target.value,
                        })
                    }}
                />
                <EditFormInput
                    id="entry-job-start-date"
                    value={startDate}
                    label="Start of employment"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            startDate: e.target.value,
                        })
                    }}
                />
                <EditFormInput
                    id="entry-job-end-date"
                    value={endDate}
                    label="End of employment"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            endDate: e.target.value,
                        })
                    }}
                />
            </EditForm>
        </EditSection>
    )
}

function ProfessionalSection({ onEdit, onEditDone }) {
    const { resume, setResume } = useContext(ResumeContext)
    const data = resume.professional

    const onItemEdit = (item) => {
        const onSubmitEdit = (updatedItem) => {
            const updatedData = data.map((mapItem) => {
                if (mapItem.id === updatedItem.id) {
                    return updatedItem
                }

                return mapItem
            })
            setResume({ ...resume, professional: updatedData })
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
            <EditList
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
