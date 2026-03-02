let input = document.getElementById("input");
let add = document.getElementById("submit");
let div = document.querySelector(".task");

window.onload = () => {
  input.focus();
  showAll();
};

add.onclick = function (e) {
  e.preventDefault();
  if (input.value != 0) {
    let span = document.createElement("span");
    let btn = document.createElement("button");
    btn.append("Delete");
    btn.style =
      "color:#fff;padding:2px 5px;background-color:#34b834;border:none;border-radius:5px; float:right; cursor:pointer";
    span.style =
      "padding: 5px 10px;background-color:#fff;width:100%;border-radius:10px";
    span.append(input.value);
    span.appendChild(btn);
    div.appendChild(span);

    btn.onclick = function () {
      span.remove();
      savedAll();
    };
    span.onclick = function () {
      if (span.style.textDecoration !== "line-through") {
        span.style =
          "padding: 5px 10px;background-color:#fff;width:100%;border-radius:10px;text-decoration: line-through;color:#cdcdcd";
      } else
        span.style =
          "padding: 5px 10px;background-color:#fff;width:100%;border-radius:10px";
    };
  }
  input.value = "";
  savedAll();
};

function savedAll() {
  localStorage.setItem("task", div.innerHTML);
}
function showAll() {
  div.innerHTML = localStorage.getItem("task");
}
