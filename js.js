// const person={
//     name:'john',
//     age:10,
//     city:'baku'
// };
// console.log(person.name + ',' + person.age + ',' + person.city);

// const person={
//     name:'john',
//     age:10,
//     surname:'doe'
// };
// let txt='';
// for (let x in person){
//     txt += person[x] + ' '
// };
// console.log(txt);

// const person={
//     name:'john',
//     age:10,
//     surname:'doe'
// };
// let myArray= Object.values(person)
// console.log(myArray);

// const person={
//     name:'john',
//     age:10,
//     surname:'doe',
//     today:new Date()
// };
// let myString=JSON.stringify(person);
// console.log(myString);

// const person={
//     name:'john',
//     surname:'doe',
//     age:function (){return 10;}
// };
// console.log(JSON.stringify(person));

// const person={
//     name:'john',
//     age:function() {return 10;}
// };
// person.age = person.age.toString();
// console.log(JSON.stringify(person));

// const settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

// const arr=['john', 'doe', {
//     name:'ffed',
//     surname:'fvdfdf',
//     age:10
// }]
// console.log(JSON.stringify(arr[2]));

// const person={
//     name:'john',
//     age:10,
//     language:'TR',
//     get lang(){
//         return this.language;
//     }
// };
// console.log(person.lang);

// const person={
//     name:'john',
//     age:10,
//     language:'NO',
//     set lang(value) {
//        this.language=value;
//     }
// };
// person.lang='en';
// console.log(person.language);

// const person={
//     name:'john',
//     age:10,
//     get fullname(){
//         return this.name + ' ' + this.age;
//     }
// };
// console.log(person.fullname);

// const person={
//     name:'john',
//     age:10,
//     fullname:function(){
//         return this.name + ' ' + this.age;
//     }
// };
// console.log(person.fullname());

// const person={
//     name:'john',
//     age:10,
//     language:'tr',
//     get lang(){
//         return this.language.toUpperCase();
//     }
// };
// console.log(person.lang);

// const person={
//     name:'john',
//     age:10,
//     language:'',
//     set lang(value){
//         this.language = value.toUpperCase();
//     }
// };
// person.lang='en';
// console.log(person.language);

// function person(first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
// };
// const txt = new person ('john', 'doe', 10, 'dark');
// console.log(txt.color);

// function person (first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
// }
// const txt1 = new person ('john', 'doe', 10, 'dark');
// const txt2 = new person ('vcdv', 'dfvdv', 7, 'red' );
// console.log(txt1.firstname + ' ' + txt2.age);

// function person (first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
// }
// const txt1 = new person ('john', 'doe', 10 , 'dark');
// const txt2 =new person ( 'dfvfd','sdffv', 7, 'red');
// txt1.name = function() {
//     return this.firstname+ ' ' + this.lastname;
// }
// console.log(txt1.name());

// function person(first,last,age,eye){
//     this.firstname = first,
//     this.lastname = last,
//     this.age = age,
//     this.color=eye;
// }
// const txt1 = new person('john', 10, 'dark');
// const txt2 = new person(3, 34, 5566, 7);
// txt1.nationally = "English";
// console.log(txt1.nationally);

// function person(first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
//     this.nationality = 'English';
// }
// const txt1 = new person('john', 10, 'dark');
// const txt2 = new person(3, 34, 5566, 7);
// console.log(txt1.nationality + ' ' + txt2.age);

// function person(first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
//     this.name = function (){
//        return this.firstname + ' ' + this.lastname
//     };
// }
// const txt1 = new person("john", 10, "dark");
// console.log(txt1.name());

// function person(first,last,age,eye) {
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
//     this.changename = function(name) {
//         this.firstname = name;
//     }
//     this.changage = function (age2) {
//         this.age = age2;
//     };
// }
// const txt = new person('john', 'doe', 10, 'dark');
// txt.changename('tom');
// txt.changage(7);
// console.log(txt.firstname + " " + txt.age, typeof person);

// function person (first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
// }
// const txt1 = new person('john', 'doe', 10, 'dark');
// const txt2 = new person('tom', 'jane', 17, 'white');
// console.log(txt1.firstname + ' ' + txt2.age);

// function person (first,last,age,eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.color = eye;
// }
// person.nationality = 'english';
// const txt1 = new person('john', 'doe', 10, 'dark');
// const txt2 = new person('tom', 'jane', 17, 'white');
// console.log(person.navigator);

