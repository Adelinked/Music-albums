const apiKey = process.env.LASTFM_API_KEY;

export default async function albumHandler({ query: { id } }, res) {
  try {
    const data = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&mbid=${id}&format=json&api_key=${apiKey}`
    );

    res.status(200).json({ msg: data.data });
  } catch (error) {
    //res.status(400).json({ msg: error });
  }
}
