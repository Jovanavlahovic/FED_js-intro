let input = [1, 2, 3, 4, 5];

let output = input.map(element => Math.sqrt(element));
console.log(output);


let input1 = [2,3,4];

let output1 = input1.reduce((prevVal, curr) => prevVal*curr);
console.log(output1);

let input2 = ['x','y','z'];

let output2 = input2.reduce((prev, curr) => prev+curr);
console.log(output2);

let input3 = ['Steve', 'Sally', 'George', 'Gina'];

let output3 = input3.reduce((prevVal, curr, index, array) => {
    if(index == 1){
        return "Congrats " + prevVal + ", " + curr;
    } 
    if(index == array.length-1){
        return prevVal + ", " + curr + "!";
    }
    else{
        return prevVal + ", " + curr;
    } 
});
console.log(output3);


input: var items = [ { name: 'ball', points: 2 },
						 { name: 'coin', points: 3 },
                         { name: 'candy', points: 4} ];
                         
var output4 = items.map(element => element.name);
console.log(output4);


var vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 }
  ];

var output5 = vehicles.filter(elem => elem.model[0] == "C");

console.log(output5);

var niz = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function upit(niz, upit){
    return niz.filter(el => el.toLowerCase().includes(upit.toLowerCase()));
}

console.log(upit(niz, "ap"));

function izracunajProsecnuVrednost(niz){
    var suvPrices = niz.filter(el => el.type == "suv").map(el => el.price);
    var sum = suvPrices.reduce((curr, prev) => curr+prev);

    return sum/suvPrices.length;
}

console.log(izracunajProsecnuVrednost(vehicles));

let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];

let rez = n.filter(el => el%3 == 0 && el > 0);

console.log(n.filter(el => el%2 == 0 && el >0));


let filmovi = [ 
    {
        id:19404,
        original_title:"दिलवाले दुल्हनिया ले जायेंगे",
        title:"Dilwale Dulhania Le Jayenge",
        release_date:"1995-10-20",
        rating:9.1
    },
    {
        id:278,
        original_title:"The Shawshank Redemption",
        title:"The Shawshank Redemption",
        release_date:"1994-09-23",
        rating:8.6
    },
    {
        id:238,
        original_title:"The Godfather",
        title:"The Godfather",
        release_date:"1972-03-14",
        rating:8.6
    },
    {
        id:372058,
        original_title:"君の名は。",
        title:"Your Name.",
        release_date:"2016-08-26",
        rating:8.6
    },
    {
        id:324857,
        original_title:"Spider-Man: Into the Spider-Verse",
        title:"Spider-Man: Into the Spider-Verse",
        release_date:"2018-12-07",
        rating:8.5
    },
    {
        id:424,
        original_title:"Schindler's List",
        title:"Schindler's List",
        release_date:"1993-12-15",
        rating:8.5
    },
    {
        id:240,
        original_title:"The Godfather: Part II",
        title:"The Godfather: Part II",
        release_date:"1974-12-20",
        rating:8.5
    },
    {
        id:129,
        original_title:"千と千尋の神隠し",
        title:"Spirited Away",
        release_date:"2001-07-20",
        rating:8.5
    },
    {
        id:497,
        original_title:"The Green Mile",
        title:"The Green Mile",
        release_date:"1999-12-10",
        rating:8.4
    },
    {
        id:637,
        original_title:"La vita è bella",
        title:"Life Is Beautiful",
        release_date:"1997-12-20",
        rating:8.4
    }];

    var rez1 = filmovi.filter(el => el.rating >= 8.5).map(el => el.title);
    console.log(rez1);

var rez2 = filmovi.map(el => ({title: el.title, release_date: el.release_date})
);
console.log(rez2);

var zbir = filmovi.reduce((prevVal,{rating}) => prevVal + rating, 0);
console.log(zbir);
console.log((zbir/filmovi.length).toFixed(2));


