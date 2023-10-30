function status(request, response) {
  response.status(200).json({ quote: "I'm Douglas!" });
}
export default status;
