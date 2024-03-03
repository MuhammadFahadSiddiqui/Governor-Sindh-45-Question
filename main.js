// //QUESTION 2
// let personName : string = "Eric";
// console.log(`Hello ${personName}, would you like to
// learn some python today?`);
// //QUESTION 3
// let personName : string = "Fahad Siddiqui";
// //inlowercase
// console.log ("lowercase :", personName.toLowerCase());
// //inUppercase
// console.log("uppercase :", personName.toUpperCase());
// //intitlecase
// console.log("Titlecase :", personName.replace(/\b\w/g,c=> c.toUpperCase()));
// //QUESTION 4
// let quote : string = 'A person who never made a mistake never triesd anything new.';
// let author : string ="Albert Einstein";
// console.log(`${author} once said ,"${quote}"`);
// //QUESTION 5
// let famousPerson : string = "Albert Einstien";
// let message : string = (`${famousPerson} once said ,"${quote}"`);
// console.log (message);
// //QUESTION 6
// let personName : string = "\t\n John Doe \n\t"
// console.log ("Original :", personName);
// console.log ("stripped :", personName.trim());
// //QUESTION 7OR8
// console.log(5+3);
// console.log(10-2);
// console.log(2*4);
// console.log(16/2);
// //QUESTION 9
// let favoriteNumber : number=3;
// console.log(`My favorit number is ${favoriteNumber}.`);
// //QUESTION 10
// //Author : {Fahad Siddiqui}
// //Date : {Friday,Feburary,16,2024}
// //task 9 print my favorite number :
// let favoriteNumber : number = 24;
// console.log(`My favorite number is ${favoriteNumber}.`);
// //QUESTION 11
// let names : string [] = ["Ali","Zayan","Saad","Ayan"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// //QUESTION 12
// let names : string [] = ["Ali","Zayan","Saad","Ayan"];
// let message : string = "Do you like to play cricket?";
// console.log(names[0]+" "+message);
// console.log(names[1]+" "+message);
// console.log(names[2]+" "+message);
// console.log(names[3]+" "+message);
// //QUESTION 13
// let transportation : string [] = ["Rolls Royce","Audi","Mercedes"];
// transportation.map((items) => console.log(`I would like to own a ${items}`));
// //QUESTION 14
// let guestArr : string [] = ["Ali","zayan","Saad"];
// guestArr.map((items)=>(console.log(`Dear ${items}, you are invited 
// to the dinner`)));
// //QUESTION 15
// let guestArr : string [] = ["Ali","zayan","Saad","Ayan"];
// //cannotAttend:
// let canNotAttend : string = "Ayan";
// console.log(canNotAttend+" "+ `can not attend the dinner`);
// //newGuest:
// let newGuest : string = "Wajiha";
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((items)=>(console.log (`Dear ${items},you are invited 
// to the dinner. `)));
// //QUESTION 16
// let guestArr : string [] = ["Ali","zayan","Saad","Wajiha"];
// //cannotAttend:
// let canNotAttend : string = "Saad";
// console.log(canNotAttend+" "+ `can not attend the dinner`);
// //newGuest:
// let newGuest : string = "Ahmed";
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((items)=>(console.log (`Dear ${items},I found a bigger dinner table so I am invited more people. `)));
// //Begining:
// let guestBeg : string = "zayan";
// guestArr.unshift(guestBeg);
// console.log(guestArr);
// //Middle:
// let middleGuest : string = "Hamza";
// let middleIndex=guestArr.length/2
// guestArr.splice(middleIndex,0,middleGuest);
// console.log(guestArr);
// //append:
// guestArr.push("Noor");
// console.log(guestArr);
// guestArr.map((items)=>(console.log(`Dear ${items}, you are invited to the more category on dinner.`)));
// //QUESTION 17
// let guests : string [] =["Wajiha","Noor","Hamza","Ali","Ahmed"];
// console.log (`Due to limited space only two people can be invited for dinner.`);
// //removingGuest:
// while (guests.length > 2){
// const removeGuest = (guests.pop());
// console.log (`sorry ,${removeGuest}, you are no longer invited to dinner.`)};
// guests.forEach((guest)=>{console.log(`Dear ${guest}, you are still invited to dinner.`);});
// guests.pop();
// guests.pop();
// console.log("Final guest list:", guests);
// //QUESTION 18
// let placeToVisit :string []=["Pakistan","Saudia arabia","Palestine","Turkey"];
// console.log("OriginalOrder :",placeToVisit);
// console.log("Alphabeticorder:",[...placeToVisit].sort().reverse());
// console.log("Original Order after reverse sorting:",placeToVisit); 
// placeToVisit.reverse();
// console.log("Reversed order:",placeToVisit);
// placeToVisit.reverse();
// console.log("Back to original order :",placeToVisit);
// placeToVisit.sort();
// console.log("sorted in alphabetical ordera;",placeToVisit);
// placeToVisit.sort((a,b) => b.localeCompare(a));
// console.log("sorted in reverse alphabetic order:",placeToVisit);
// //QUESTION 19
// let invitations : string [] = ["Wajiha","Noor","Hamza"];
// let count_invitations : number = invitations.length
// console.log(`${count_invitations} people will come to the dinner`);
// //QUESTION 20
// let language : string [] = ["Urdu","English","persian","Arabic"];
// console.log("list of language:");
// console.log(language); 
// //QUESTION 21
// let person : {name : string , fname : string , age : number} =
// { name : "Fahad Siddiqui" , fname : "male" , age : 21};
// console.log(person);
// //QUESTION 22
// const days : string [] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(days{7});
// console.log(days [6]);
// //QUESTION 23
// let car = "subaru";
// console.log("is car == 'subaru'? predict true");
// console.log(car == 'subaru');
// console.log("is car != 'honda city'? predict true");
// console.log(car != 'honda city');
// console.log("is car == 'Subaru'? predict false");
// console.log(car == 'Subaru');
// console.log("is car == 'SUBARU'? predict false");
// console.log(car == 'SUBARU');
// console.log("is car.length == 3? predict false");
// console.log(car.length == 3);
// console.log("is car.length != 10? predict true");
// console.log(car.length != 10);
// console.log("is 10 > 55 ? predict false");
// console.log(10 > 55);
// console.log("is 3 <= 2 ? predict false");
// console.log(3 <= 2);
// console.log("is 72 >= 85 ? predict false");
// console.log(72 >= 85);
// console.log("is car == 'subaru' && car.length == 6? predict true ");
// console.log(car == 'subaru' && car.length == 6);
// //QUESTION 24
// let name_1 : string = "fahad"
// let name_2 : string = "fahad siddiqui"
// let name_3 : string = "hadiqa shahid"
// if (name_1 == name_3){
//    console.log("names are equal")
// }else{ 
//    console.log("names are not equal")
// }
// if (name_1 != name_2){
//    console.log("names are equal")
// }else{ 
//    console.log("names are not equal")
// }
// if (name_1 != name_3){
// console.log("names are equal")
// }else{ 
//    console.log("names are not equal")
// }
// let age_1 : number = 18
// let age_2 : number = 69
// if (age_1 == 18){
//    console.log("eligible for vote")
// }
// if (age_1 == 22){
//    console.log("eligible for vote is older category")
// }
// //equal not equal:
// if (age_1 <= age_2)           //less
// {console.log("younger")}
// if (age_2 >= age_1)           //greater
// {console.log("older")
// }
// //operator:
// if (age_1 == 18 && age_2 == 22){
//    console.log("person is eliginle not for vote")
// }
// if (age_1 == 18 || age_2 != 22){
//    console.log("person is eligible not for vote")
// }
// //array:
// let country : string [] = ["Pakistan","Saudia arabia","Palestine","Turkey"]
// if (country.includes("Pakistan")){
//    console.log("Pakistan is in country list")
// }   
// if(!country.includes("America")){
//    console.log("America is not include in an array")
// }
// //QUESTION 25
// let alien_color = "green";
// if (alien_color == "green")
// console.log("You earn 5 points")
// let alien_color : string = "red"
// if (alien_color == "green")
// console.log("no out put");
// //QUESTION 26
// let alien_color : "green"
// if (alien_color == "green"){
//    console.log ("Player just earned 5 point for shooting the alien")
// } else{
//    console.log("Player just earned 10 point")
// }
// let alien_color : "red"
// if (alien_color == "green"){
//    console.log ("Player just earned 5 point for shooting the alien")
// } else{
//    console.log("Player just earned 10 point")
// }
// //QUESTION 27
// let alien_color : string = "yellow"
// if (alien_color == "green"){
//    console.log ("5 point")
// } else if (alien_color == "yellow"){
//    console.log("10 point")
// } else{
//    console.log ("15 point")
// }
// //QUESTION 28
// let age : number = 81
// if (age <= 2){
//    console.log ("You are a baby")
// } else if (age < 4){
//    console.log ("You are a toddler")
// } else if (age < 13){
//    console.log ("You are kid")
// } else if (age < 20){
//    console.log ("YOu are teenage")
// } else if (age <65){
//    console.log ("You are adult")
// } else if {
//    console.log ("You are older")
// }
// //QUESTION 29
// let favorit_fruit : string [] = ["Kivi","Orange","Apple","Berry","Peach"]
// if (favorit_fruit.includes ("Kivi")){
//    console.log("Kivi")
// }
// if (favorit_fruit.includes ("Apple")){
//    console.log("Apple")
// }
// if (favorit_fruit.includes ("Orange")){
//    console.log("Orange")
// }
// if (favorit_fruit.includes ("Berry")){
//    console.log("You are really like banana")
// }
// if (favorit_fruit.includes ("Peach")){
//    console.log("You are really like banana")
// }
// //QUESTION 30
// const userName : string [] = ["Admin","user1","user2","user3","user4"];
// userName.forEach(userName => {console.log (`Hello ${userName}! Welcome back to the website.`)})
// userName.forEach(userName => {
//    if (userName === 'Admin') {
//       console.log(`Hello admin, would you like to see a status report?`);
//    } else {
//       console.log(`Hello ${userName}, thank you for logging in again.`);
//    }
// });
// //QUESTION 31
//  let users : string [] = ["admin","user1","user2","user3","user4"];
//  if (users.length === 0) {
//    console.log ("We need to find some users!")
//  } else {
//    for (let user of users){
//    if (user === "admin"){
//       console.log ("Hello admin, would you like to see a status report?")
//    } else {
//       console.log (`Hello ${user} , thank you for logging in again`)
//    }
//    }
//  }
//  users = []
//  if (users.length === 0){
//    console.log("We need to find some users!")
//  }
// //QUESTION 32
// const current_users = ['Saad Noman','Yousuf Bilal','Ali Haider','Ayan'];
// const new_users = ['Zayan','Ahmed','Bilal','Abdullah','Hasan'];
// const current_users_lower = current_users.map(user => user.toLowerCase());
// for (let new_user of new_users) {
//    if (current_users_lower.includes(new_user.toLowerCase())){
//       console.log(`The username '${new_user}' is not available .Please enter a new username.`);
// } else {
//       console.log (`The user'${new_user}' is available .`)
//    }}
// //QUESTION 33
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) {
//           if (number === 1) {
//    console.log (`${number}st`);
//    } else if (number === 2) {
//       console.log (`${number}nd`);
//    } else if (number === 3) {
//       console.log (`${number}rd`);
//    } else {
//       console.log (`${number}th`);
// }
// }
// //QUESTION 34
// const favoritePizzas = ["Pepperoni","Margherita","BBQ Chiken"];
// for (let pizza of favoritePizzas) {
//  console.log (`I like ${pizza} pizza.`);
// }
// console.log("I really love pizza!");
// //QUESTION 35
// const animals = ["Parrot","Goat","Rabbit"];
// for (let animal of animals){
//    console.log (`I like ${animal} as a pet`); 
// }
// console.log ("A parrot would make a great pet.");
// console.log ("A goat is a popular choice for a companion animal");
// console.log ("A rabbit is known for its cute and fluffy appearance");
// //QUESTION 36
// const make_shirt = ['S','M','L','XL','XXL'];
// for (let shirt of make_shirt) {
//    console.log (`summarized the ${shirt} size of shirt.`);
// }
// //QUESTION 37
// const large_shirt = ['L','M'];
// for (let shirt of large_shirt){ 
// console.log (`I love typescript`);
// }
// console.log (`Make a ${large_shirt} shirt by default`);
// console.log (`And ${large_shirt} shirt size is different`);
// QUESTION 38
// function describe_city (city,country = 'USA'){
//    console.log (`${city} is in ${country}.`);
// }
//   //calling the function for 3 different cities:
// describe_city('Karachi','Pakistan');
// describe_city('New York');
// describe_city('London','United Kingdom');
// //QUESTION 39
// function city_country (city,country){
//    return city + ' , ' + country;
// }
//      //calling the function with 3 city_country pairs :
//   let location1 = city_country('Lahore','Pakistan');
//   let location2 = city_country('Paris','France');
//   let location3 = city_country('Tokyo','Japan');
//     //printing the formate string:
//     console.log(location1);
//     console.log(location2);
//     console.log(location3);
// //QUESTION 40
// function makeAlbum(artistName, albumTitle, numTracks) {
//     if (numTracks === void 0) { numTracks = null; }
//     var album = {
//         artist: artistName,
//         title: albumTitle
//     };
//     if (numTracks !== null) {
//         album.tracks = numTracks;
//     }
//     return album;
// }
// //creating 3 object represent different album
// var album1 = makeAlbum("Artist 1", "Album 1");
// var album2 = makeAlbum("Artist 2", "Album 2", 12);
// var album3 = makeAlbum("Artist 3", "Album 3");
// //printing the album information
// console.log(album1);
// console.log(album2);
// console.log(album3);
// //QUESTION 41
// let magicians = ['Merlin','Gandalf','Houdini'];
// function make_great(magicians){
//    return magicians.map(magicians => magicians + ' the Great');
// }
// function show_magicians(magicians) {
//    magicians.forEach(magicians => 
//       console.log (magicians));
// }
//          //Modify the error of magicians
//   magicians = make_great(magicians);
//         //display the modify list of magicians
//   show_magicians(magicians);
// //QUESTION 42
// let magicians = ['Samori jadogar','Sawitri maai','Junaid bangali'];
// function make_great(magiciansArray){
//    return magiciansArray.map(magician => magician + 'the Great');
// }
// function show_magicians(magiciansArray){
//    magiciansArray.forEach(magician => console.log (magician));
// }
//     //modify the array of magicians
// magicians = make_great(magicians);
//     // display the modified list of magicians
// show_magicians(magicians);
// //QUESTION 43
//     //ORIGINAL array of magicianas'name
//   let magicians = ['Samori jadogar','Sawitri maai','Junaid bangali'];
//     //FUNCTION to add great to each magicians name
//   function make_great(magiciansArray){
//   let magicians = magiciansArray.map(magician => 'Great' + magician);
//   return greatMagicians;  
// }
//    //function to magicians , name
//    function show_magicians (magiciansArray){
//    magiciansArray.forEach(magician => console.log (magician));
//    }
//      //creat a copy of the origiNAL array
// let originalMagicians = [...magicians];
//      //call make great() with a copy of the array
// let greatMagicians = make_great([...magicians]);
//      //show the original and modified array
// console.log ("Original Magicians :");
// show_magicians (originalMagicians);
// console.log ("\nMagicians with 'Great' added:");
// show_magicians(greatMagicians);
// //QUESTION 44
// function makeSandwich (...items){
//    console.log("Sandwich Order:");
//    console.log("Bread");
//    for (let item of items) {
//       console.log(item);
//    }
//    console.log("Bread");
//    console.log("----------------");
// }
//    // calling the function 3 time with different number of argument
// makeSandwich('Cheese','Tomato','Lettuce');
// makeSandwich('Turkey','Bacon');
// makeSandwich('Ham','Swiss','Mustard','Pickles'); 
// //QUESTION 45
// function createCar (manufacturer, modelName, ...additionalInfo){
// let car = {
//    manufacturer: manufacturer,
//    modelName : modelName
// };
// additionalInfo.forEach(info => {
//    let key = info[0];
//    let value = info[1];
//    car [key] = value ;
// });
// return car;
// }
//    //calling the function with required information and additional name-value pairs
// let carInfo = createCar('Toyota','Camry',['color','blue'],['year',2022]);
//    //printing the car obj to ensure all information was stored correctly 
// console.log (carInfo);
