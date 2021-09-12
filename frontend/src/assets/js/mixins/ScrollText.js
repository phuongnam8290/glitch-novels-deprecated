import $ from "jquery"

export default {
  methods: {
    startMarquee(event) {
      let container = $(event.currentTarget);
      let child = container.children();
  
      let containerWidth = container.width();
      let childWidth = child.width();
  
      if(childWidth > containerWidth) {
        let scrollDistance = childWidth - containerWidth;
        let duration = scrollDistance * 15;

        container.stop();
        container.animate(
          {scrollLeft: scrollDistance},
          duration, 
          'linear'
        );
      }
    },
    stopMarquee(event) {
      let container = $(event.currentTarget);
  
      container.stop();
      container.animate(
        {scrollLeft: 0},
        400,
        'swing'
      );
    }
  }
}