// function person(first, last, age, eye) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.color = eye;
//   this.nationallity = 'english';
// }
// const txt1 = new person("john", "doe", 10, "dark");
// const txt2 = new person("tom", "jane", 17, "white");
// console.log(txt1.firstname + ' ' + txt2.nationallity);

// function person(first, last, age, eye) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.color = eye;
// }
// person.prototype.nationality = 'english';
// const txt1 = new person("john", "doe", 10, "dark");
// console.log(txt1.nationality);

// function person(first, last, age, eye) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.color = eye;
// };
// person.prototype.name = function() {
//     return this.firstname + ' ' + this.lastname
// };
// const txt1 = new person('john', 'doe', 10, 'dark');
// console.log(txt1.name());

// function person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// person.prototype.name = function() {
//   return this.firstName + ' ' + this.lastName
// };
// const txt1 = new person('john', 'doe', 10, 'dark');
// console.log(txt1.name());

// const name = 'john';
// let text = '';
// for (const x of name) {
//   text += x + " <br> ";
// }
// document.write(text);
// console.log(text);

// const letters = ['a','b','c'];
// let text = '';
// for (const x of letters) {
//   text += x + " <br> ";
// }
// document.write(text);
// console.log(text);

// function myNumbers() {
//   let n = 0;
//     return {
//       next: function() {
//         n += 10;
//         return {value:n, done:false};
//       }                                                   ******************************************
//     };
// }
// const n = myNumbers();
// n.next();
// n.next();
// n.next();
// n.next();
// console.log(n.next().value);

// const lettters = new Set(['a','b','w','r']);
// console.log(lettters.size);

// const letters = new Set(['a','b','c']);
// let text = '';
// letters.forEach (function(value) {
//   text += value + " <br> ";
// })
// document.write(text)
// console.log(text);

// const fruits = new Map([['apple', 500],['bannana', 300],['oranges',200]]);
// console.log(fruits.get("oranges"));

// const fruits = new Map();
// fruits.set('apples',500);
// fruits.set('banana',300);
// fruits.set('oranges',100);
// document.write(fruits)
// console.log(fruits);

// const fruits = new Map([['apple',100],['banana',300],['oranges',500]]);
// fruits.set('apples',200);
// console.log(fruits.get('apples'));

// const fruits = new Map([['apple',500],['banans',300],['oranges',100]]);
// console.log(fruits.get('apple'));

// const fruits = new Map([['apple',500],['banans',300],['oranges',100],['apples',400]]);
// console.log(fruits.size);

// const fruits = new Map([['apples',100],['bananas',300],['oranges',500]]);
// fruits.delete('apples');
// console.log(fruits.size);

// const fruits = new Map([['apples',500],['banana',300],['oranges',100]]);
// fruits.clear();
// console.log(fruits.size);

// const fruits = new Map([['apples',500],['banana',300],['oranges',100]]);
// fruits.delete("oranges");
// console.log(fruits.has('oranges'),typeof fruits);

// const fruits = new Map([['apples',500],['banana',300],['oranges',100]]);
// console.log(fruits instanceof Map);

// const fruits = new Map([['apples',500],['banana',300],['oranges',100]]);
// let text = ' ';
// fruits.forEach(function(value,key) {
//     text += key + ' ' + value + ' <br> '
// });
// console.log(text);
// document.write(text);

// const fruits = new Map([['apples',500],['banana',300],['oranges',100]]);
// let text = ' ';
// for (const x of fruits.entries()) {
//     text += x + ' <br> '
// };
// console.log(text);

// const fruits = new Map([["apples", 500],["banana", 300],["oranges", 100],]);
// let text = " ";
// for (const x of fruits.keys()) {
//   text += x + " <br> ";
// }
// console.log(text);
// document.write(text)

// const fruits = new Map([["apples", 500],["banana", 300],["oranges", 200],
// ]);
// let total = 0;
// for (const x of fruits.values()) {
//   total += x;
// }
// console.log(total);

// const apples = {name: 'apples'};
// const bananas = {name: 'bananas'};
// const oranges = {name: 'oranges'};
// const fruits = new Map();
// fruits.set(apples,500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 100);
// console.log(fruits.get(apples));

// const person = {
//   firstName: 'john',
//   lastName:'doe',
//   language:'en'
// }
// Object.defineProperty(person, 'language', {value:'NO'})
// console.log(person.language);

// const person = {
//   firstName: 'john',
//   lastName: 'doe',
//   language: 'en'
// }
// Object.defineProperty(person, 'language', {enumerable:false});
// console.log(Object.getOwnPropertyNames(person));

