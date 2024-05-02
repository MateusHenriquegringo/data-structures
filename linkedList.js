class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(e) {
    const node = new Node(e);
    let current;
    if (this.head == undefined) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(e, position) {
    if (position <= this.count && position >= 0) {
      const node = new Node(e);
      let current = this.head;
      if (position === 0) {
        node.next = current;
        this.head = node
      } else {
        let previous;
        for (let i = 0; i < position; i++) {
            previous = current
            current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return undefined;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

