function connectionCheck (data , from , to){
    console.log('from', from)

    let fromNode = data.find(node => node.id === from)
    if (fromNode.parent.length !==0) {
        console.log(from , 'has parent '+ fromNode.parent)
        fromNode.parent.map(from => {
            if (from == to) {
                console.log(from,'has loop inner')
                return 0
            }else {
                connectionCheck(data, from, to)
            }
        })
    }else{
        if (from == to) {
            console.log(from,'has loop')
            return 0
        }else {
            console.log(from , 'has no parent')
            result = true
        }
    }
    // return 'Not accessible'
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
let x = connectionCheck(data, 5, 2)
console.log(result)
// if ( x == 'true') {
//     console.log('Possible')
// }else{
//     console.log('Impossible')
// }