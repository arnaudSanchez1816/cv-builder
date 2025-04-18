import { useEffect, useRef } from "react"
import "../styles/Modal.css"
import { mergeClassNames } from "../utils"

function Modal({ isOpen = false, onClose, children, className }) {
    const modalRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [isOpen])

    useEffect(() => {
        const modalElement = modalRef.current

        const onBackdropClick = (e) => {
            const dialogDimensions = modalElement.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                if (onClose) {
                    onClose()
                }
            }
        }

        modalElement?.addEventListener("click", onBackdropClick)

        return () => modalElement?.removeEventListener("click", onBackdropClick)
    })

    const dialogClass = mergeClassNames("dialog-modal", className)

    return (
        <dialog ref={modalRef} onCancel={onClose} className={dialogClass}>
            {children}
        </dialog>
    )
}

export default Modal
