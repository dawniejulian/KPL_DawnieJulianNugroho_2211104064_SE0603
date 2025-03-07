let globalVariable = "Dawnie Julian";

function getMyIdentity() {
    let localVariable = 2211104064;
    console.log(`Nama saya ${globalVariable} nim ${localVariable}`);
}

console.log(globalVariable);
// console.log(localVariable); // Variabel local tidak dapat diakses di luar fungsi

getMyIdentity();
