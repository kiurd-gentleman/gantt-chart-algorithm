const connectionCheck = function  (data , from , to){
    console.log('from', from)

    let fromNode = data.find(node => node.id === from)
    if (fromNode.parent.length !==0) {
        console.log(from , 'has parent '+ fromNode.parent)

        return fromNode.parent.map(from => {
            if (from == to) {
                console.log(from,'has loop inner')
                return false
            }else {
                return connectionCheck(data, from, to)
            }
        })
    }else{
        if (from == to) {
            console.log(from,'has loop')
            return false
        }else {
            console.log(from , 'has no parent')
            return  true
        }
    }
    // return false
}
let result = false;
let data = [
    {
        id          : 1,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : []
    },
    {
        id          : 2,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [1]
    },
    {
        id          : 3,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [2]
    },
    {
        id          : 4,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [3]
    },
    {
        id          : 5,
        name        : 'Task',
        dependencies: [],
        children    : [],
        parent      : [1]
    }
]
// let x = connectionCheck(data, 5, 2)
// console.log(x)
// console.log(connectionCheck(data, 5, 2))
if ( connectionCheck(data, 5, 2) == true) {
    console.log('Possible')
}else{
    console.log('Impossible')
}


// const isEven = function(number) {
//     if (number === 0) {
//         console.log("number is even")
//         return true;
//     }else if(number===1){
//         console.log("number is odd")
//         return false;
//     }else{
//         return isEven(number-2);
//     }
// }
//
// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// → false