// const person = {
//   firstName: 'john',
//   lastName: 'doe',
//   language: 'en'
// }
// Object.defineProperty(person, 'language', {enumerable:false});
// console.log(Object.keys(person));

// const person = {
//   firstName: 'john',
//   lastName: 'doe',
//   language: 'en'
// }
// Object.defineProperty(person, 'year', {value:'1999'})
// console.log(person.year);

// const x = myFunction(5,3);
// function myFunction(a,b){
//   return a * b;
// }
// console.log(x);

// const x = function (a,b) {return a * b};
// console.log(x);

// const sayilar = [1, 2, 3];
// sayilar.forEach(myFunction);
// function myFunction(sayi) {
//   console.log(sayi);
// }

// const x = function (a,b) {return a * b};
// let z = x(5,3)
// console.log(z);

// (function () {
//     console.log('hello');
// })();

// function myFunction(a,b) {
//    return a * b;
// }
// let x = myFunction(5,3) / 2;
// console.log(x);

// function myFunction(a,b) {
//     return arguments.length;
// }
// console.log(myFunction(5,3,4,1,'r','fbdf'));

// function myFunction(a,b) {
//     return a * b;
// }
// console.log(myFunction.toString());

// const x = (x,y) => x * y;
// console.log(x(3,5));

// const myArray = [1,2,3];
// console.log(myArray instanceof Array);
// console.log(Array.isArray(myArray));
// console.log(myArray.constructor === Array);

// const person = {name:'john', age:10};
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty("location"));

// const colors = ['red','blue','green',2];
// console.log(colors.includes(2));

// const myArray = [1, 2, 3,"name"];
// console.log(myArray.hasOwnProperty("name"));

// Math.floor(Math.random() * 10) + 1;

// const defauktNmae = useDefautname ? 'Fred' : ""

// const primes = [3, 5, 7, 11];
// const doubledPrimes = primes.map((x) => x * 2);
// console.log(doubledPrimes);

// for (let i = 1; i < 201; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// function myFunction(x,y) {
//     if (y === undefined) {
//         y = 2;
//     }
//     return y * y;
// }
// console.log(myFunction(4));

// const x = document.getElementsByClassName("intro");
// console.log(x[0]);

// const x = document.forms["frm1"];
// let txt = "";
// for (let i = 0;i < x.lenght ; i++){
//     txt += x.elements[i].value + " <br> ";
// }
// console.log(txt);
// document.write(txt);

// console.log(document.anchors.length);
// document.write(document.anchors.length);

// console.log(startsWithHello.test(myString));
// console.log(endsWithWorld.test(myString));

// function validateForm() {
//     let x = document.forms['myForm']['fname'].value;
//     if(x == '') {
//         alert('name must be filled out');
//         return false;
//     }
// }

// const input = document.getElementById('input');
// let body = document.querySelector('body');
// function clickMe() {
//     if (input.value < 10) {
//       alert("try again");
//       body.style.backgroundColor = "red";
//     }
//     else {
//       alert("OK!");
//       body.style.backgroundColor = "green";
//     }
// }

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("try again");
//     return false;
//   }
// }

// function myFunction() {
//   let numb = document.getElementById("numb").value;
//   let body = document.querySelector('body')
//   if (numb < 1 || numb > 10) {
//     alert('try again!')
//     body.style.backgroundColor = "red";
//   }
//   else if (isNaN(numb)) {
//     alert("Not number");
//     body.style.backgroundColor = "yellow";
//   }
//   else if (numb = "") {
//     alert("empty!");
//     body.style.backgroundColor = "black";
//   }
//   else {
//     alert("OK!");
//     body.style.backgroundColor = "green";
//   }
// }

// function myMove() {
//   let id = null;
//   const elem = document.getElementById("animate");
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     }
//     else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

// function displayDate() {
//   console.log(Date());
// }

// function upperCase() {
//   const x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }

// Iteceo_(0131(*

// const x = function (a,b) {return a*b};
// console.log(x(4,6));

// function myFunction(a,b) {
//   return a * b;
// }
// console.log(myFunction.toString());

// const myObject = {
//   firstName : 'john',
//   lastName : 'Doe',
//   fullName : function() {
//     return this;
//   }
// }
// console.log(myObject.fullName());

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe'
// }
// console.log(person.fullName.call(person1));

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
//   }
// }
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(person.fullName.call(person1, ["Oslo", "Norway"]));

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(person.fullName.call(person1, "Oslo", "Norway"));

