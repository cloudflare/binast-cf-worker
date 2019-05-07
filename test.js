addEventListener = Function();
const {toExtBinJs} = require("./index.js");

function assertEq(l, r) {
  if (l !== r) {
    throw new Error(`Assertion Error: ${l} !== ${r}`);
  }
}

assertEq(toExtBinJs("file.js"), "file.binjs");
assertEq(toExtBinJs("file.a.js"), "file.a.binjs");
console.log("OK");
