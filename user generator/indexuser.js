// const app = document.getElementById("app");
// const output1 = document.getElementById("output-1");
// const btnNama = document.getElementById("btn-2");
// const input = document.getElementById("input");
// const output2 = document.getElementById("output-2");
// // const namaWarna = warna

// // const generateNama = () => {
// //     if (input.value < 20) {
// //         output.innerText = "Anak Kecil";
// //     }else if(input.value < 30) {
// //         output.innerText = "Remaja";
// //     }else{
// //         output.innerText = "Tua";
// //     }
// // }
// const generateWarna = () => {
//         if (input.value == input.value) {
//             output2.innerText = input.value.toLowerCase();
//             output2.style.color = "red";
//             output1.style.color = "red";
//             if(output2.value = "merah"){
//                 output1.style.color = "green";
//             }
//         }
//     }

// btnNama.addEventListener("click", generateWarna);

// const { createApp, ref, onMounted } = Vue;

// const app = createApp({
//     setup() {
//         // const kegiatan = ref("");
//         // const dataKegiatan = ref(["makan", "minum"]);
//         // const modeUpdate = ref(false);

//         // const tambahKegiatan = () => {
//         //     dataKegiatan.value.push(kegiatan.value);
//         //     kegiatan.value = "";
//         //     modeUpdate.value = false;
//         // };

//         // const hapusKegiatan = (index) => {
//         //     dataKegiatan.value.splice(index, 1);
//         // };

//         // const getDataKegiatan = (kegiatan) => {
//         //     modeUpdate.value = true;
//         //     kegiatan.value = kegiatan;
//         // };

//         // const updateKegiatan = (index) => {
//         //     modeUpdate.value = true;
//         //     dataKegiatan.value[index] = kegiatan.value;
//         //     modeUpdate.value = false;
//         // }

//         // return {
//         //     modeUpdate,
//         //     kegiatan,
//         //     dataKegiatan,
//         //     tambahKegiatan,
//         //     hapusKegiatan,
//         //     updateKegiatan,
//         //     getDataKegiatan,
//         // };

//         const dataCovid = ref({});
//         const orangSembuh = ref("");
//         const orangMeninggal = ref("");
//         const orangDirawat = ref("");
//         const url = "https://data.covid19.go.id/public/api/update.json";

//         const getDataCovid = async () => {
//             const res = await axios.get(url);
//             dataCovid.value = res.data.update;
//             orangSembuh.value = dataCovid.value.penambahan.jumlah_sembuh;
//             orangMeninggal.value = dataCovid.value.penambahan.jumlah_meninggal;
//             orangDirawat.value = dataCovid.value.penambahan.jumlah_dirawat;
//         };

//         onMounted(async  () => {
//             await getDataCovid();
//         });

//         return {
//             getDataCovid,
//             dataCovid,
//             orangSembuh,
//         };
//     },
// });

// app.mount("#app");

const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const url = "https://randomuser.me/api/";
        const profileUser = ref("");
        const namaUser = ref(""); 
        const namaUserLast = ref(""); 

        const generatorUser = async () => {
            const resUser = await axios.get(url);
            namaUser.value = resUser.data.results[0].name.first;
            namaUserLast.value = resUser.data.results[0].name.last;
            profileUser.value = resUser.data.results[0].picture.large;
        }

        return {
            generatorUser,
            profileUser,
            namaUser,
            namaUserLast,
        };
    },
});

app.mount("#app");
