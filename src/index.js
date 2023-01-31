module.exports = function reverse (n) {
  if (n<0){
    n=n*(-1);
  }
let str = '';
let resultstr = '';
str = n.toString();
for (i=0;i<str.length;i++){
resultstr = str[i] + resultstr;
}
return resultstr *1;


}
