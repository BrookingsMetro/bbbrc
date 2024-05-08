// wny-file-embed.js
class WNYFileEmbed extends HTMLElement {
  constructor() {
    super();
    this.fetchFile();
  }

  async fetchFile() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/glencorahaskins/bbb/main/mountain_plains_iframe.html');
      const content = await response.text();
      this.renderEmbedCode(content);
    } catch (error) {
      console.error('Error fetching file:', error);
    }
  }

  renderEmbedCode(content) {
    this.innerHTML = `
      <div style="min-height:514px">
        ${content}
      </div>`;
  }
}

customElements.define('wny-file-embed', WNYFileEmbed);
