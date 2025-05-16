let count = 0;
let saveEl = document.getElementById("saved-counter");
let countEl = document.getElementById("count-el");

function increment() {
  console.log("clicked");
  if (count <= 5) {
    count++;
  }
  countEl.innerText = count;
}

function save() {
  if (count == 0) {
    alert("You can't add zero");
    return;
  }
  console.log("saved", count);
  saveEl.innerText += count + "-";
  count = 0;
  countEl.textContent = count;
}
