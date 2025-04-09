import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/PersonalDetailsEditSection.css"

function PersonalDetailsEditSection() {
    return (
        <section className="edit-personal-details rounded-large">
            <button className="section-foldout rounded-large rounded-bottom-none padding-medium">
                <span className="section-foldout-title">
                    <Icon
                        className="section-foldout-icon"
                        icon="material-symbols:id-card-outline-rounded"
                    ></Icon>
                    <h1>Personal details</h1>
                </span>
                <Icon
                    className="section-foldout-chevron"
                    icon="line-md:chevron-down"
                ></Icon>
            </button>
            <form className="edit-personal-details-form padding-medium">
                <div className="edit-form-item">
                    <label htmlFor="full-name">Full name</label>
                    <input
                        type="text"
                        className="rounded-medium"
                        name="full-name"
                        id="full-name"
                    />
                </div>
                <div className="edit-form-item">
                    <label htmlFor="job-title">
                        Job title{" "}
                        <span className="text-grey-400 text-[0.8em]">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="rounded-medium"
                        name="job-title"
                        id="job-title"
                    />
                </div>
                <div className="edit-form-item">
                    <label htmlFor="email">
                        Email{" "}
                        <span className="text-grey-400 text-[0.8em]">
                            recommended
                        </span>
                    </label>
                    <input
                        type="email"
                        className="rounded-medium"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="edit-form-item">
                    <label htmlFor="phone">
                        Phone number{" "}
                        <span className="text-grey-400 text-[0.8em]">
                            recommended
                        </span>
                    </label>
                    <input
                        type="tel"
                        className="rounded-medium"
                        name="phone"
                        id="phone"
                    />
                </div>
                <div className="edit-form-item">
                    <label htmlFor="address">
                        Address{" "}
                        <span className="text-grey-400 text-[0.8em]">
                            recommended
                        </span>
                    </label>
                    <input
                        type="text"
                        className="rounded-medium"
                        name="address"
                        id="address"
                    />
                </div>
                <div className="edit-form-controls">
                    <button type="button">Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </section>
    )
}

export default PersonalDetailsEditSection
