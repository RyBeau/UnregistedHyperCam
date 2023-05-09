var img = document.createElement("img");
img.src =
  "https://cdn.jsdelivr.net/gh/RyBeau/UnregisteredHyperCam@main/unregistered-hypercam.png";
img.style.position = "fixed";
img.style.top = "0";
img.style.left = "0";
img.style.height = "30px";
img.style.zIndex = "9999999";
document.body.appendChild(img);

var audio = new Audio(
  "https://github.com/RyBeau/UnregistedHyperCam/raw/main/unregistered-hypercam.mp3"
);
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
