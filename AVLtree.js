import { BinarySearchTree } from "./binaryTree";

class AVLTree extends BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const heightDiference =
      this.getHeight(node.left) - this.getHeight(node.right);

    switch (heightDiference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        BalanceFactor.BALANCED;
    }
  }

  rotationLeftLeft(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;

    return temp;
  }

  rotationRightRight(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.right = node;

    return temp;
  }

  rotationLeftRight(node) {
    node.left = this.rotationRightRight(node.left);
    node = this.rotationLeftLeft(node);
    return node;
  }

  rotationRightLeft(node) {
    node.right = this.rotationLeftLeft(node.right);
    node = this.rotationRightRight(node);
    return node;
  }

  insert(v) {
    if (this.root === null) {
      this.root = new Node(v);
    } else {
      this.__insertNode__(this.root, new Node(v));
    }
  }

  removeNode(key) {
    node = super.removeNode(key);
    if (node == null) {
      return node;
    }

    const balance = this.getBalanceFactor(node)

    if(balance === BalanceFactor.UNBALANCED_LEFT){
      const balanceLeft = this.getBalanceFactor(node.left)
      if(balanceLeft === BalanceFactor.BALANCED || balanceLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
        return this.rotationLeftLeft(node)
      }
      if(balanceLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
        return this.rotationLeftRight(node)
      }
    }

    if(balance === BalanceFactor.UNBALANCED_RIGHT){
      const balanceRight = this.getBalanceFactor(node.right)
      if(balanceRight === BalanceFactor.BALANCED || balanceRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
        return this.rotationRightRight(node)
      }
      if(balanceRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
        return this.rotationRightLeft(node)
      }
    }
    return node
  }

  __insertNode__(node, value) {
    if (value.key < node.key) {
      if (node.left === null) {
        node.left = value;
      } else {
        this.__insertNode__(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = value;
      } else {
        if (node.right === null) {
          node.right === value;
        } else {
          this.__insertNode__(node.right, value);
        }
      }
    }
    const balance = this.getBalanceFactor(node);
    if (balance === BalanceFactor.UNBALANCED_LEFT) {
      if (value < node.left.key) {
        node = this.rotationLeftLeft(node);
      } else {
        return this.rotationLeftRight(node);
      }
    }

    if ((balance = BalanceFactor.UNBALANCED_RIGHT)) {
      if (value > node.right.key) {
        node = this.rotationRightRight;
      } else {
        return this.rotationRightLeft(node);
      }
    }
    return node;
  }
}

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};
