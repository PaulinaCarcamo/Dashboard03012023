//We have to write a function, say findPositions() that takes in two arrays as argument. And it should return an array of the indices of all the elements of the second array present in the first array.

// const values = ['michael', 'jordan', 'jackson', 'michael', 'usain',
// 'jackson', 'bolt', 'jackson'];
// const queries = ['michael', 'jackson', 'bolt'];
// const findPositions = (first, second) => {
//    const indicies = [];
//    first.forEach((element, index) => {
//       if(second.includes(element)){
//          indicies.push(index);
//       };
//    });
//    return indicies;
// };
// console.log(findPositions(values, queries));

//-----------------------------------------------------------------------------------

// const findData = mrfData.Results.filter(element => element.Country === "GERMANY");
// console.log(findData);
// const findCount = findData.length;
// console.log(findCount);

//-----------------------------------------------------------------------------------

//get the values of the array at these indexes

// arr = ["a","b","c","d"]
// indexes = [0,2]
// const res = indexes.map(e => arr[e])
// console.log(res)

//-----------------------------------------------------------------------------------

// //GETTING COMPANIES BY INDEX, FIND POSITIONS(TRUCKS AND QUERIES)
// //NOT INCLUDING NULL VALUES, SLICE TO SET ASIDE UNDEFINED VALUES
// // const index = [0, 3, 28, 32, 38, 39, 49, 51, 54, 55, 56, 58, 77, 78, 82, 86];
// const companies = mrfData.Results.map((item) => item.Country)
//     .filter((item) => item !== null)
// const index = findPositions(trucks, queries)
// const countriesByIndex = index.map(element => companies[element]).slice(0, 14)
// setCompanies(countriesByIndex);
// // console.log(countriesByIndex);

//--

// const array = trucksByCountry;
// const demo = {};
// for (let a = 0; a < array.length; a++) {
//     const b = array[a];
//     if (demo[b]) {
//         demo[b] += 1;
//     } else {
//         demo[b] = 1;
//     }
// }
// console.log(demo);
// setTrucks(demo)