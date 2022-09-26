export const utsDarkTitleSlide: React.FC<{ entry: Type.BasicSlideProps }> = ({
  entry: { slideTitle, slideHeadline, slideText, imageurl, variant },
}) => {
  const test = imageurl;
  return (
    <section className="two-columns utsDarkTitleSlide">
      <div className="two-columns__col">
        <h2 className={variant + " title-large"}>{slideTitle}</h2>
        <h3 className="title">{slideHeadline}</h3>
        <div
          className="sub-title"
          dangerouslySetInnerHTML={{ __html: slideText }}
        />
        <img src={imageurl} />
      </div>
      <div className="rightColumnWideBackground">
        <img
          className="slide-img"
          src="/theme/images/UnpackTheStack__Wide.png"
        />
      </div>
    </section>
  );
};

export default utsDarkTitleSlide;
