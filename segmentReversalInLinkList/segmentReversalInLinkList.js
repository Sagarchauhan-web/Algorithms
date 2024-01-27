class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const nodeToAdd = new Node(value);

    if (this.head === null) {
      this.head = nodeToAdd;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = nodeToAdd;
    }

    this.size++;
    return this;
  }

  allValues() {
    let current = this.head;

    for (let i = 1; i <= this.size; i++) {
      console.log(current.value, 'value');
      current = current.next;
    }

    return this;
  }

  reverseBetween(startPos, endPos) {
    let currentPosition = 1;
    let currentNode = this.head;
    let start = this.head;

    while (currentPosition < startPos) {
      start = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }

    let newList = null;
    let tail = currentNode;

    while (currentPosition >= startPos && currentPosition <= endPos) {
      const next = currentNode.next;
      currentNode.next = newList;
      newList = currentNode;
      currentNode = next;
      currentPosition++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (startPos > 1) {
      console.log(this.head, 'head');
      return this;
    } else {
      this.head = newList;
      console.log(newList, 'newList');
      return this;
    }
  }
}

const linkList = new LinkedList();

linkList
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
  .add(7)
  .reverseBetween(2, 6)
  .allValues();
