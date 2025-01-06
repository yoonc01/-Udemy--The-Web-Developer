# JavaScript Basics

## Primitive Types

### Number (int + float)
```javascript
// Division (/) does not end within integer range.
// Exponentiation is expressed using **.
// NaN (Not a Number) is treated as a number (e.g., 0 / 0).
```

### String
```javascript
// Must use quotes (", ') or backticks (`).
// Strings are indexed (start from 0).
// str.length > gets the length of the string.
// str1 + str2 > concatenates strings.

// Common methods:
str.toUpperCase(); // Convert to uppercase
str.toLowerCase(); // Convert to lowercase
str.trim(); // Remove whitespace

// Chaining methods:
str.method1().method2();

// indexOf(arg): Returns the first occurrence index of the argument (returns -1 if not found).
// slice(beginIndex[, endIndex]): Extracts part of a string (endIndex is optional).

// Template Literal:
`I like ${3 + 4}`; // Returns "I like 7"
```

### Boolean (true or false)
```javascript
// Useful for logical operations.
```

### Null
```javascript
// typeof returns "object" (a design flaw).
// Represents the intentional absence of any value.
```

### Undefined
```javascript
// Represents variables that do not have an assigned value.
```

## Variables

### Declaring Variables
```javascript
// let: Used to store a value in a variable.
let year = 2024;

// Updating a variable:
year = year + 1;

// Shortcuts for incrementing or decrementing:
year++; // Returns value before increment.
++year; // Returns value after increment.
```

### Constant Variables
```javascript
// const: Used for constants; cannot be reassigned or updated.
const PI = 3.14;
```

### Old Method
```javascript
// var: Deprecated; avoid using in modern JavaScript.
```

## Naming Variables
```javascript
// Rules:
// - Cannot start with a digit.
// - Use camelCase (common) instead of snake_case (uncommon).

// Suggestion: Use `is` prefix for boolean variables.
let isGameOver = false;
```

## Math Object

### Common Methods
```javascript
Math.PI; // Returns the value of π.
Math.floor(4.9); // Rounds down (returns 4).
Math.ceil(4.1); // Rounds up (returns 5).

// Random number between 0 (inclusive) and 1 (exclusive):
Math.random();
```
