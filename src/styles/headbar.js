class HeadBar extends HTMLElement {

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
        .apphead{
            background-color: #9A825F;
            text-align: center;
            padding: 30px 0px;
        }
        .apphead > h1{
            font-size: 40pt;
            font-weight: 800;
            color:  #5D0C1D;
            line-height: 80%;
            margin-block-start: 0;
            margin-block-end: 0;
        }
        .apphead > h2{
            font-size: 28px;
            font-weight: 400;
            color: #CCB38D;
            margin-block-start: 0;
            margin-block-end: 0;
        }
        </style>
        <div class="apphead">
        <img src="studio-ghibli-2.png" height="200">
        <h1>GOOD ANIME</h1>
        <h2>Portal Anime Kamu</h2>
        </div>`;
        }
}

customElements.define("head-bar", HeadBar);