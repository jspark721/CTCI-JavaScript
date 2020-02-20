// we have two identical DOM trees, A and B. For DOM tree A, we have the location of an element. Create a function to find that same element in tree B

// how do we get from the bottom child node to the parent node? just walk/loop back up the tree until you find the parent

// reverse path algorithm

function reversePath(element, root) {
    const path = [];
    let pointer = element;

    while(pointer.parent) {
        const index = pointer.parent.children.indexOf(pointer);
        path.push(index);

        pointer = pointer.parent;
    }

    pointer = root;

    // second tree -- iterate down the tree, move the pointer to the next child
    while(path.length) {
        pointer = children[path.pop()];
    }
}