// class Car {
//   constructor(name,year,color) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//   }
// }
// const myCar1 = new Car("Ford", 2014, "White");
// const myCar2 = new Car("BMV", 2019, "Black");
// console.log(myCar1.name + ", " + myCar2.name + " - " + myCar1.year + ", " + myCar2.year + " - " + myCar1.color + ", " + myCar2.color);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }
// const myCar = new Car("Ford", 2015);
// console.log("My car is " + myCar.age() + " years old");

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }
// const date = new Date();
// let year = date.getFullYear();
// const myCar = new Car("Ford", 2015);
// console.log("My car is " + myCar.age(year) + ' years old');

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }
// class Model extends Car {
//   constructor (brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }
// const myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// var lang1 = ['df', 3,'fghfghg',3443,343,3432,122];
// var newlangs = lang1.sort();
// console.log(newlangs);

// let numbers = [4,6,78,2,1,67,3546,3];
// function sortArray(){
//     numbers.sort(function(x,y){
//         return y-x;

//     });
//     document.write(numbers);
// }

// function noteResult() {
//     let midthermNote,finalNote,average,message;
//     midthermNote = Number(document.getElementById("midtherm").value);
//     finalNote = Number(document.getElementById("final").value);
//     average = midthermNote*0.3 + finalNote*0.7;
//     if (isNaN(midthermNote) || midthermNote == "") {
//       message = "Pleace Number";
//     }
//     else if (isNaN(finalNote) || finalNote == "") {
//       message = "Pleace Number";
//     }
//     else {
//       message = average >= 50 ? "Well Done" : "Bad";
//     }
//     alert(message);
// }
// noteResult();

// let day;
// let d = new Date ().getDay ();
// switch (d) {
//   case 0: day = '0-ci gun';
//   break;
//   case 1: day = '1-ci gun';
//   break;
//   case 2: day = '2-ci gun';
//   break;
//   case 3: day = '2-ci gun';
//   break;
//   case 4: day = '3-cu gun';
//   break;
//   case 5: day = '5-cu gun';
//   break;
//   case 6: day = '6-ci gun';
//   break;
//   case 7: day = '7-ci gun';
//   break;
//   default: day = "not day";
// }
// alert(day)

// let langs=['a','b','c','d','e','f','g','h','y','q','z'];
// let text='',i;
// for(i=0;i<langs.length;i++){
//   text+=langs[i] + ','
// }
// console.log(text);

// let text = '',i;
// for(i=0; i<=100; i++){
//   if((i%2)==0){
//     text+=i + ' ';
//   }
// }
// document.write(text);

// function noteResult() {
//   let text, i, faktor=1;
//   text = Number(document.getElementById("final").value);
//   for(i=1; i<=text; i++){
//     faktor=faktor*i;
//   }
//   alert(faktor);
// }

// let message = '';
// let pc = {
//   name:'John',
//   lastName:'Doe',
//   age:'7',
//   year:'2342'
// };
// for (x in pc){
//   message+=pc[x] + ', ';
// }
// document.write(message);

// let message='',i=0;
// while(i<=10) {
//   message+=i;
//   i++;
// }
// document.write(message);

// let message='',i=11;
// do{
//   message+=i;
//   i++;
// }
// while (i<=10){
//   document.write(message);
// }

// let Number1, Number2, operator, result, answer, True = 0, False = 0;
// Number1 = document.getElementById ('Number1');
// Number2 = document.getElementById ('Number2');
// operator = document.getElementById ('Operator');
// result = document.getElementById ('result');
// answer = document.getElementById ('answer');
// True = document.getElementById ('true');
// False = document.getElementById ('false');
// function RandomNumber (min, max) {
//   let number = Math.floor (Math.random () * (max - min)) + min;
//   return number;
// }
// function newQuestion () {
//   let operation = ['+', '-', '*', '/'];
//   operator.textContent = operation[RandomNumber (0, 4)];
//   Number1.textContent = RandomNumber (0, 50);
//   Number2.textContent = RandomNumber (0, 50);
//   result.value = '';
//   if (operator.textContent == '/') {
//     while (true) {
//       Number2.textContent = RandomNumber (0, 50);
//       if (Number1.textContent % Number2.textContent == 0) {
//         break;
//       }
//     }
//   }
// }
// window.onload = function () {
//   newQuestion ();
// };
// answer.onclick = function () {
//   let ans, n1, n2;
//   n1 = Number (Number1.textContent);
//   n2 = Number (Number2.textContent);
//   switch (operator.textContent) {
//     case '+': ans = n1 + n2; break;
//     case '-': ans = n1 - n2; break;
//     case '*': ans = n1 * n2; break;
//     case '/': ans = n1 / n2; break;
//     default: break;
//   }
//   if (result.value == ans) {
//     True.textContent = Number (True.textContent) + 1;
//     newQuestion ();
//   }
//   else if (result.value == '') {
//     alert ('Pleace add result');
//   }
//   else if (isNaN (result.value)) {
//     alert ('Add number');
//   }
//   else {
//     False.textContent = Number (False.textContent) + 1;
//     newQuestion ();
//   }
// };

