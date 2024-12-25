// ============================================================
//1-masala
// Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getAverageAge(arr) {
//   let ages = 0;
//   for (let i = 0; i < arr.length; i++) {
//     ages += arr[i].age;
//   }
//   return ages / arr.length;
// }
// console.log(getAverageAge(people));

// ============================================================
// 2-masala
// Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function isPersonMarried(arr, age) {
//   let obj = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].age > age ? (arr[i].isMerried = true) : (arr[i].isMerried = false);
//     obj.push(arr[i]);
//   }
//   return obj;
// }
// console.log(isPersonMarried(people, 25));

// ============================================================
// 3-masala
// Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)
// Output: ["Temur", "Sardor"]

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getNameMaxMinAge(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   if (arr.length === 0) return null;

//   for (let i = 0; i < arr.length; i++) {
//     if (max.age < arr[i].age) {
//       max = arr[i];
//     }
//     if (min.age > arr[i].age) {
//       min = arr[i];
//     }
//   }
//   return [max.name, min.name];
// }
// console.log(getNameMaxMinAge(people));

// ============================================================
// 4-masala
// Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.
// Input: {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}

// Yecha olmadim va bu mavzularni o'tmagan ham ekanmiz!

// ============================================================
// 5-masala
// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
// Input: obj1 = { a: 3, b: 10, c: 5, d: 7 };
// obj2 = { a: 10, d: 4, e: 6, f: 15 };
// Output: obj = {b: 10, c: 5, e: 6, f: 15};

// Yecha olmadim va bu mavzularni o'tmagan ham ekanmiz!


// ============================================================
// 6-masala
// Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

// Input:
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// for (let [key, value] of Object.entries(me)) {
//   console.log(`${key}: ${value}`);
// }

// ============================================================
// 7-masala
// Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)
// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// let n = 5;
// let answer = {};

// for (let i = 1; i < n; i++) {
//   answer[i] = i ** 2;
// }
// console.log(answer);

// ============================================================
// 8-masala
// 7-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())

// let ansert = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };
// let objKeys = 0;
// let objValues = 0;

// for (let key in ansert) {
//   objKeys += parseInt(key);
//   objValues += ansert[key];
// }
// console.log(`Keys: ${objKeys}
// ${objValues}`);

// ============================================================
// 9-masala
// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)
// Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}

// let n = 5;
// let answer = {};
// let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// for (let i = 0; i < arr.length; i++) {
//   answer[arr[i]] = arr[i].length;
// }

// console.log(answer);

// ============================================================
// 10-masala
// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())
// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

// let answer = 0;
// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

// for (let key in obj) {
//   answer += obj[key];
// }

// console.log(answer);
