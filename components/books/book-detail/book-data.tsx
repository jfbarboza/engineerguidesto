import classes from './book-data.module.css';

function BookData(props) {
  const { date, address, image, imageAlt } = props;

  return (
    <section className={classes.data}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
    </section>
  );
}

export default BookData;
