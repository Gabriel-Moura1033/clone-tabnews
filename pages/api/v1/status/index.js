import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 11 + 1 as NUMBER;");
  console.log(result.rows);
  response.status(200).json({ chave: "teste" });
}

export default status;
