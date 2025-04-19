import { useState } from "react"
import "../styles/EditSection.css"
import EditSectionHeader from "./EditSectionHeader"
import { mergeClassNames } from "../utils"

const EditSectionOptions = {
    showHeader: true,
    headerFoldable: true,
    isFolded: true,
}

function EditSection({
    sectionTitle,
    sectionIcon,
    options = EditSectionOptions,
    children,
}) {
    options = { ...EditSectionOptions, ...options }

    const [isFolded, setIsFolded] = useState(options.isFolded)

    const useFoldout = options.showHeader && options.headerFoldable

    let contentClass = "edit-section-content"
    if (useFoldout && isFolded) {
        contentClass = mergeClassNames(contentClass, "display-none")
    }

    return (
        <section className="edit-section rounded-large">
            {options.showHeader && (
                <EditSectionHeader
                    sectionTitle={sectionTitle}
                    sectionIcon={sectionIcon}
                    foldable={options.headerFoldable}
                    onFoldoutClicked={() => setIsFolded(!isFolded)}
                    isFolded={isFolded}
                />
            )}
            <div className={contentClass}>{children}</div>
        </section>
    )
}

export default EditSection
