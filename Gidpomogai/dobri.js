// let numberOfFilms;


// const personlMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actor: {},
//     genres: [],
//     private: false,
//     start: function(){
//         numberOfFilms = prompt("Сколько вы посмторели сери лунтика?");
//     },
    
//     rememberMyFilms: function() {
//         let i =0;
//         while (i < 3) {
//             let OfFilms = prompt("kаkie вы посмторели сери лунтика?");
//         let Ofms = prompt("насколько вы бы оценили работу пылесоса bosch?");
//             if(OfFilms != null && OfFilms != '' && Ofms != null && Ofms != '' ) {
//                 personlMovieDB.movies[OfFilms] = Ofms;
//             } else {
//                 console.log("Error");
//                 i--;
//             }
//             i++;}
//     },
//     detectPersonalMovie: function(){
//         if (numberOfFilms <10){
//             alert("вы ниче не смотрели");
//         }
//         if (numberOfFilms >= 10 && numberOfFilms < 30){
//             alert("вы чето смотрели");
//          }
//          if (numberOfFilms >30){
//             alert("вы много смотрели");
//          }
//      else{
//          alert("вы ержан?")
//      }
//     },
//     showMyDB: function(){
//         if (personlMovieDB.private == false){
//     console.log (personlMovieDB);
//         } else{
//             console.log ("Error");  
//         }
//     }
// }
// personlMovieDB.start()



// personlMovieDB.rememberMyFilms()

// personlMovieDB.detectPersonalMovie()
// personlMovieDB.showMyDB()
let massivniy = [9, 6, 8, 5600];
let min = 0;
let max = 0;
for ( let i = 0; i < massivniy.length; i++) {
    if(min > massivniy[i]) {
        min = massivniy[i];
    } else if (max < massivniy[i]) {
        max = massivniy[i];
    }
}

console.log(min);
console.log(max);