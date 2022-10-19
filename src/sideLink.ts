class SideLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  handleClick(ev) {
    ev.preventDefault();
    ev.stopImmediatePropagation();
    ev.stopPropagation();
    logseq.api.open_in_right_sidebar(this.uuid);
  }

  get uuid() {
    return (
      this.getAttribute('data-uuid') ||
      this.closest('div[id^="block-content"]')?.getAttribute('blockid') ||
      ''
    );
  }
}

export { SideLink };
