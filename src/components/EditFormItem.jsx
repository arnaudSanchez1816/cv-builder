import "../styles/EditFormItem.css"

const EditFormInputDefaultOptions = {
    recommended: false,
    type: "text",
    inputName: "",
}

function EditFormInput({
    id,
    value,
    label,
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
                name={options.inputName ? options.inputName : id}
                type={options.type}
                value={value}
                className="rounded-medium"
            />
        </div>
    )
}

export default EditFormInput
