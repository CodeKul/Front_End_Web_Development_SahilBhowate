//Meta-Character {} Braces
// {a,b}
// a aur b dono number hai

//[Condition 1]
// The number a means "kam se kam compulsorily 'a' number of times character repeat hona chahiye".

//[Condition 2]
// The number b means "jyada se jyada 'b' number of times character repeat hona chahiye" ; ya
// phir b number se jyada baar bhi repeat ho sakta hai.

//[Condition 1] Ya [Condition 2] main se ek bhi condition agar sach hui toh test() function ka
//output true ayega.

const patternOne = /e{2,3}/;
const inputString = "ebc";

const inputStringTwo = "det";

const inputStringThree = "deet";

const inputStringFour = "eebc";

const inputStringFive = "deeet";

const inputStringSix = "deeeet";

console.log(patternOne.test(inputStringSix));

//Write a regular expression
//Jo inputString main ki digits ki occurences ko count karein ?
const patternTwo = /[0-9]{2,4}/;

//The above pattern means
//Apki inputString main koi bhi digit from 0 to 9
//Kam se kam do baar ana chahiye. Ya jyada se jyada 4 baar. Aur char se jyada baar aya toh bhi
//chalega.
//Matlab digit character ek hi baar occur hua toh pattern match nahi hoga.

const inputStringSeven = "dosdo585cdf";
const inputStringEight = "12";
const inputStringNine = "343433";
const inputStringTen = "1";
const inputStringEleven = "2";

console.log(patternTwo.test(inputStringEleven));
