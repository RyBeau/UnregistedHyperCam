var img = document.createElement("img");
img.src = "./unregistered-hypercam.png";
img.style.position = "fixed";
img.style.top = "0";
img.style.left = "0";
img.height = "30";
document.body.appendChild(img);

var audio = new Audio("./unregistered-hypercam.mp3");
audio.loop = true;

audio.addEventListener("canplaythrough", () => {
  audio.play().catch((e) => {
    window.addEventListener(
      "click",
      () => {
        audio.play();
      },
      { once: true }
    );
  });
});
``;
