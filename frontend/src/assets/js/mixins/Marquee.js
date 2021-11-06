export default {
  methods: {
    marquee(ref, padding) {
      if (ref == undefined) {
        return;
      }

      let container = ref.firstChild;
      let content = container.firstChild;

      // Set to initial state - Useful when rerun effect
      this.resetState(ref);

      // Only execute marquee effect when content overflow
      if(content.offsetWidth <= container.offsetWidth) {
        return;
      }

      content.style.paddingRight = `${padding}rem`;

      // Clone content
      let clonedContent = content.cloneNode(true);
      container.appendChild(clonedContent);

      let contentWidth = content.offsetWidth;
      let containerWidth = contentWidth * 2 - padding;
      let duration = contentWidth / 50;

      container.style.width = `${containerWidth + 1}px`;
      container.style.setProperty('--width-offset', `-${contentWidth}px`);
      container.style.setProperty('--duration', `${duration}s`);
    },
    resetState(ref) {
      let container = ref.firstChild;
      let content = container.firstChild;

      container.style.width = null;
      container.style.removeProperty("--width-offset");
      container.style.removeProperty("--duration");
      content.style.paddingRight = null;

      if(container.childNodes.length === 2) {
        container.removeChild(container.lastChild);
      }
    }
  }
}