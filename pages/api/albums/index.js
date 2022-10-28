import axios from "axios";

const apiKey = process.env.LASTFM_API_KEY;
export default async function handler(req, res) {
  const { artist } = req.query;
  try {
    const data = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&format=json&api_key=${apiKey}`
    );
    res.status(200).json({ msg: data.data });
  } catch (error) {
   // res.status(400).json({ msg: error });
  }
  //res.status(200).json({ data: "hi" });
}
