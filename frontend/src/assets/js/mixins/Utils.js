export default {
  methods: {
    getRatingStars(rating) {
      let fullStars = Math.floor(rating);
      let emptyStars = Math.floor(5 - rating);
      let haveHalfStar = ((fullStars + emptyStars) < 5) ? true : false;

      return {
        fullStars,
        emptyStars,
        haveHalfStar
      }
    }
  }
}