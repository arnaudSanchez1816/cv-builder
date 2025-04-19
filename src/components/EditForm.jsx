import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/EditForm.css"

const EditFormInputDefaultOptions = {
    recommended: false,
    type: "text",
    htmlName: "",
}

function EditFormInput({
    id,
    value,
    label,
    onChange,
    options = EditFormInputDefaultOptions,
}) {
    options = { ...EditFormInputDefaultOptions, ...options }

    let labelElement = null
    if (label) {
        labelElement = (
            <label htmlFor={id}>
                {label}
                {options.recommended && (
                    <span className="ml-[0.5rem] text-grey-400 text-[0.8em]">
                        recommended
                    </span>
                )}
            </label>
        )
    }

    return (
        <div className="edit-form-item">
            {labelElement}
            <input
                id={id}
                name={options.htmlName ? options.htmlName : id}
                type={options.type}
                value={value}
                className="rounded-medium"
                onChange={onChange}
            />
        </div>
    )
}

const EditFormTextAreaDefaultOptions = {
    recommended: false,
    inputName: "",
}

function EditFormTextArea({
    id,
    value,
    label,
    onChange,
    options = EditFormTextAreaDefaultOptions,
}) {
    options = { ...EditFormTextAreaDefaultOptions, ...options }

    let labelElement = null
    if (label) {
        labelElement = (
            <label htmlFor={id}>
                {label}
                {options.recommended && (
                    <span className="ml-[0.5rem] text-grey-400 text-[0.8em]">
                        recommended
                    </span>
                )}
            </label>
        )
    }

    return (
        <div className="edit-form-item">
            {labelElement}
            <textarea
                id={id}
                name={options.htmlName ? options.htmlName : id}
                value={value}
                className="rounded-medium"
                onChange={onChange}
            />
        </div>
    )
}

function EditForm({ children, onSubmit, onCancel = null, onDelete = null }) {
    return (
        <form className="edit-form" onSubmit={onSubmit}>
            {children}
            <div className="edit-form-controls">
                {onDelete && (
                    <button
                        type="button"
                        onClick={onDelete}
                        className="edit-form-button mr-[auto] generic-button"
                    >
                        Delete
                    </button>
                )}
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="edit-form-button generic-button"
                    >
                        Cancel
                    </button>
                )}
                {onSubmit && (
                    <button
                        type="submit"
                        className="edit-form-submit primary-color-button"
                    >
                        <Icon icon="mdi:check" />
                        <span>|</span>
                        <span>Save</span>
                    </button>
                )}
            </div>
        </form>
    )
}

export { EditForm, EditFormTextArea, EditFormInput }
