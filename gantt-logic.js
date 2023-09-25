export const connectionCheck = function (data, from, to) {
    console.log('from', from)

    let fromNode = data.find(node => node.id === from)
    if (fromNode.parent.length !== 0) {
        console.log(from, 'has parent ' + fromNode.parent)
        for (let i = 0; i < fromNode.parent.length; i++) {
            if (fromNode.parent[i] == to) {
                console.log(from, 'has loop')
                return false
            }
            else {
                return connectionCheck(data, fromNode.parent[i], to)
            }
        }
    }
    else {
        if (from == to) {
            console.log(from, 'has loop')
            return false
        } else {
            console.log(from, 'has no parent')
            return true
        }
    }
}
export const findParent = function (data, id) {
    let parent = data.find(node => node.id === id)
    if (parent.parent.length !== 0) {
        return findParent(data, parent.parent[0])
    } else {
        return parent.id
    }
}

export const  hasParent = function (data, id) {
    let parent = data.find(node => node.id === id)
    if (parent.parent.length !== 0) {
        return true
    } else {
        return false
    }
}
export const hasGrandParent = function (data, id) {
    let parent = data.find(node => node.id === id)
    if (parent.parent.length !== 0) {
        return hasParent(data, parent.parent[0])
    } else {
        return false
    }
}

export const immediateParent = function (data, id) {
    let parent = data.find(node => node.id === id)
    if (parent.parent.length !== 0) {
        return parent.parent[0]
    } else {
        return false
    }
}

export const selectedItemStartDateModify = function (data, id, start, end) {
    if (!hasGrandParent(data, id)) {
        let parent = data.find(node => node.id === id)
        parent.start = start
        parent.end = end
        return data
    }

}