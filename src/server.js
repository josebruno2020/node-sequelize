import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

app.listen(port, () => console.log(`server listen at http://localhost:${port}`));

app.get('/', (req, res) => {
    return res.status(200).json({mensagem: "teste de rota"});
});

export default app;