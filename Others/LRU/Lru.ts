type LLNode<T> = {
  value: T;
  next?: LLNode<T>;
  prev?: LLNode<T>;
};

function createNode<V>(value: V): LLNode<V> {
  return { value };
}

export default class LRU<K, V> {
  private length: number;
  private head?: LLNode<V>;
  private tail?: LLNode<V>;

  private lookup: Map<K, LLNode<V>>;
  private reverseLookup: Map<LLNode<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, LLNode<V>>();
    this.reverseLookup = new Map<LLNode<V>, K>();
  }

  update(key: K, value: V) {
    // Check the cache for existence
    let node = this.lookup.get(key);

    if (!node) {
      //  if it doesn't exist, add it
      //    check capacity and evict if over
      node = createNode(value);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      //  if it does, we need to update to the front of the list
      //  and update the value
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K) {
    // Check the cache for existence
    const node = this.lookup.get(key);
    if (!node) return undefined;

    // update the value we found and move it to the front
    this.detach(node);
    this.prepend(node);

    // return out the value found or undefined if not found
    return node.value;
  }

  private detach(node: LLNode<V>) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: LLNode<V>) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail as LLNode<V>;
    this.detach(this.tail as LLNode<V>);
    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
