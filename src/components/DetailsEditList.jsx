import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/DetailsEditList.css"

function DetailsEditList({ dataSource, itemRender }) {
    return (
        <>
            <ul className="details-edit-list">
                {dataSource.map((item) => (
                    <li className="edit-item" key={item.id}>
                        <div className="item-reorder">
                            <button className="item-up">
                                <Icon icon="mdi:triangle" />
                            </button>
                            <button className="item-down">
                                <Icon icon="mdi:triangle-down" />
                            </button>
                        </div>
                        <div className="item-content">{itemRender(item)}</div>
                        <button className="item-edit">
                            <Icon icon="mdi:edit-outline" />
                        </button>
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

export default DetailsEditList
