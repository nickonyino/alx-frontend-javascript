// ClassRoom.js

// Define and export the ClassRoom class
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize; // Assign the parameter to the private property
  }

  // Optionally, you might want to add methods to interact with _maxStudentsSize, e.g., getters or setters
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  set maxStudentsSize(size) {
    if (typeof size === 'number' && size >= 0) {
      this._maxStudentsSize = size;
    } else {
      throw new Error('Invalid size: must be a non-negative number');
    }
  }
}

