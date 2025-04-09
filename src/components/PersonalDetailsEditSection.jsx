import { Icon } from "@iconify/react/dist/iconify.js"
import "../styles/PersonalDetailsEditSection.css"

function PersonalDetailsEditSection() {
    return (
        <section className="edit-personal-details rounded-large">
            <button className="section-foldout rounded-large rounded-bottom-none">
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
            <form>
                <label htmlFor="full-name">
                    Full name
                    <input type="text" name="full-name" id="full-name" />
                </label>
                <label htmlFor="job-title">
                    Job title <span>optional</span>
                    <input type="text" name="job-title" id="job-title" />
                </label>
                <label htmlFor="email">
                    Email <span>recommended</span>
                    <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="phone">
                    Phone number <span>recommended</span>
                    <input type="tel" name="phone" id="phone" />
                </label>
                <label htmlFor="address">
                    Address <span>recommended</span>
                    <input type="text" name="address" id="address" />
                </label>

                <button type="button">Cancel</button>
                <button type="submit">Save</button>
            </form>
        </section>
    )
}

export default PersonalDetailsEditSection
