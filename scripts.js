/*
  * Reeks Modulo Javascript Challenge:
  * Write a program that prints the numbers from 1 to 100.
  * But for multiples of three print "Media" instead of the number and for the multiples of five print "College".
  * For numbers which are multiples of both three and five print "MediaCollege".
  * Inleveren: link naar code bij Github
*/

for(let i = 1; i < 101; i++) {
  if(i % 5 && i % 3) {
    console.log("MediaCollege");
  } else {
    if(i % 3) {
      console.log("Media");
    } else if(i % 5) {
      console.log("College");
    } else {
      console.log(i);
    }
  }
}
