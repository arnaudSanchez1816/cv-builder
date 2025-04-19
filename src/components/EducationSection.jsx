import EditSection from "./EditSection"
import EditList from "./EditList"
import { EditForm, EditFormInput } from "./EditForm"
import { useContext, useState } from "react"
import { ResumeContext } from "../contexts/ResumeContext"

const sectionIcon = "mdi:education-outline"

function EducationEditEntrySection({ entry, onSubmit, onCancel, onDelete }) {
    const [stateEntry, setStateEntry] = useState(entry)
    const {
        studyTitle,
        schoolName,
        startOfStudyDate,
        endOfStudyDate,
        schoolLocation,
    } = stateEntry

    const onFormSubmitted = () => {
        onSubmit(stateEntry)
    }

    return (
        <EditSection
            sectionTitle="Edit Education"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <EditForm
                onSubmit={onFormSubmitted}
                onCancel={onCancel}
                onDelete={onDelete}
            >
                <EditFormInput
                    id="entry-study-title"
                    value={studyTitle}
                    label="Study title"
                    onChange={(e) =>
                        setStateEntry({
                            ...stateEntry,
                            studyTitle: e.target.value,
                        })
                    }
                />
                <EditFormInput
                    id="entry-school-name"
                    value={schoolName}
                    label="School name"
                    onChange={(e) =>
                        setStateEntry({
                            ...stateEntry,
                            schoolName: e.target.value,
                        })
                    }
                />
                <EditFormInput
                    id="entry-school-location"
                    value={schoolLocation}
                    label="School location"
                    onChange={(e) =>
                        setStateEntry({
                            ...stateEntry,
                            schoolLocation: e.target.value,
                        })
                    }
                />
                <EditFormInput
                    id="entry-start-study"
                    value={startOfStudyDate}
                    label="Start of study"
                    onChange={(e) =>
                        setStateEntry({
                            ...stateEntry,
                            startOfStudyDate: e.target.value,
                        })
                    }
                />
                <EditFormInput
                    id="entry-end-study"
                    value={endOfStudyDate}
                    label="End of study"
                    onChange={(e) =>
                        setStateEntry({
                            ...stateEntry,
                            endOfStudyDate: e.target.value,
                        })
                    }
                />
            </EditForm>
        </EditSection>
    )
}

function EducationSection({ onEdit, onEditDone }) {
    const { resume, setResume } = useContext(ResumeContext)
    const data = resume.education

    const onItemEdit = (item) => {
        const onSubmitEdit = (updatedItem) => {
            const educationData = data.map((mapItem) => {
                if (mapItem.id === updatedItem.id) {
                    return updatedItem
                }

                return mapItem
            })
            setResume({ ...resume, education: educationData })
            onEditDone()
        }

        const onCancelEdit = () => {
            onEditDone()
        }

        const onEntryDelete = () => {
            onEditDone()
        }
        onEdit(
            <EducationEditEntrySection
                entry={item}
                onCancel={onCancelEdit}
                onSubmit={onSubmitEdit}
                onDelete={onEntryDelete}
            />
        )
    }

    return (
        <EditSection sectionTitle="Education" sectionIcon={sectionIcon}>
            <EditList
                dataSource={data}
                itemRender={(item) => (
                    <>
                        <div className="color-primary-blue">
                            <span className="bold">{item.studyTitle}</span>
                            <span className="italic">, {item.schoolName}</span>
                        </div>
                        <div className="color-grey-800 text-[0.9rem]">
                            <span>
                                {item.startOfStudyDate} - {item.endOfStudyDate}
                            </span>
                            <span> | </span>
                            <span>{item.schoolLocation}</span>
                        </div>
                    </>
                )}
                onItemEdited={onItemEdit}
            />
        </EditSection>
    )
}

export default EducationSection
