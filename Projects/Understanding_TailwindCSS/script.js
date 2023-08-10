const tailwindClassCollection = document.getElementById(
  "tailwindClassCollection"
);

const tailwindOutput = document.getElementById("tailwindOutput");

function printTheTailwindClasses() {
  console.log("The printTheTailwindClasses function has been executed");

  let tailwindClassCollectionText = tailwindClassCollection.value;

  let tailwindClassCollectionArr = tailwindClassCollectionText.split(" ");

  let tailwindClassOutput = "";

  for (let singleTailwindClass of tailwindClassCollectionArr) {
    tailwindClassOutput =
      tailwindClassOutput + `<div>${singleTailwindClass}\n</div>`;
  }

  tailwindOutput.innerHTML = tailwindClassOutput;
}
