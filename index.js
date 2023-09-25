import moment from "moment";
import {connectionCheck, findParent, hasGrandParent, selectedItemStartDateModify} from "./gantt-logic.js";


let data              = [
    {
        id          : 1,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [],
        start       : '2023-08-01',
        end         : '2023-08-30',
    },
    {
        id          : 2,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [1],
        start       : '2023-08-08',
        end         : '2023-08-14',
    },
    {
        id          : 3,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [2],
        start       : '2023-08-10',
        end         : '2023-08-16',
    },
    {
        id          : 4,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [3],
        start       : '2023-08-08',
        end         : '2023-08-18',
    },
    {
        id          : 5,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [1],
        start       : '2023-08-16',
        end         : '2023-08-22',
    }
]

// if (connectionCheck(data, 5, 2) == true) {
//     console.log('Possible')
// } else {
//     console.log('Impossible')
// }

// console.log(findParent(data, 4))
console.log(selectedItemStartDateModify(data, 5, '2023-08-01', '2023-08-20'))
// console.log(hasGrandParent(data, 4))