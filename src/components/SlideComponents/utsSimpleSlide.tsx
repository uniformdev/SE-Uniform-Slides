const utsSimpleSlide: React.FC<{ entry: Type.BasicSlideProps }> = ({
  entry: { slideTitle, slideText, slideHeadline },
}) => (
  <section className="two-columns utsSimpleBackground1">
    <div className="two-columns__col">
      <h2 className="title-large">{slideTitle}</h2>
      <h3 className="title">{slideHeadline}</h3>
      <div
        className="sub-title-small"
        dangerouslySetInnerHTML={{ __html: slideText }}
      />
    </div>
    <div className="rightColumnMiniBackground">
      <img
        className="slide-img-mini"
        src="/theme/images/UnpackTheStack__Mini.png"
      />
    </div>
  </section>
);

export default utsSimpleSlide;
