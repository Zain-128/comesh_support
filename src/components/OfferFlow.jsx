import "./OfferFlow.css";

const ITEMS = [
  {
    title: "Profiles",
    text: "Highlight your niche, availability, and social presence.",
  },
  {
    title: "Connect",
    text: "Find and connect with others who fit your goals.",
  },
  {
    title: "Messaging",
    text: "Keep conversations in one place — in-app chat.",
  },
];

export default function OfferFlow() {
  return (
    <div className="offer-flow">
      <h2 className="offer-flow__heading">What we offer</h2>

      {/* Horizontal — cards + rail share same grid so dots align */}
      <div className="offer-flow__horizontal">
        <div className="offer-flow__grid">
          {ITEMS.map((item, i) => (
            <article key={item.title} className="offer-card">
              <div className="offer-card__inner">
                <h3 className="offer-card__title">
                  <span className="offer-card__step">{i + 1}</span>
                  {item.title}
                </h3>
                <p className="offer-card__text">{item.text}</p>
              </div>
            </article>
          ))}

          <div className="offer-flow__rail" aria-hidden="true">
            <div className="offer-flow__track" />
            <div className="offer-flow__mover offer-flow__mover--h" />
          </div>
        </div>
      </div>

      {/* Vertical — mobile */}
      <div className="offer-flow__vertical">
        <div className="offer-flow__spine" aria-hidden="true">
          <div className="offer-flow__vtrack" />
          <div className="offer-flow__mover offer-flow__mover--v" />
        </div>
        {ITEMS.map((item, i) => (
          <article key={`m-${item.title}`} className="offer-card">
            <div className="offer-card__inner">
              <h3 className="offer-card__title">
                <span className="offer-card__step">{i + 1}</span>
                {item.title}
              </h3>
              <p className="offer-card__text">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
