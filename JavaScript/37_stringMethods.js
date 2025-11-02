console.log("Javascript".length);
console.log("Javascript"[2]); //to get the character at 2 index.
console.log("Javascript".charAt(7));
console.log("Javascript".charCodeAt(3)); //returns ASCII value
console.log("Javascript".toLowerCase());
console.log("Javascript".toUpperCase());
console.log("Javascript".slice(2,-1)); //substring - doesnt include the last character
console.log("Javascript".substring(2, 5)); //all the negative index will be converted to 0
console.log("Javascript".concat(" Automation"));

let lang = "Java_Javascript_Python";
console.log(lang.split('_')); //always return an array
console.log("Javascript".includes("Java"));
console.log("Javascript".replace("Java", "J")); //Only first value will be replaced not all
console.log("Javascript".replaceAll("a", "x")); //replaces all the values.
console.log(" Java script  ".trim());
console.log("  Javascript  ".trimStart());
console.log("  Javascript  ".trimEnd());
console.log("Develop".padEnd(10,"*")); 
console.log("Develop".padStart(10,"*"));
console.log("Javascript".startsWith("J"));
console.log("Javascript".endsWith("pt"));
console.log("Javascript".repeat(2));
console.log("Javascript".indexOf("s"));
console.log("Javascript".lastIndexOf("pt"));
console.log("Javascript".search("script"));
