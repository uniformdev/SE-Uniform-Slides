const utsSimpledWith2ColumnsFullScreen: React.FC<{
  entry: Type.BasicSlideProps;
  image: any;
}> = ({ entry: { slideTitle, slideText, imageurl, variant } }) => (
  <>
    <section className="two-columns-fullscreen">
      <div>{imageurl !== undefined && <img src={imageurl} />}</div>
      <div>
        <h2 className={variant + " title-large"}>{slideTitle}</h2>
        <div
          className="sub-title-small"
          dangerouslySetInnerHTML={{ __html: slideText }}
        />
      </div>
    </section>
  </>
);

export default utsSimpledWith2ColumnsFullScreen;
