const utsSimpleBackground1: React.FC<{ entry: Type.BasicSlideProps }> = ({
  entry: { slideTitle, slideText },
}) => (
  <section className="two-columns utsSimpleBackground1">
    <div className="two-columns__col">
      <h2 className="title-large">{slideTitle}</h2>
      <div
        className="sub-title-small"
        dangerouslySetInnerHTML={{ __html: slideText }}
      />
    </div>
    <div className="rightColumnTallBackground">
      <img className="slide-img" src="/theme/images/UnpackTheStack__Tall.png" />
    </div>
  </section>
);

export default utsSimpleBackground1;
