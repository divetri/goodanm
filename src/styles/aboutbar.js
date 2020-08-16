class AboutBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .appabout > h1{
            font-size: 40pt;
            font-weight: 800;
            color:  #5D0C1D;
            line-height: 80%;
            margin-block-start: 0;
            margin-block-end: 0;
        }
        .appabout > h5{
            font-weight: 100;
            margin-block-start: 0;
            margin-block-end: 0;
        }
        </style>
        <div class="appabout" id="about">
        <h1 id="about">About Good Anime</h1><br>
        <h5>Submission web for Fundamental Front-End Web Development class on <a href="https://dicoding.com">Dicoding</a>. Source from <a href="https://jikan.moe">Jikan API</a>. Jikan (時間) is an open-source PHP & REST API for the “most active online anime + manga community and database” — <a href="https://myanimelist.net/">MyAnimeList.net</a>.</h5>
        </div>`;
        }
}

customElements.define("about-bar", AboutBar);