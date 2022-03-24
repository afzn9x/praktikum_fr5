import styles from "./Movies.module.css";

function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>
          <u>Latest Movies</u>
        </h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
              alt=""
            />
            <h3 className={styles.movie__title}>After</h3>
            <p className={styles.movie__date}>October, 2020</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-71650f9b1c11091f5bcd637d4a18d9a7_screen.jpg?ts=1636996858"
              alt=""
            />
            <h3 className={styles.movie__title}>Origin</h3>
            <p className={styles.movie__date}>May, 2019</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artificial-intelligence-poster-design-template-63584732671231d6773a009a70a22dbd_screen.jpg?ts=1637013105"
              alt=""
            />
            <h3 className={styles.movie__title}>Systems</h3>
            <p className={styles.movie__date}>June, 2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/puppet-show-flyer-template-design-116a236af191a695f41d856e6f913b95_screen.jpg?ts=1636989614"
              alt=""
            />
            <h3 className={styles.movie__title}>Puppet Show</h3>
            <p className={styles.movie__date}>March, 2015</p>
          </div>

          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
              alt=""
            />
            <h3 className={styles.movie__title}>After</h3>
            <p className={styles.movie__date}>October, 2020</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-71650f9b1c11091f5bcd637d4a18d9a7_screen.jpg?ts=1636996858"
              alt=""
            />
            <h3 className={styles.movie__title}>Origin</h3>
            <p className={styles.movie__date}>May, 2019</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artificial-intelligence-poster-design-template-63584732671231d6773a009a70a22dbd_screen.jpg?ts=1637013105"
              alt=""
            />
            <h3 className={styles.movie__title}>Systems</h3>
            <p className={styles.movie__date}>June, 2021</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/puppet-show-flyer-template-design-116a236af191a695f41d856e6f913b95_screen.jpg?ts=1636989614"
              alt=""
            />
            <h3 className={styles.movie__title}>Puppet Show</h3>
            <p className={styles.movie__date}>March, 2015</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
