import { useEffect, useRef } from "react"
import "../styles/Modal.css"

function Modal({ isOpen = false, onClose, children }) {
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

    return (
        <dialog ref={modalRef} onCancel={onClose} className="dialog-modal">
            {children}
        </dialog>
    )
}

export default Modal
