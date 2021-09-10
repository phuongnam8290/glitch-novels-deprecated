export default {
  methods: {
    getLoopedElements(arr, loopTimes) {
      if (arr instanceof Array) {
        if (arr.length <= loopTimes) {
          return arr;
        } else {
          return arr.slice(0, loopTimes);
        }
      } else {
        throw new Error("Unsupported type for arr arguments")
      }
    },
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