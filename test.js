addEventListener = Function();
const {toExtJS, toExtBinJs} = require("./index.js");

function assertEq(l, r) {
  if (l !== r) {
    throw new Error(`Assertion Error: ${l} !== ${r}`);
  }
}

assertEq(toExtJS("file.binjs"), "file.js");
assertEq(toExtJS("file.a.binjs"), "file.a.js");
assertEq(toExtBinJs("file.js"), "file.binjs");
assertEq(toExtBinJs("file.a.js"), "file.a.binjs");
console.log("OK");
