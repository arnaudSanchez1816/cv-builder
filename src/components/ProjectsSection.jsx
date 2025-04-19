import EditList from "./EditList"
import { EditForm, EditFormTextArea, EditFormInput } from "./EditForm"
import EditSection from "./EditSection"
import { useContext, useState } from "react"
import { ResumeContext } from "../contexts/ResumeContext"
import { createResumeProjectEntry } from "../data"
import { getNextId } from "../utils"

const sectionIcon = "mdi:folder-outline"

function ProjectsEditEntrySection({ entry, onSubmit, onCancel, onDelete }) {
    const [stateEntry, setStateEntry] = useState(entry)
    const { projectName, startDate, description } = stateEntry

    const onFormSubmitted = () => {
        onSubmit(stateEntry)
    }

    return (
        <EditSection
            sectionTitle="Edit Project"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <EditForm
                onSubmit={onFormSubmitted}
                onCancel={onCancel}
                onDelete={onDelete}
            >
                <EditFormInput
                    id="entry-project-name"
                    value={projectName}
                    label="Name"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            projectName: e.target.value,
                        })
                    }}
                />
                <EditFormInput
                    id="entry-project-date"
                    value={startDate}
                    label="Date"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            startDate: e.target.value,
                        })
                    }}
                />
                <EditFormTextArea
                    id="entry-project-description"
                    value={description}
                    label="Description"
                    onChange={(e) => {
                        setStateEntry({
                            ...stateEntry,
                            description: e.target.value,
                        })
                    }}
                />
            </EditForm>
        </EditSection>
    )
}

function ProjectsSection({ onEdit, onEditDone }) {
    const { resume, setResume } = useContext(ResumeContext)
    const projects = resume.projects

    const onItemEdit = (item) => {
        const onSubmitEdit = (updatedItem) => {
            const updatedProjects = projects.map((mapItem) => {
                if (mapItem.id === updatedItem.id) {
                    return updatedItem
                }

                return mapItem
            })
            setResume({ ...resume, projects: updatedProjects })
            onEditDone()
        }

        const onCancelEdit = () => {
            onEditDone()
        }

        const onEntryDelete = () => {
            onEditDone()
        }
        onEdit(
            <ProjectsEditEntrySection
                entry={item}
                onCancel={onCancelEdit}
                onSubmit={onSubmitEdit}
                onDelete={onEntryDelete}
            />
        )
    }

    const onItemOrderChanged = (item, newIndex) => {
        const updatedProjects = projects.filter(
            (element) => element.id !== item.id
        )
        updatedProjects.splice(newIndex, 0, item)
        setResume({ ...resume, projects: updatedProjects })
    }

    const onItemAdded = () => {
        const newId = getNextId(projects)
        const newEntry = createResumeProjectEntry(newId)
        setResume({ ...resume, projects: [...projects, newEntry] })
    }

    return (
        <EditSection sectionTitle="Projects" sectionIcon={sectionIcon}>
            <EditList
                dataSource={projects}
                itemRender={(item) => (
                    <>
                        <div className="color-primary-blue">
                            <span className="bold">{item.projectName}</span>
                        </div>
                    </>
                )}
                onItemEdited={onItemEdit}
                onItemAdded={onItemAdded}
                onItemOrderChanged={onItemOrderChanged}
            ></EditList>
        </EditSection>
    )
}

export default ProjectsSection
