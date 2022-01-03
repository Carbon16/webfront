function LGS() {
  const LGS = await NAMESPACE.get("LGS")
  if (value === null) {
    return new Response("Value not found", {status: 404})
  }
  document.getElementById("LGS").innerHTML = value
};