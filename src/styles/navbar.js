class NavBar extends HTMLElement {

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
        .appnav{
            background-color: #5D0C1D;
            padding: 20px ;
            font-weight: 100;
        }
        .appnav > a{
            text-decoration: none;
            color: #9A825F;
            padding: 0 20px;
        }
        .appnav > a:hover{
            color:  #CCB38D;
            font-weight: 600;
            text-decoration: none;
        }
        </style>
        <div class="appnav">
            <a href="#top">Top Anime</a>
            <a href="#about">About</a>
        </div>`;
        }
}

customElements.define("nav-bar", NavBar);