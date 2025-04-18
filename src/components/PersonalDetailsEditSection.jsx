import "../styles/PersonalDetailsEditSection.css"
import EditForm from "./EditForm"
import EditFormInput from "./EditFormItem"
import EditSection from "./EditSection"
import { exampleResume } from "../data"
import { Icon } from "@iconify/react/dist/iconify.js"
import EditButton from "./EditButton"

function PersonalDetailsEditForm() {
    const resumeData = exampleResume

    const onSubmit = (e) => {}
    const onCancel = (e) => {}

    return (
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
    )
}

function PersonalDetailsPreviewSection() {
    const resumeData = exampleResume

    return (
        <div className="personal-section-content">
            <div className="group">
                <p className="fullname">{resumeData.fullname}</p>
                <p className="job-title">{resumeData.jobTitle}</p>
            </div>
            <div className="group">
                <p className="flex align-item-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="ic:round-email"
                    />
                    {resumeData.email}
                </p>
                <p className="flex align-item-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="ic:round-phone"
                        strokeWidth="1"
                        stroke="currentcolor"
                    />
                    {resumeData.phone}
                </p>
                <p className="flex align-item-center">
                    <Icon
                        className="text-[20px] mr-[0.5rem]"
                        icon="mdi:location"
                    />
                    {resumeData.address}
                </p>
            </div>
            <EditButton />
        </div>
    )
}

function PersonalDetailsEditSection() {
    return (
        <EditSection
            sectionIcon="material-symbols:id-card-outline-rounded"
            sectionTitle="Personal details"
            useFoldout={false}
        >
            <PersonalDetailsPreviewSection />
        </EditSection>
    )
}

export default PersonalDetailsEditSection
