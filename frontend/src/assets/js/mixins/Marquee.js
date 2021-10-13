export default {
  methods: {
    marquee(ref) {
      if (ref == undefined) {
        return;
      }

      let container = ref.firstChild;
      let content = container.firstChild;

      // Only execute marquee effect when content overflow
      if(content.offsetWidth <= container.offsetWidth) {
        return;
      }
    
      content.style.paddingRight = "2rem";

      // Clone content
      let clonedContent = content.cloneNode(true);
      container.appendChild(clonedContent);

      let contentWidth = content.offsetWidth;
      let containerWidth = contentWidth * 2;
      let duration = contentWidth / 50;
      
      container.style.width = `${containerWidth + 1}px`;
      container.style.setProperty('--width-offset', `-${contentWidth}px`);
      container.style.setProperty('--duration', `${duration}s`);
    }
  }
}