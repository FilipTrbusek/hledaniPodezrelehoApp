let offenderWeight = 101;
let offenderHeight = 192;

if (offenderHeight > 190 && offenderWeight > 100) {
  console.log("Main suspects.");
} else if (offenderHeight > 190 || offenderWeight > 100) {
  console.log("Suspicious.");
} else {
  console.log("Not suspicious.");
}
