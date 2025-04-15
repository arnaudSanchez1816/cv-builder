import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/EditForm.css"

function EditForm({ children, onSubmit, onCancel = null, onDelete = null }) {
    return (
        <form className="edit-form padding-medium" onSubmit={onSubmit}>
            {children}
            <div className="edit-form-controls">
                {onDelete && (
                    <button
                        type="button"
                        onClick={onDelete}
                        className="edit-form-button mr-[auto]"
                    >
                        Delete
                    </button>
                )}
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="edit-form-button"
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

export default EditForm
