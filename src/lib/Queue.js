class Queue {
    constructor() {
        this.queue = [];
        this.offset = 0;
    }

    /**
     * Add target to the Queue.
     * @param {*} item
     */
    enqueue(item) {
        this.queue.push(item);
    }

    /**
     * Shift the Queue.
     * @return {*}
     */
    dequeue() {
        if (this.queue.length === 0) return null;

        const item = this.queue[this.offset];

        if (++this.offset * 2 >= this.queue.length) {
          this.queue = this.queue.slice(this.offset);
          this.offset = 0;
        }

        return item;
    }
}

module.exports = Queue;
