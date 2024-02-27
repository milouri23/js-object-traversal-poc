const object = { a: [4, 7, 8], b: { c: 5, d: { e: 7 } }, f: true };

printFirstLevelProperties(object);
console.log();
printProperties(object);
console.log();
printObject(object);

function printFirstLevelProperties(obj) {
  for (const property in obj) {
    console.log(property);
  }
}

function printProperties(obj, identation = "") {
  for (const property in obj) {
    console.log(identation + property);

    if (typeof obj[property] === "object") {
      printProperties(obj[property], identation + "  ");
    }
  }
}

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
