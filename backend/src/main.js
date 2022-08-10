import  express from "express";

const app = express();

app.use(express.json());

const port = 7000;

app.get("/", (req, res) => {
    res.send({nama:"Fajrian Nugraha"});
});


app.get("/makanan", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Spagetti",
            rasa: "Balado",
        },
        {
            id: 2,
            nama: "Burger",
            rasa: "Pedas",
        },
    ]);
});

app.get("/minuman", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Wishky",
            warna: "Kuning",
        },
        {
            id: 2,
            nama: "Tuwak",
            warna: "Putih pudar",
        },
    ]);
});

app.get("/create", (req, res) => {
    res.send({nama: req.body});
});

app.listen(port, () => {
    console.log(`aplikasi nya jalan di port ${port}`);
});
