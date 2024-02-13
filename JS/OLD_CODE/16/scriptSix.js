//example without the test condition statement

for (let j = 1; ; j += 2) {
  console.log(j);

  //to come out of this which is without the test condition ;
  //We used the break statement.
  if (j > 10) {
    break;
  }
}

//1
//3
//5
//7
//9
//11

//How does the break statement work ?
//jis block main app break statement likhte ho ;
//Uss block ka jo parent block hai ; uske bahar app aa jate ho ; because of the break statement.
