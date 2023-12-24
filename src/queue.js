const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    let nodeLast = null;
    for( let i = this.tail; i >= this.head; i--) {
      if (nodeLast) {
        const node = new ListNode(this.items[i]);
        node.next = nodeLast;
        nodeLast = node;
        return node;
      }
      nodeLast = new ListNode(this.items[i]);
      nodeLast.next = null;
      return nodeLast;
    }

  }

  enqueue(value) {
    this.items[this.tail] = value;
    this.tail++;
    return value;
  }

  dequeue() {
    const first = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return first;
  }
}

module.exports = {
  Queue
};
