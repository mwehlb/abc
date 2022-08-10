let number =3548;
let temp=  number;
for (var test =0; number !==0;) {
    let a  =number % 10;
    test = test * 10 +a;
    number = parseInt(number / 10);
}
console.log (temp)