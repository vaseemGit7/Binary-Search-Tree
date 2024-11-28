import Tree from "./tree.js";

let array = [3, 23, 27, 84, 98, 57, 30, 10, 78, 69, 54, 74, 71, 5, 7];

let binaryTree = new Tree(array); //Creates a new binary tree
binaryTree.prettyPrint();
// │           ┌── 98
// │       ┌── 84
// │       │   └── 78
// │   ┌── 74
// │   │   │   ┌── 71
// │   │   └── 69
// │   │       └── 57
// └── 54
//     │       ┌── 30
//     │   ┌── 27
//     │   │   └── 23
//     └── 10
//         │   ┌── 7
//         └── 5
//             └── 3

console.log("Is Balanced :", binaryTree.isBalanced()); //true

console.log("Level order :");
binaryTree.levelOrder((node) => console.log(node.data)); //Level order Traversal (BFS)
// 54 10 74 5 27 69 84 3 7 23 30 57 71 78 98

console.log("Inorder :");
binaryTree.inOrder((node) => console.log(node.data)); //In order Traversal
// 3 5 7 10 23 27 30 54 57 69 71 74 78 84 98

console.log("Preorder :");
binaryTree.preOrder((node) => console.log(node.data)); //Pre order Traversal
// 54 10 5 3 7 27 23 30 74 69 57 71 84 78 98

console.log("Postorder :");
binaryTree.postOrder((node) => console.log(node.data)); //Post order Traversal
// 3 7 5 23 30 27 10 57 71 69 78 98 84 74 54

binaryTree.insert(234); // Insert 234 into the tree
binaryTree.insert(1123); // Insert 1123 into the tree
binaryTree.insert(457); // Insert 457 into the tree
binaryTree.insert(6347); // Insert 6347 into the tree

binaryTree.prettyPrint();
// │                       ┌── 6347
// │                   ┌── 1123
// │                   │   └── 457
// │               ┌── 234
// │           ┌── 98
// │       ┌── 84
// │       │   └── 78
// │   ┌── 74
// │   │   │   ┌── 71
// │   │   └── 69
// │   │       └── 57
// └── 54
//     │       ┌── 30
//     │   ┌── 27
//     │   │   └── 23
//     └── 10
//         │   ┌── 7
//         └── 5
//             └── 3

console.log("Is Balanced :", binaryTree.isBalanced()); // false

binaryTree.rebalance(); // Rebalances the binary tree
binaryTree.prettyPrint();
// │               ┌── 6347
// │           ┌── 1123
// │       ┌── 457
// │       │   └── 234
// │   ┌── 98
// │   │   │       ┌── 84
// │   │   │   ┌── 78
// │   │   └── 74
// │   │       └── 71
// └── 69
//     │           ┌── 57
//     │       ┌── 54
//     │   ┌── 30
//     │   │   └── 27
//     └── 23
//         │       ┌── 10
//         │   ┌── 7
//         └── 5
//             └── 3

console.log("Is Balanced :", binaryTree.isBalanced()); //true

console.log("Level order :");
binaryTree.levelOrder((node) => console.log(node.data)); //Level order Traversal (BFS)
// 69 23 98 5 30 74 457 3 7 27 54 71 78 234 1123 10 57 84 6347

console.log("Inorder :");
binaryTree.inOrder((node) => console.log(node.data)); // In order Traversal
// 3 5 7 10 23 27 30 54 57 69 71 74 78 84 98 234 457 1123 6347

console.log("Preorder :");
binaryTree.preOrder((node) => console.log(node.data)); //Pre order Traversal
// 69 23 5 3 7 10 30 27 54 57 98 74 71 78 84 457 234 1123 6347

console.log("Postorder :");
binaryTree.postOrder((node) => console.log(node.data)); // Post order Traversal
// 3 10 7 5 27 57 54 30 23 71 84 78 74 234 6347 1123 457 98 69

binaryTree.delete(69); //Deletes the node with the value 69
binaryTree.prettyPrint();
// │               ┌── 6347
// │           ┌── 1123
// │       ┌── 457
// │       │   └── 234
// │   ┌── 98
// │   │   │   ┌── 84
// │   │   └── 78
// │   │       └── 71
// └── 74
//     │           ┌── 57
//     │       ┌── 54
//     │   ┌── 30
//     │   │   └── 27
//     └── 23
//         │       ┌── 10
//         │   ┌── 7
//         └── 5
//             └── 3

console.log("Is Balanced :", binaryTree.isBalanced()); //true

const node98 = binaryTree.find(98); // Finds the node withe value 98
console.log(node98);
// Node {
//     data: 98,
//     left: Node {
//       data: 78,
//       left: Node { data: 71, left: null, right: null },
//       right: Node { data: 84, left: null, right: null }
//     },
//     right: Node {
//       data: 457,
//       left: Node { data: 234, left: null, right: null },
//       right: Node { data: 1123, left: null, right: [Node] }
//     }
//   }

console.log("Height of 98 :", binaryTree.height(node98)); // Height of the node (98) from leaf is 4
console.log("Depth of 98 :", binaryTree.depth(node98)); // Depth of the node (98) from root is 2
