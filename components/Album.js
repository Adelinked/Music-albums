import Link from "next/link";

export default function Album({ name, img, mbid, url }) {
  /*<Link href={`/AlbumPage?id=${mbid}&url=${url}`}></Link> The Api provided by lastfm for displaying album data 
  is not returning the expected data*/
  return (
    <div className="album-pad">
      <Link href={`${url}`} target="_blank">
        <a>
          <img className="image" src={img} alt={name} />
          <div className="album-title">
            <h4>{name}</h4>
          </div>
        </a>
      </Link>
    </div>
  );
}
