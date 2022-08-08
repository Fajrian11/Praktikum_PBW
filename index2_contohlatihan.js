const app = document.getElementById("app");
const output1 = document.getElementById("output-1");
const btnNama = document.getElementById("btn-2");
const input = document.getElementById("input");
const output2 = document.getElementById("output-2");
// const namaWarna = warna

// const generateNama = () => {
//     if (input.value < 20) {
//         output.innerText = "Anak Kecil";
//     }else if(input.value < 30) {
//         output.innerText = "Remaja";
//     }else{
//         output.innerText = "Tua";
//     }
// }
const generateWarna = () => {
        if (input.value == input.value) {
            output2.innerText = input.value.toLowerCase();
            output2.style.color = "red";
            output1.style.color = "red";
            if(output2.value = "merah"){
                output1.style.color = "green";
            }
        }
    }

btnNama.addEventListener("click", generateWarna);
