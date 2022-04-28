export default function Track({ name, img, url }) {
  return (
    <div className="track-pad">
      <img src={img} alt={name} />
    </div>
  );
}
