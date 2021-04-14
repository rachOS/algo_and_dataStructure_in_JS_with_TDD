class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;

    this.clear = this.clear;
    this.find = this.find;
    this.toString = this.toString;
    this.insert = this.insert;
    this.append = this.append;
    this.contains = this.contains;
    this.remove = this.remove;
    this.front = this.front;
    this.end = this.end;
    this.prev = this.prev;
    this.next = this.next;
    this.length = this.length;
    this.currPos = this.currPos;
    this.moveTo = this.moveTo;
    this.getElement = this.getElement;
  }

  /**Clears all elements from list */
  clear() {}

  /** */
  find() {}

  /**Returns string representation of list */
  toString() {}

  /** */
  insert() {}

  /** Adds new element to end of list
   * @param {Any} element
   */
  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  /** */
  contains() {}

  /**Removes element from list */
  remove(element) {
    return this.dataStore.find((el) => el === element);
  }

  /** Sets current position to first element of list*/
  front() {}

  /**Sets current position to last element of list */
  end() {}

  /**Moves current position back one element */
  prev() {}

  /**Moves current position forward one element */
  next() {}

  /**Returns the number of elements in list
   * @returns {Number}
   */
  length() {
    return this.listSize;
  }

  /**Returns the current position in list */
  currPos() {}

  /**Moves the current position to specified position */
  moveTo() {}

  /**Returns element at current position */
  getElement() {}
}

const list = new List();

module.exports = { list, List };
