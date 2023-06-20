//example without the test condition statement

for (let j = 1; ; j += 2) {
  console.log(j);

  //to come out of this which is without the test condition ;
  //We used the break statement.
  if (j > 10) {
    break;
  }
}

//jis block main app break statement likhte ho ;
//Uss block ka jo parent block hai ; uske bahar app aa jate ho ; because of the break statement.
