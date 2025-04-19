import { exampleResume } from "../data"
import DetailsEditList from "./DetailsEditList"
import { EditForm, EditFormTextArea, EditFormInput } from "./EditForm"
import EditSection from "./EditSection"

const sectionIcon = "mdi:folder-outline"

function ProjectsEditEntrySection({ entry, onSubmit, onCancel, onDelete }) {
    const { projectName, startDate, description } = entry

    return (
        <EditSection
            sectionTitle="Edit Project"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <EditForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                onDelete={onDelete}
            >
                <EditFormInput
                    id="entry-project-name"
                    value={projectName}
                    label="Name"
                />
                <EditFormInput
                    id="entry-project-date"
                    value={startDate}
                    label="Date"
                />
                <EditFormTextArea
                    id="entry-project-description"
                    value={description}
                    label="Description"
                />
            </EditForm>
        </EditSection>
    )
}

function ProjectsSection({ onEdit, onEditDone }) {
    const resumeData = exampleResume

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
            <ProjectsEditEntrySection
                entry={item}
                onCancel={onCancelEdit}
                onSubmit={onSubmitEdit}
                onDelete={onEntryDelete}
            />
        )
    }

    const projects = resumeData.projects
    return (
        <EditSection sectionTitle="Projects" sectionIcon={sectionIcon}>
            <DetailsEditList
                dataSource={projects}
                itemRender={(item) => (
                    <>
                        <div className="color-primary-blue">
                            <span className="bold">{item.projectName}</span>
                        </div>
                    </>
                )}
                onItemEdited={onItemEdit}
            ></DetailsEditList>
        </EditSection>
    )
}

export default ProjectsSection
