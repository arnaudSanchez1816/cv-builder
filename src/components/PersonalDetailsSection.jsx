import "../styles/PersonalDetailsEditSection.css"
import { EditForm, EditFormInput } from "./EditForm"
import EditSection from "./EditSection"
import { exampleResume } from "../data"
import { Icon } from "@iconify/react/dist/iconify.js"
import EditButton from "./EditButton"

const sectionIcon = "material-symbols:id-card-outline-rounded"

function PersonalDetailsEditSection({ onSubmit, onCancel }) {
    const resumeData = exampleResume

    return (
        <EditSection
            sectionTitle="Edit Personal details"
            sectionIcon={sectionIcon}
            options={{ showHeader: true, headerFoldable: false }}
        >
            <div className="personal-section-content">
                <EditForm onSubmit={onSubmit} onCancel={onCancel}>
                    <EditFormInput
                        id="full-name"
                        value={resumeData.fullname}
                        label="Full name"
                    />
                    <EditFormInput
                        id="job-title"
                        value={resumeData.jobTitle}
                        label="Job title"
                    />
                    <EditFormInput
                        id="email"
                        value={resumeData.email}
                        label="Email"
                        options={{ recommended: true }}
                    />
                    <EditFormInput
                        id="phone"
                        value={resumeData.phone}
                        label="Phone number"
                        options={{ recommended: true }}
                    />
                    <EditFormInput
                        id="address"
                        value={resumeData.address}
                        label="Address"
                        options={{ recommended: true }}
                    />
                </EditForm>
            </div>
        </EditSection>
    )
}

function PersonalDetailsSection({ onEdit, onEditDone }) {
    const onEditDetails = () => {
        const onSubmitEdit = () => {
            onEditDone()
        }

        const onCancelEdit = () => {
            onEditDone()
        }

        onEdit(
            <PersonalDetailsEditSection
                onCancel={onCancelEdit}
                onSubmit={onSubmitEdit}
            />
        )
    }

    const resumeData = exampleResume

    return (
        <EditSection
            sectionIcon={sectionIcon}
            sectionTitle="Personal details"
            options={{ showHeader: false, headerFoldable: false }}
        >
            <div className="personal-section-content preview">
                <div className="group">
                    <p className="fullname">{resumeData.fullname}</p>
                    <p className="job-title">{resumeData.jobTitle}</p>
                </div>
                <div className="group">
                    <p className="flex align-i-center">
                        <Icon
                            className="text-[20px] mr-[0.5rem]"
                            icon="ic:round-email"
                        />
                        {resumeData.email}
                    </p>
                    <p className="flex align-i-center">
                        <Icon
                            className="text-[20px] mr-[0.5rem]"
                            icon="ic:round-phone"
                            strokeWidth="1"
                            stroke="currentcolor"
                        />
                        {resumeData.phone}
                    </p>
                    <p className="flex align-i-center">
                        <Icon
                            className="text-[20px] mr-[0.5rem]"
                            icon="mdi:location"
                        />
                        {resumeData.address}
                    </p>
                </div>
                <EditButton onClick={onEditDetails} />
            </div>
        </EditSection>
    )
}

export default PersonalDetailsSection