// function change(){
//   let x = document.getElementById("final");
//   x.value = x.value.toLocaleUpperCase();
// }

// let result = document.getElementById("result");
// window.addEventListener("resize",function(){
//   result.innerText = Math.random();
// });

// let num1 = 7, num2 = 10;
// let btn = document.getElementById("btn");
// let result = document.getElementById("result");
// btn.addEventListener('mouseover',function(){
//   procress(num1,num2);
// }
// );
// function procress(p1, p2) {{
//   result.innerText = p1*p2;
// }}

// let result = document.getElementById("result");
// let btn = document.getElementById('btn');
// result.addEventListener("mousemove", rastgele, false);
// function rastgele(){
//   result.innerText = Math.random();
// }
// btn.onclick = function (){
//   result.removeEventListener("mousemove", rastgele);
// }

// creatElementTest();
// function creatElementTest(){
//   let span = document.createElement("span");
//   let parentSpan = document.getElementById('div');
//   let text = document.createTextNode('Test');
//   span.appendChild(text);
//   parentSpan.appendChild(span);
// }

// replaceElementTest();
// function replaceElementTest(){
//   let span = document.createElement("span");
//   let parentSpan = document.getElementById('div');
//   let text = document.createTextNode('Test');
//   span.appendChild(text);
//   parentSpan.appendChild(span);
// }

// let counter = 0,obj,xpos,ypos;
// obj = document.querySelector('#obj');
// obj.onmouseover = function(){
//     counter++;
//     xpos = Math.floor(Math.random()*1000);
//     ypos = Math.floor(Math.random()*700);
//     obj.style.left = xpos + 'px';
//     obj.style.top = ypos + "px";
//     obj.style.height = this.clientHeight + 10 + "px";
//     obj.style.width = this.clientWidth + 10 + "px";
// }
// obj.onclick = function(){
//   alert(counter + '. seferde yakaladın');
//   obj.style.width = "110px";
//   obj.style.height = "110px";
//   counter = 0
// }

// let degisken1 = 10;
// let degisken2 = 20;
// [degisken1, degisken2] = [degisken2, degisken1];
// console.log("Degisken1: ", degisken1); // 20
// console.log("Degisken2: ", degisken2); // 10

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };
// const { name, age, city } = person;
// console.log(name); // 'John'
// console.log(age); // 30
// console.log(city); // 'New York'

// var i = 0;
// printNumbers(i);
// function printNumbers(num) {
//   console.log(num);
//   if (num < 100) {
//     printNumbers(num + 1);
//   }
// }

// function tekMiCiftMi(sayi) {
//   return sayi % 2 === 0 ? "Çift" : "Tek";
// }
// console.log(tekMiCiftMi(4)); // Çıktı: Çift
// console.log(tekMiCiftMi(7)); // Çıktı: Tek

// go("#result", "https://chat.openai.com/c/f4dcafde-53dc-472c-8378-188fab22d402", 5);
// function go(ID,Adress,second){
//   if(second === 0){
//     window.location.href = Adress;
//     return;
//   }
//   document.querySelector(ID).textContent = second + ' saniye sonra yönlendirilecek';
//   second --;
//   setTimeout(function(){
//     go(ID, Adress, second);
//   },1000)
// }

// let Btn = document.querySelector('#btn');
// let getIndex = document.querySelector('#city');
// Btn.addEventListener("click",function(){
// let valueSelected = getIndex.options[getIndex.selectedIndex].value;
//   let valueSelected = getIndex.selectedIndex;
//   alert(valueSelected);
// });

// let Btn = document.querySelector("#btn");
// let getIndex = document.querySelector("#city");
// let control = document.querySelector("#accept");
// let body = document.querySelector('body');
// Btn.addEventListener("click", function() {
//   if (!(control.checked)){
//     alert('pleace read privacy policy')
//   }
//   else{
//     body.style.backgroundColor = "green";
//   }
// });

