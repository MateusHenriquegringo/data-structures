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

  rotationLeftRight(node){
    node.left = this.rotationRightRight(node.left)
    node = this.rotationLeftLeft(node)
    return node
  }

  rotationRightLeft(node){
    node.right = this.rotationLeftLeft(node.right)
    node = this.rotationRightRight(node)
    return node
  }
}

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};
