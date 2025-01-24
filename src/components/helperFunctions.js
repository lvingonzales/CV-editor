export function getSection(target) {
    if (target === null) {return null;}

    let currentElement = target.parentNode;

    if (!currentElement.classList.contains("section")) {
        currentElement = getSection(currentElement);
    }

    return currentElement;
}
