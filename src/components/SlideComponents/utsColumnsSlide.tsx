const utsColumnsSlide: React.FC<{ entry: Type.ColumnSlideProps }> = ({
  entry: {
    column1Headline,
    column1Text,
    column2Headline,
    column2Text,
    column3Headline,
    column3Text,
  },
}) => (
  <section className="three-columns utsColumnsSlide">
    <div className="three-columns__col">
      <h2 className="three-column-title">{column1Headline}</h2>
      <div
        className="three-column-text"
        dangerouslySetInnerHTML={{ __html: column1Text }}
      />
    </div>
    <div className="three-columns__col">
      <h2 className="three-column-title">{column2Headline}</h2>
      <div
        className="three-column-text"
        dangerouslySetInnerHTML={{ __html: column2Text }}
      />
    </div>
    <div className="three-columns__col">
      <h2 className="three-column-title">{column3Headline}</h2>
      <div
        className="three-column-text"
        dangerouslySetInnerHTML={{ __html: column3Text }}
      />
    </div>
  </section>
);

export default utsColumnsSlide;
