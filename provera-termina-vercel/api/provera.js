export default async function handler(req, res) {
  const { datum } = req.query;
  if (!datum) {
    return res.status(400).send("Greška: Niste prosledili datum.");
  }

  try {
    const googleUrl = `https://script.google.com/macros/s/AKfycbx_GMxyIMTS8Vsv9u9lvB5TKqN5YNi7VmqtRe01LTLGO-KTlrFF4tOHbizEEUacGIDt/exec?datum=${encodeURIComponent(datum)}`;
    const response = await fetch(googleUrl);
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Došlo je do greške: " + err.message);
  }
}
