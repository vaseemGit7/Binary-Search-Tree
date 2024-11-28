import Node from "./node.js";

class Tree {
  constructor(array) {
    this.array = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }

  buildTree(array, min, max) {
    if (min > max) {
      return null;
    }

    let mid = Math.floor((min + max) / 2);

    let root = new Node(array[mid]);

    root.left = this.buildTree(array, min, mid - 1);
    root.right = this.buildTree(array, mid + 1, max);

    return root;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  getSuccessor(root) {
    let curr = root;
    if (root.left !== null) {
      curr = root.left;
    }
    return curr;
  }

  addItems(node) {
    this.array.push(node.data);
  }

  insert(key, root = this.root) {
    if (root === null) {
      return new Node(key);
    }

    if (root.data === key) {
      return root;
    }

    if (key < root.data) {
      root.left = this.insert(key, root.left);
    } else if (key > root.data) {
      root.right = this.insert(key, root.right);
    }

    return root;
  }

  delete(key, root = this.root) {
    if (root === null) {
      return root;
    }
    if (key < root.data) {
      root.left = this.delete(key, root.left);
    } else if (key > root.data) {
      root.right = this.delete(key, root.right);
    } else {
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      } else if (root.left !== null && root.right !== null) {
        let successor = this.getSuccessor(root.right);
        root.data = successor.data;
        root.right = this.delete(successor.data, root.right);
      }
    }
    return root;
  }

  find(key, root = this.root) {
    if (root.data === key) {
      return root;
    }

    if (key < root.data) {
      return this.find(key, root.left);
    } else if (key > root.data) {
      return this.find(key, root.right);
    }

    return root;
  }

  levelOrder(callbackFn, root = this.root) {
    if (typeof callbackFn !== "function") {
      throw new Error("A callback function is not found");
    }
    if (root === null) {
      return;
    }
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
      const node = queue.shift();
      callbackFn(node);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  inOrder(callbackFn, root = this.root) {
    if (typeof callbackFn !== "function") {
      throw new Error("A callback function is not found");
    }
    if (root === null) {
      return;
    }
    this.inOrder(callbackFn, root.left);
    callbackFn(root);
    this.inOrder(callbackFn, root.right);
  }

  preOrder(callbackFn, root = this.root) {
    if (typeof callbackFn !== "function") {
      throw new Error("A callback function is not found");
    }
    if (root === null) {
      return;
    }
    callbackFn(root);
    this.preOrder(callbackFn, root.left);
    this.preOrder(callbackFn, root.right);
  }

  postOrder(callbackFn, root = this.root) {
    if (typeof callbackFn !== "function") {
      throw new Error("A callback function is not found");
    }
    if (root === null) {
      return;
    }

    this.postOrder(callbackFn, root.left);
    this.postOrder(callbackFn, root.right);
    callbackFn(root);
  }

  height(node) {
    if (node === null) {
      return 0;
    }

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  depth(node, root = this.root) {
    if (node === null) {
      return 0;
    }

    if (root.data === node.data) {
      return 1;
    }

    if (node.data < root.data) {
      return 1 + this.depth(node, root.left);
    } else if (node.data > root.data) {
      return 1 + this.depth(node, root.right);
    }
  }

  isBalanced() {
    let leftHeight = this.height(this.root.left);
    let rightHeight = this.height(this.root.right);

    let heightDifference = Math.abs(leftHeight - rightHeight);

    return heightDifference > 1 ? false : true;
  }

  rebalance() {
    this.array = [];
    this.inOrder((node) => this.addItems(node), this.root);
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }
}

export default Tree;
