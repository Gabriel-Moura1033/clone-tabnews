function status(request, response) {
  response.status(200).json({ chave: "média" });
}

export default status;
