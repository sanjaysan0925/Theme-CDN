document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    "<button id='cdnTestBtn'>Click Me</button>"
  );

  document.getElementById("cdnTestBtn").onclick = () => {
    alert("🎉 CDN JS Button Works!");
  };
});
