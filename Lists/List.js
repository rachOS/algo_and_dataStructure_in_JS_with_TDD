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
  toString() {
    return this.dataStore.toString();
  }

  /** */
  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  /** Adds new element to end of list
   * @param {Any} element
   */
  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  /** */
  contains(element) {
    return this.find(element) >= 0;
  }

  /**Removes element from list */
  remove(element) {
    const indexOf = this.find(element);
    return indexOf > -1 && this.dataStore.splice(indexOf, 1) && --this.listSize;
  }

  /** Sets current position to first element of list*/
  front() {
    return (this.position = 0);
  }

  /**Sets current position to last element of list */
  end() {
    return (this.position = this.listSize - 1);
  }

  /**Moves current position back one element */
  prev() {
    return --this.position;
  }

  /**Moves current position forward one element */
  next() {
    return ++this.position;
  }

  /**Returns the number of elements in list
   * @returns {Number}
   */
  length() {
    return this.listSize;
  }

  /**Returns the current position in list */
  currPos() {
    return this.position;
  }

  /**Moves the current position to specified position */
  moveTo(number) {
    return (this.position = number);
  }

  /**Returns element at current position */
  getElement() {
    return this.dataStore[this.position];
  }
}

const list = new List();

module.exports = { list, List };
