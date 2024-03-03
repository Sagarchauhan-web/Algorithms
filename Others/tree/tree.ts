class BinarySearchTreeNode<T> {
  value: T;
  rightNode?: BinarySearchTreeNode<T>;
  leftNode?: BinarySearchTreeNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root?: BinarySearchTreeNode<T>;

  isEmpty(): boolean {
    return this.root === undefined;
  }

  add(value: T): void {
    if (this.isEmpty()) {
      this.root = new BinarySearchTreeNode(value);
    } else {
      this._add(value, this.root!);
    }
  }

  private _add(value: T, node: BinarySearchTreeNode<T>) {
    if (value > node.value) {
      if (node.rightNode) {
        this._add(value, node.rightNode);
      } else {
        node.rightNode = new BinarySearchTreeNode(value);
      }
    } else if (value < node.value) {
      if (node.leftNode) {
        this._add(value, node.leftNode);
      } else {
        node.leftNode = new BinarySearchTreeNode(value);
      }
    }
  }

  contains(value: T): boolean {
    if (this.isEmpty()) return false;
    return this._contains(value, this.root);
  }

  private _contains(
    value: T,
    node: BinarySearchTreeNode<T> | undefined,
  ): boolean {
    if (node === undefined) return false;
    if (value > node.value) {
      return this._contains(value, node.rightNode);
    } else if (value < node.value) {
      return this._contains(value, node.leftNode);
    } else {
      return true;
    }
  }
}

const tree = new BinarySearchTree();
tree.add(5);
tree.add(10);
tree.add(20);
tree.add(17);

console.log(tree.contains(17)); // true
console.log(tree.contains(21)); // false
