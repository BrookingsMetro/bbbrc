// github-file-embed.js
class GithubFileEmbed extends HTMLElement {
  constructor() {
    super();
    this.fetchFile();
  }

  async fetchFile() {
    try {
      const response = await fetch('https://glencorahaskins.github.io/bbb/wny_bbbrc_map_webv.html');
      const content = await response.text();
      this.renderEmbedCode(content);
    } catch (error) {
      console.error('Error fetching file:', error);
    }
  }

  renderEmbedCode(content) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.minHeight = '514px';

    // Insert content from the fetched file
    wrapperDiv.innerHTML = content;

    this.appendChild(wrapperDiv);
  }
}

customElements.define('github-file-embed', GithubFileEmbed);