// function filterItems() {
//   let filterValue = document.getElementById("filterInput").value.toUpperCase();

//   let items = document.getElementById("list").getElementsByTagName("li");

//   for (let i = 0; i < items.length; i++) {
//     let item = items[i];
//     let text = item.innerText || item.textContent;

//     if (text.toUpperCase().indexOf(filterValue) > -1) {
//       item.style.display = "";
//     }
//     else {
//       item.style.display = "none";
//     }
//   }
// }
// document.getElementById("filterInput").addEventListener("keyup", filterItems);

// let result = document.getElementById("result");
// let first;
// let second;
// let operator;
// let ans;
// function Numbers(num) {
//   result.value += num;
// }
// function Operators(opr) {
//   result.value += opr;
//   operator = opr;
// }
// function Dots(dot) {
//   result.value += dot;
// }
// function clearResult() {
//   result.value = "";
// }
// function calculate() {
//   let ans = result.value;
//   let numb = ans.split(operator);
//   first = parseFloat(numb[0]);
//   second = parseFloat(numb[1]);
//   switch (operator) {
//     case "+":
//       ans = first + second;
//       break;
//     case "-":
//       ans = first - second;
//       break;
//     case "*":
//       ans = first * second;
//       break;
//     case "/":
//       if (second === 0) {
//         result.value = "Error";
//         return;
//       }
//       ans = first / second;
//       break;
//     default:
//       return;
//   }
//   result.value = ans;
// }

// let message, result, charcter = 150, charcterLength;
// message = document.querySelector ('#message');
// result = document.querySelector ('#result');
// message.onkeydown = charcterControl;
// message.onkeyup = charcterControl;
// function charcterControl () {
//   charcterLength = this.value.length;
//   if (charcter >= charcterLength) {
//     let LastLength = charcter - charcterLength;
//     result.textContent = LastLength + " karakter kaldı";
//   }
//    else {
//     this.value = this.value.substr (0, charcter);
//   }
// }

// function addTask() {
//   let task = document.getElementById("task");
//   let taskValue = task.value;
//   if (taskValue !== "") {
//     let taskList = document.getElementById("taskList");
//     let newTask = document.createElement("li");
//     taskList.appendChild(newTask);
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     newTask.appendChild(checkbox);
//     newTask.appendChild(document.createTextNode(" " + taskValue));
//     newTask.style.cursor = "pointer";
//     checkbox.addEventListener("change", function () {
//       if (checkbox.checked) {
//         newTask.style.textDecoration = "line-through";
//       } else {
//         newTask.style.textDecoration = "none";
//       }
//     });
//   } else {
//     alert("Please add a task");
//   }
// }
// function clearValue() {
//   task.value = "";
// }
// function clearList() {
//   taskList.innerHTML = "";
// }

// // let body = document.querySelector("body");
// let paper = document.getElementById("paper");
// let scissors = document.getElementById("scissors");
// let stone = document.getElementById("stone");
// let computerSelection = document.getElementById("computer-selection");
// paper.addEventListener("click", function () {
//   playGame("paper");
// });
// scissors.addEventListener("click", function () {
//   playGame("scissors");
// });
// stone.addEventListener("click", function () {
//   playGame("stone");
// });
// function playGame(userChoose) {
//   let computerChoose = RandomChoice();
//   computerSelection.src = "/img/" + computerChoose + ".png";
//   function RandomChoice() {
//     let chooseimg = ["paper", "scissors", "stone"];
//     let randomChoose = Math.floor(Math.random() * chooseimg.length);
//     return chooseimg[randomChoose];
//   }
//   if (userChoose === computerChoose) {
//     alert("Draw!");
//   }
//   else if (
//     (userChoose === 0 && computerChoose === 2) ||
//     (userChoose === 1 && computerChoose === 0) ||
//     (userChoose === 2 && computerChoose === 1))
//    {
//     alert("Win!");
//     // body.style.backgroundImage = "url('/img/win.gif')";
//     // body.style.backgroundRepeat = "no-repeat";
//     // body.style.backgroundSize = "cover";
//     // body.style.backgroundPosition = "center";
//   }
//    else {
//     alert("Loser!");
//     // body.style.backgroundImage = "url('/img/loser.gif')";
//     // body.style.backgroundRepeat = "no-repeat";
//     // body.style.backgroundSize = "cover";
//     // body.style.backgroundPosition = "center";
//   }
// }

