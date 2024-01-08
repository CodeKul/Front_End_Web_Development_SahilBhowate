window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log(`The viewport's width is ${width} and the height is ${height}.`);

  let vhUnit = (2 / 100) * height;

  let vwUnit = (2 / 100) * width;

  console.log("The vhUnit and vwUnit is ", vhUnit, vwUnit);
});
