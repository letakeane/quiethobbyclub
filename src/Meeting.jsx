import './Meeting.css';

function Meeting({
  date,
  location,
  address,
  mapLink,
  time,
  description,
  parking,
  otherNotes,
}) {
  return (
    <div className="meeting">
      <h3>{date} @ {time}</h3>
      <h4>{location}</h4>
      <a href={mapLink} className="resetMargin resetGap" target="_blank" rel="noopener noreferrer">{address}</a>
      <p className="decor" aria-hidden="true">. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.</p>
      <p className="desc">{description}</p>
      <p className="decor" aria-hidden="true">⟡゜・。。・゜゜・。。・゜☆</p>
      <p className="parking"><span>Nearby parking details:</span> {parking}</p>
      {otherNotes && (
        <p className="other-notes"><span>Other notes:</span> {otherNotes}</p>
      )}
    </div>
  );
};

export default Meeting;