// function validate() {
//   const name = document.myForm.name.value;
//   const email = document.myForm.email.value;
//   const phone = document.myForm.phone.value;
//   const subject = document.myForm.subject.value;
//   const demoElement = document.getElementById("demo");
//   if (name === "") {
//     demoElement.innerHTML = "Name cannot be empty";
//     document.myForm.name.focus();
//     return false;
//   }
//   if (email === "") {
//     demoElement.innerHTML = "E-mail cannot be empty";
//     document.myForm.email.focus();
//     return false;
//   }
//   const emailID = email;
//   const atposn = emailID.indexOf("@");
//   const dotposn = emailID.lastIndexOf(".");
//   if (atposn < 1 || dotposn - atposn < 2) {
//     demoElement.innerHTML = "Please enter a valid email ID";
//     document.myForm.email.focus();
//     return false;
//   }
//   if (phone === "" || isNaN(phone) || phone.length !== 10) {
//     demoElement.innerHTML = "Please enter a valid 10-digit phone number";
//     document.myForm.phone.focus();
//     return false;
//   }
//   if (subject === "0") {
//     demoElement.innerHTML = "Please provide your area of expertise";
//     return false;
//   }
//   return true;
// }

// function generatePassword() {
//   let passLength = document.getElementById("length").value;
//   let password = document.getElementById("password");
//   let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//   let empatyPass = "";
//   for (let i = 0; i < passLength; i++) {
//     let randomPass = Math.floor(Math.random() * characters.length);
//     empatyPass += characters.charAt(randomPass);
//   }
//   password.textContent = empatyPass;
// }
// function copyPassword() {
//   let passwordContent = document.getElementById("password").textContent;
//   navigator.clipboard
//     .writeText(passwordContent)
//     .then(() => {
//       alert("Password copied to clipboard successfully!");
//     })
//     .catch((err) => {
//       console.error("Failed to copy password: ", err);
//     });
// }

// for(let sutun = 1; sutun <= 5; sutun++){
//   for(let setir = 1; setir <= sutun; setir++){
//      document.write('*');
//   }
//   document.write("<br>");
// }

// for(let sutun = 1; sutun <= 5; sutun++){
//   for(let setir = 1; setir<= sutun; setir++){
//      document.write(setir);
//   }
//   document.write("<br>");
// }

// document.write("<pre>");
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4 - i; j++) {
//     document.write(" ");
//   }
//   for (let k = 0; k <= 2 * i - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
// document.write("</pre>");

// let a = 10;
// try{
//   document.write(a)
//   throw('bag')
// }
// catch(e){
//   console.log(e);
// }
// finally{
//   console.log('test');
// }

// let num = 5;
// let fact = 1;
// for(let i = 1; i<=num; i++){
//   fact = fact * i;
//   if(i == num){
//     console.log(fact);
//   }
// }

// function myFunction() {
//   let inpObj = document.getElementById("id1");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//   }
// }

// let ages = [12,37,18,90];
// console.log(ages.every(checkAge));
// function checkAge(age) {
//     return age < 100;
// }

// let header = 'Templates Literates';
// let tags = ['a','b','c'];
// let z = `<h5>${header}</h5>`;
// for (let x of tags){
//     z += `<li>${x}</li>`;
// }
// document.write(z);
// console.log(z);

// class Car {
//     constructor(name,year) {
//         this.name = name;
//         this.year = year;
//     }
// }
// let myCar1 = new Car('ford', 2015);
// let myCar2 = new Car('audi', 2020);
// console.log(myCar1.name + ' ' + myCar2.year);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear()-this.year;
//   }
// }
// let myCar = new Car('ford', 2020);
// console.log(myCar.age());

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }
// let date = newDate();
// let year = date.getFullYear()
// console.log(myCar.age(year));

// let fruits = ['banana','apple','mango'];
// let txt = fruits.constructor;
// console.log(txt);

// let fruits = ['banana','apple','mango'];
// let f = fruits.entries();
// for(let x of f) {
//   console.log(x.length);
//   document.write(x + '</br>')
// }

// let ages = [10,15,35,57];
// console.log(ages.every(checkAge));
// function checkAge(ages) {
//   return ages > 100;
// }

// let survey = [
//   { name: "stave", answer: "yes" },
//   { name: "peter", answer: "yes" },
//   { name: "jessica", answer: "yes" },
//   { name: "elaine", answer: "yes" },
// ];
// console.log(survey.every(isSameAnswer));
// function isSameAnswer (el,index,arr){
//   if (index === 0){
//     return true;
//   }
//   else{
//     return (el.answer === arr[index -1].answer);
//   }
// }

