import "../styles/PersonalDetailsEditSection.css"
import EditForm from "./EditForm"
import EditFormInput from "./EditFormItem"
import EditSection from "./EditSection"

function PersonalDetailsEditForm() {
    const onSubmit = (e) => {}
    const onCancel = (e) => {}

    return (
        <EditForm onSubmit={onSubmit} onCancel={onCancel}>
            <EditFormInput id="full-name" value="Full name" label="Full name" />
            <EditFormInput id="job-title" value="Job title" label="Job title" />
            <EditFormInput
                id="email"
                value="Email"
                label="Email"
                options={{ recommended: true }}
            />
            <EditFormInput
                id="phone"
                value="0605075425"
                label="Phone number"
                options={{ recommended: true }}
            />
            <EditFormInput
                id="address"
                value="Address"
                label="Address"
                options={{ recommended: true }}
            />
        </EditForm>
    )
}

function PersonalDetailsEditSection() {
    return (
        <EditSection
            sectionIcon="material-symbols:id-card-outline-rounded"
            sectionTitle="Personal details"
        >
            <PersonalDetailsEditForm />
        </EditSection>
    )
}

export default PersonalDetailsEditSection
