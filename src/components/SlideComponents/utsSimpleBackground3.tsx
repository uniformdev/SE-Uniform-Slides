const utsSimpleBackground3: React.FC<{ entry: Type.BasicSlideProps }> = ({
  entry: { slideTitle, slideText, imageurl, variant },
}) => (
  <section className="two-columns utsSimpleBackground3">
    <div className="two-columns__col">
      <h2 className={variant + " title-large"}>{slideTitle}</h2>
      <div
        className="sub-title-small"
        dangerouslySetInnerHTML={{ __html: slideText }}
      />
      {imageurl !== undefined && <img src={imageurl} />}
    </div>
    <div className="rightColumnWideBackground">
      <img className="slide-img" src="/theme/images/UnpackTheStack__Wide.png" />
    </div>
  </section>
);

export default utsSimpleBackground3;
