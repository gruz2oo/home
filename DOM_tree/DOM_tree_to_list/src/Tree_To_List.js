function createLiElement(text) {
    const li = document.createElement("li");
    li.innerHTML = text;
    return li;
}

export function renderTreeToList(treeArray) {
const list = document.createElement("ol");

treeArray
.map((node) => `${node.label} ${node.level}`)
.map((item) => createLiElement(item))
.forEach((liElement) => list.append(liElement));

return list;
}