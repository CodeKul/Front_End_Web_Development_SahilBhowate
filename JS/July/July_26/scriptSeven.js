//Usage of the metacharacter *

//See the zero or more occurences of the symbol after *. And the symbols before
// * should also be present.
//In the below pattern it means "Hom" should exist. And after "Hom" ; zero or more occurences
//of the character e are allowed
const patternOne = /Hom*e/;
