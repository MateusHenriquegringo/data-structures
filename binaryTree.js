class Node {
  constructor(v) {
    this.key = v;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
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
  }

  __searchNode__(node, v) {
    if (node == null) {
      return false;
    } else {
      if (v < node.key) {
        return this.__searchNode__(node.left, v);
      } else if (v > node.key) {
        return this.__searchNode__(node.right, v);
      } else {
        return true;
      }
    }
  }

  search(v) {
    return this.__searchNode__(this.root, v);
  }
  insert(v) {
    if (this.root === null) {
      this.root = new Node(v);
    } else {
      this.__insertNode__(this.root, new Node(v));
    }
  }

  min() {
    let min = this.root;
    while ((min != null) & (min.left != null)) {
      min = min.left;
    }

    return min;
  }

  __findMinNode__(node) {
    while (node.left !== null) {
      node = node.left
    }

    return node;
  }

  max() {
    let max = this.root;
    while ((max != null) & (max.right != null)) {
      max = max.right;
    }

    return max;
  }
  __removeNode__(node, key) {
    if (node == null) {
      return null;
    }
    if (node.key > key) {
      node.left = this.__removeNode__(node.left, key);
      return node;
    } else if (node.key < key) {
      node.right = this.__removeNode__(node.right, key);
      return node;
    } else {
      // caso com folhas(sem filhos a esquerda ou a direita)
      if (node.left == null && node.right == null) {
        node.key = null;
        return node;
      }

      // caso com um unico filho
      if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      }
      // caso com filhos a esquerda e a direita
      const aux = this.__findMinNode__(node.right);
      node.key = aux.key;
      node.right = this.__removeNode__(node.right, aux.key);
      return node;
    }
  }

  remove(k) {
    this.root = this.__removeNode__(this.root, k);
  }
}

