const browserTree = {
    label: "Window",
    children: [
        {
            label: "DOM_tree_to_list - Document Object Model; DOM_tree_to_list Tree",
            children: [
                {
                    label: "document",
                    children: [],
                },
                {
                    label: "CSSOM - CSS Object Model",
                    children: [],
                },
            ],
        },
        {
            label: "BOM - Browser Object Model",
            children: [
                {
                    label: "navigator",
                    children: [],
                },
                {
                    label: "screen",
                    children: [],
                },
                {
                    label: "location",
                    children: [],
                },
                {
                    label: "frames",
                    children: [],
                },
                {
                    label: "history",
                    children: [],
                },
                {
                    label: "XMLHttpReques",
                    children: [],
                },
            ],
        },
        {
            label: "JavaScript",
            children: [
                {
                    label: "Object",
                    children: [],
                },
                {
                    label: "Array",
                    children: [],
                },
                {
                    label: "Function",
                    children: [],
                },
                {
                    label: "...",
                    children: [],
                },
            ],
        },
    ],
};
const nodesHierarchy = {
    label: "EventTarget",
    children: [
        {
            label: "Node",
            children: [
                {
                    label: "Text",
                    children: [],
                },
                {
                    label: "Comment",
                    children: [],
                },
                {
                    label: "Element",
                    children: [
                        {
                            label: "SVGElement",
                            children: [],
                        },
                        {
                            label: "HTMLElement",
                            children: [
                                {
                                    label: "HTMLInputElement",
                                    children: [],
                                },
                                {
                                    label: "HTMLBodyElement",
                                    children: [],
                                },
                                {
                                    label: "HTMLAnchorElement",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};


function flattenArray (obj) {
    let result = [];
    const array = Array.isArray(obj) ? obj : [obj];
    array.forEach((item) => {
        result.push(item);
        if (item.children) {
            result = [...result, ...flattenArray(item.children)];
            // delete item.children
        }
    });
    return result
}



function createLiElement(text) {
    const li = document.createElement("li");
    li.innerHTML = text;
    return li;
}



function renderTreeToList(treeArray) {
    const list = document.createElement("ol");

    treeArray
        .map((node) => `${node.label} ${node.level}`)
        .map((item) => createLiElement(item))
        .forEach((liElement) => list.append(liElement));

    return list;
}



function renderTree(treeArray) {
    if (treeArray.length === 0) return null;

    const rootUlElement = document.createElement("ul");

    treeArray.forEach((node) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = node.label;
        rootUlElement.append(liElement);

        const subTree = renderTree(node.children);
        if (subTree !== null) rootUlElement.append(subTree);
    });

    return rootUlElement;
}

export function renderPage() {
    const tree1 = renderTree([browserTree, nodesHierarchy]);
    const test1 = flattenArray(browserTree);
    const test2 =flattenArray(nodesHierarchy);
    const tree = renderTreeToList(test1);
    const list = renderTreeToList(test2);

    const rootDiv = document.getElementById("root");
    if (tree !== null) rootDiv.append(tree);
    if (list !== null) rootDiv.append(list);
    if (tree !== null) rootDiv.append(tree1);
}



