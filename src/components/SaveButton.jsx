import SaveIcon from "./SaveIcon"
import "../Styles/buttons.css"
import { getSection } from "./helperFunctions";

export default function SaveButton () {
    const HandleClick = (event) => {
        let sectionDiv = getSection(event.target);
        let textDisplays = sectionDiv.querySelectorAll(".text-display");
        let inputWrappers = sectionDiv.querySelectorAll(".inputWrapper");
        
        textDisplays.forEach(element => {
            element.classList.remove("hidden");
        });

        inputWrappers.forEach(element => {
            element.classList.add("hidden");
        })
    }

    return <button onClick={(event) => HandleClick(event)}><SaveIcon  width="32px" height="32px"/></button>
}
