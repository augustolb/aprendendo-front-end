// Exercicio 1
// function getAdmins(map) {
//     let admins = []
//     for([key, value] of map) {
//         if (value === `Admin`) {
//             admins.push(key);
//         }
//     }
//     return admins;
// }

// const usuarios = new Map();

// usuarios.set(`Luiz`, `Admin`);
// usuarios.set(`Sthephany`, `Admin`);
// usuarios.set(`Jorge`, `User`);
// usuarios.set(`Natalia`, `Admin`);

// console.log(getAdmins(usuarios));



// Exercicio 2
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
    const mySet = new Set(arr)

    return [...mySet]
}

console.log(valoresUnicos(meuArray))