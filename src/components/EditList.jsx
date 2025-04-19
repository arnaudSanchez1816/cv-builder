import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/EditList.css"
import EditButton from "./EditButton"

function EditList({ dataSource, itemRender, onItemEdited }) {
    return (
        <>
            <ul className="details-edit-list">
                {dataSource.map((item, index) => (
                    <li className="edit-item" key={item.id}>
                        {dataSource.length > 1 && (
                            <div className="item-reorder">
                                {index > 0 && (
                                    <button className="item-up">
                                        <Icon icon="mdi:triangle" />
                                    </button>
                                )}
                                {index < dataSource.length - 1 && (
                                    <button className="item-down">
                                        <Icon icon="mdi:triangle-down" />
                                    </button>
                                )}
                            </div>
                        )}
                        <div className="item-content">{itemRender(item)}</div>
                        <EditButton
                            className="align-self-center"
                            onClick={() => {
                                onItemEdited(item)
                            }}
                        />
                    </li>
                ))}
            </ul>
            <div className="list-add-container">
                <button className="list-add rounded-large bold">
                    <Icon icon="material-symbols:add-rounded" />
                    Add
                </button>
            </div>
        </>
    )
}

export default EditList
