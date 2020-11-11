import {browserTree, nodesHierarchy} from "./Tree_hierarhi.js";
import {renderTreeToList} from "./Tree_To_List.js";
import {flattenArray} from "./flatten_array.js";

export function renderPage() {

    const treeHierarhi = flattenArray([browserTree, nodesHierarchy]);
    const treeToList = renderTreeToList(treeHierarhi);

    const rootDiv = document.getElementById("root");
    if (treeToList !== null) rootDiv.append(treeToList);
}



