import React from "react";

const Section = ({ kicker, title, text, children, className = "", titleAs = "h2" }) => {
  const HeadingTag = titleAs;
  return (
    <section className={`section ${className}`.trim()}>
      {(kicker || title || text) && (
        <div className="section-head">
          <div>
            {kicker && <p className="eyebrow">{kicker}</p>}
            {title && <HeadingTag>{title}</HeadingTag>}
          </div>
          {text && <p>{text}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