// let ages = [32, 33, 12, 40];
// function checkAge(age) {
//   return age > document.getElementById("exampleInputEmail1").value;
// }
// function myFunction() {
//   document.getElementById("test").innerHTML = ages.every(checkAge);
// }

// let fruits = ['banana','orange','apple'];
// console.log(fruits.fill('kiwi',2,3));

// let myArr = ["banana", "orange", "apple"];
// let newArr = myArr.flat();
// console.log(newArr);

// let txt = '';
// let fruits = ["banana", "orange", "apple"];
// fruits.forEach(myFunction);
// document.write(txt)
// function myFunction(item,index) {
//     txt += index + ': ' + item + '<br>';
// }

// let numbers = [1,2,3,4,5];
// numbers.forEach(function (number, index, array){
//     array[index] = number * 2;
// })
// console.log(numbers);

// let txt = 'abxvdf';
// let myArr = Array.from(txt);
// console.log(myArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);

// let person = {firstName: 'John',lastName: 'Doe',age: 30};
// let keys = Object.keys(person);
// console.log(keys);

// function getOwnProperties(obj) {
//   return Object.keys(obj);
// }
// let car = {make: 'Toyota',model: 'Camry',year: 2023};
// let carProperties = getOwnProperties(car);
// console.log(carProperties);

// let numbers = [4, 9, 16, 25];
// console.log(numbers.map(Math.sqrt));

// let numbers = [65, 44, 12, 4];
// let newArr = numbers.map(myFunction);
// function myFunction(number) {
//   return number * 10;
// }
// console.log(newArr);

// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });
// console.log(doubledNumbers);

// Array.prototype.myUcase = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myUcase();
// console.log(fruits);

// let numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc));
// function myFunc(total, num) {
//   return total + num;
// }

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);

// let numbers = [8, 3, 11, 6, 2];
// let maxNumber = numbers.reduce((max, currentValue) => {
//   if (currentValue < max) {
//     return currentValue;
//   } else {
//     return max;
//   }
// });
// console.log(maxNumber);

// let numbers = [175, 50, 25];
// console.log(numbers.reduceRight(myFunc));
// function myFunc(total, num) {
//   return total - num;
// }

// let numbers = [1, 2, 3, 4, 5];
// let concatenated = numbers.reduceRight((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, "7");
// console.log(concatenated);

// let numbers = [1, 2, 3, 74, 5];
// console.log(numbers.some(check));
// function check(numbers) {
//   return numbers > 18;
// }

// let numbers = [1, 2, 3, 74, 5];
// console.log(numbers.toSorted());

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let txt = fruits.toString();
// console.log(typeof[fruits]);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let myArray = fruits.valueOf();
// console.log(myArray);

// let bool = false;
// let text = bool.constructor;
// console.log(text);



// Boolean.prototype.myColor = function () {
//   if (this.valueOf() == false) {
//     return "black";
//   } else {
//     return "white";
//   }
// };
// let a = true;
// console.log(a.myColor());



// try {
//   allert("Welcome guest!");
// } catch (err) {
//   console.log(err.name + ' ' + err.message);
// }



// let num = 1;
// try {
//   num.toPrecision(500);
// } catch (err) {
//   console.log(err.name);
// }



// let num = 'l';
// let x = num.toUpperCase();
// console.log(x);



// class car {
//   constructor(brand) {
//     this.carName = brand;
//   }
// }
// myCar = new car('ford');
// console.log(myCar.carName);



// class car {
//   constructor(brand) { 
//     this.carname = brand;
//   }
//   present(){
//     return + this.carname;
//   }
// }
// class Model extends car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + " " + this.model;
//   }
// }
// myCar = new Model('ford', 'mustang');
// console.log(myCar.show());



// let myWindow;
// function openWin() {
//   myWindow = window.open("", "myWindow", "width=400,height=200");
// }
// function closeWin() {
//   if (myWindow) {
//     myWindow.close();
//   }
// }
// function checkWin() {
//   if (!myWindow) {
//     text = "It has never been opened!";
//   } else {
//     if (myWindow.closed) {
//       alert("It is closed.");
//     }
//     else {
//       alert("It is open.");
//     }
//   }
// }  



let x = 5;
let y = 5;
const myObj = { firsname: "John", lastname: "Doe" };
console.assert(x + y == 11, myObj);