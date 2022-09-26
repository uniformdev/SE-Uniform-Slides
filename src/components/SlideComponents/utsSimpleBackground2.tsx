const utsSimpleBackground2: React.FC<{ entry: Type.BasicSlideProps }> = ({
  entry: { slideTitle, slideText, variant },
}) => (
  <section className="two-rows utsSimpleBackground2">
    <div className="two-rows__col">
      <h2 className={variant + " title-large"}>{slideTitle}</h2>
      <div
        className="sub-title-small"
        dangerouslySetInnerHTML={{ __html: slideText }}
      />
    </div>
    <div className="bottomColumnWideBackground">
      <img src="/theme/images/UnpackTheStack_Extrawide.png" />
    </div>
  </section>
);

export default utsSimpleBackground2;
