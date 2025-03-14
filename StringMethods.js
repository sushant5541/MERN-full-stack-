
//length : Returns the length of string
let str = "hello, World";
console.log(str.length);

//charAt(index) : Return the character at the specified index
console.log(str.charAt(2));

//slice(start, end) : extract portion of a string and return it as a new string

console.log(str.slice(0, 7))

//substring(start, end): Similar to slice, but does not support negative indices.

console.log(str.substring(7, 12));

//substr(start, length): Extracts a substring starting at start with a specified length.

console.log(str.substring(7, 5))

//indexOf(searchValue, start): Returns the index of the first occurrence of a specified value.

console.log(str.indexOf("World"))

//lastIndexOf(searchValue, start): Returns the index of the last occurrence of a specified value.

console.log(str.lastIndexOf("o"));

//includes(searchValue, start): Checks if a string contains a specified value.

console.log(str.includes("World"));

//startsWith(searchValue, start): Checks if a string starts with a specified value.

console.log(str.startsWith("Hello"));

// endsWith(searchValue, length): Checks if a string ends with a specified value.

console.log(str.endsWith("World"));

// toUpperCase(): Converts a string to uppercase.

console.log(str.toUpperCase());

// toLowerCase(): Converts a string to lowercase.

console.log(str.toLowerCase());

// trim(): Removes whitespace from both ends of a string.

console.log(str.trim());

// trimStart(): Removes whitespace from the start of a string.

console.log(str.trimStart());

// trimEnd(): Removes whitespace from the end of a string.

console.log(str.trimEnd());

// replace(searchValue, replaceValue): Replaces a specified value with another value.

console.log(str.replace("World", "Javascript"));

// replaceAll(searchValue, replaceValue): Replaces all occurrences of a specified value.

console.log(str.replaceAll("World", "Javascript"));

// split(separator, limit): Splits a string into an array of substrings.  

console.log(str.split(" "));

// join(separator): Joins elements of an array into a string.

console.log(str.join(" "));

// toString(): Converts a value to a string.

console.log(str.toString(" "));


