import EditIcon from "./EditIcon"
import "../Styles/buttons.css"
import { getSection } from "./helperFunctions";

export default function EditButton () {
    const HandleClick = (event) => {
        let sectionDiv = getSection(event.target);
        let textDisplays = sectionDiv.querySelectorAll(".text-display");
        let inputWrappers = sectionDiv.querySelectorAll(".inputWrapper");
        
        textDisplays.forEach(element => {
            element.classList.add("hidden");
        });

        inputWrappers.forEach(element => {
            element.classList.remove("hidden");
        })
    }

    return <button onClick={(event) => HandleClick(event)}><EditIcon  width="32px" height="32px"/></button>
}
