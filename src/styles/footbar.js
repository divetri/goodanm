class FootBar extends HTMLElement {

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
        .appfoot{
            background-color: #9A825F;
            padding: 20px ;
            text-align: center;
        }
        .appfoot > img{
            width: 40px;
        }
        </style>
        <div class="appfoot">
            <h3>by Divetri</h3>
            <a href="https://github.com/divetri"><img src="https://img.icons8.com/wired/64/000000/github.png"/></a>
            <a href="https://twitter.com/dvtrhx"><img src="https://img.icons8.com/wired/64/000000/twitter.png"/></a>
            <a href="https:/instagram.com/coldeyes.icedive"><img src="https://img.icons8.com/wired/64/000000/instagram-new.png"/></a>
        </div>`;
        }
}

customElements.define("foot-bar", FootBar);