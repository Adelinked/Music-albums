import "../styles/globals.css";
import { AppWrapper } from "../context";

function MyApp({ Component, pageProps }) {
  const artist = pageProps.artist;
  const value =
    artist !== null && artist !== undefined ? artist : "Celine Dion";
  return (
    <AppWrapper value={value}>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
