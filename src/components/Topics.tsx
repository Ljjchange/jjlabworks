const chapters = [
  {
    id: "china",
    title: "China",
    description: "Roots and memories",
    image: "chapter-china.png",
  },
  {
    id: "us",
    title: "US",
    description: "Life and discoveries",
    image: "chapter-us.png",
  },
  {
    id: "next",
    title: "What’s Next",
    description: "More stories to come",
    image: "chapter-beyond.png",
  },
];

export default function Topics() {
  return (
    <section id="chapters" className="chapters">
      <div className="chapter-heading">
        <h2>LIFE CHAPTERS</h2>
        <a href="#chapters">Explore my stories →</a>
      </div>
      <div className="chapter-grid">
        {chapters.map((chapter) => (
          <article className="chapter-card" key={chapter.id}>
            <img
              src={"/images/" + chapter.image}
              alt="Colorful watercolor landscape"
            />
            <div className="chapter-copy">
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
