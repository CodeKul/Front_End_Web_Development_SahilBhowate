let sampleString =
  "a paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. this is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.";

let stringOne =
  "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?";

let wordsArray = stringOne.split(" ");

let sentenceArray = sampleString.split(".");

console.log("The wordsArray is ", wordsArray);
console.log("The sentenceArray is ", sentenceArray);
