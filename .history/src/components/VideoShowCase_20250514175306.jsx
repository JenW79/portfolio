import "./VideoShowcase.css";

export default function VideoShowcase() {
  return (
    <section className="video-showcase">
      <div className="section-wrap">
      <div className="video-left">
        <div className="phone-frame">
          <video
            src="/videos/why-i-code.mov"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="video-frame"
          />
        </div>
      </div>

      <div className="video-right">
        <h2>Why I Code</h2>
        <blockquote>
          “Code is how I turn complex problems into elegant solutions. It’s my
          bridge between strategy, creativity, and impact.”
        </blockquote>
        <p className="watch-cta">
          <span className="play-icon">▶</span> Watch the full story
        </p>
      </div>
    </section>
  );
}
