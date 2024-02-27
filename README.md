# JavaScript Object Traversal Proof of Concept

This proof of concept demonstrates three different ways to traverse a JavaScript object and print its properties.

## Code Overview

The code consists of three functions: printFirstLevelProperties, printProperties, and printObject. Each function takes an object as input and prints its properties in a different way.

### printFirstLevelProperties

This function prints the first-level properties of the object. It uses a for...in loop to iterate over the properties of the object and console.log to print each property.

```javascript
function printFirstLevelProperties(obj) {
  for (const property in obj) {
    console.log(property);
  }
}
```

### printProperties

This function prints all properties of the object, including nested properties and array indices, with indentation to indicate the level of nesting. It uses a for...in loop to iterate over the properties of the object, recursion to handle nested objects, and console.log to print each property with the appropriate indentation.

```javascript
function printProperties(obj, indentation = "") {
  for (const property in obj) {
    console.log(indentation + property);

    if (typeof obj[property] === "object") {
      printProperties(obj[property], indentation + "  ");
    }
  }
}
```

### printObject

This function prints all properties of the object with their full paths and values. It uses a for...in loop to iterate over the properties of the object, recursion to handle nested objects, and console.log to print each property with its full path and value.

```javascript
function printObject(obj, prefix = "") {
  for (const property in obj) {
    let newPrefix = prefix ? `${prefix}.${property}` : property;

    if (typeof obj[property] === "object") {
      printObject(obj[property], newPrefix);
    } else {
      console.log(`${newPrefix}: ${obj[property]}`);
    }
  }
}
```

## Usage

To use these functions, simply call them with the object you want to traverse as the argument. For example:

```javascript
const object = { a: [4, 7, 8], b: { c: 5, d: { e: 7 } }, f: true };

printFirstLevelProperties(object);
console.log();
printProperties(object);
console.log();
printObject(object);
```

This will print the properties of the object in three different ways.
