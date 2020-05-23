// const spacing = document.getElementsByName("spacing")[0];
// const blur = document.getElementsByName("blur");
// const color = document.getElementsByName("base");
// const image = document.getElementsByTagName("img")[0];

const inputs = document.querySelectorAll("input");

inputs.forEach(elem => elem.addEventListener("change", handlerUpdate));
inputs.forEach(elem => elem.addEventListener("mousemove", handlerUpdate));

function handlerUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    "--" + this.getAttribute("name"),
    this.value + suffix
  );
}

// function handlerUpdate() {
//   if (this.getAttribute("name") === "spacing") {
//     document.documentElement.style.setProperty(
//       "--spacing-img",
//       this.value + "px"
//     );
//   } else if (this.getAttribute("name") === "blur") {
//     document.documentElement.style.setProperty("--blur-img", this.value + "px");
//   } else if (this.getAttribute("name") === "base") {
//     document.documentElement.style.setProperty("--base-color", this.value);
//   }
// }

// console.log(spacing);
// spacing.addEventListener("change", () => {
//   document.documentElement.style.setProperty("--spacing-img", "spacing.value");
//   console.log(spacing.value);
// });
