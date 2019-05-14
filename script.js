var g = 0;

function Random() {
  var g = Math.floor(Math.random() * 10);
  document.getElementById('tb').value = g;

  if (g == 0) {
    console.log("💀");
  }
  if (g == 1) {
    console.log("💩");
  }
  if (g == 2) {
    console.log("😭");
  }
  if (g == 3) {
    console.log("😢");
  }
  if (g == 4) {
    console.log("😓");
  }
  if (g == 5) {
    console.log("😕");
  }
  if (g == 6) {
    console.log("🙃");
  }
  if (g == 7) {
    console.log("🤔");
  }
  if (g == 8) {
    console.log("🧐");
  }
  if (g == 9) {
    console.log("🤑");
  }
  if (g == 10) {
    console.log("🤯");
  }
}
