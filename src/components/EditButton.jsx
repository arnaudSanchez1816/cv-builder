import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/EditButton.css"
import { mergeClassNames } from "../utils"

function EditButton({ onClick, className }) {
    const buttonClassName = mergeClassNames("edit-button", className)

    return (
        <button className={buttonClassName} onClick={onClick}>
            <Icon icon="mdi:edit-outline" />
        </button>
    )
}

export default EditButton
