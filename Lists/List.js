class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  }

  /**Clears all elements from list */
  clear() {
    delete this.dataStore;
    this.dataStore = [];
  }

  /** Return the index of founded element*/
  find(element) {
    return this.dataStore.indexOf(element);
  }

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
    const indexOf = this.find(element);
    return indexOf > -1 && this.dataStore.splice(indexOf, 1) && --this.listSize;
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
