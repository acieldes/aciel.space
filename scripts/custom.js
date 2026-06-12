class TheWindow extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = `
        <style>
            :host {
                display: block;
                unicode-bidi: isolate;

                padding: 3px;
                background: #646464;
                border: outset 2px;
                box-shadow: -1px 1px #444,-2px 2px #444,-3px 3px #444;
                box-sizing: border-box;
            }

            :host
            .window-content {
                /* display: block; */
                unicode-bidi: isolate;

                display: flex;
                flex-direction: column;
                gap: 0;
                border: 1px black solid;
                height: 100%;
                box-sizing: border-box;
            }

            :host
            .window-content
            .body {
                display: block;
                unicode-bidi: isolate;

                background: #fff;
                padding: 4px;
                image-rendering: pixelated;
                flex-grow: 1;
                overflow: auto;
                scrollbar-width: thin;
                scrollbar-color: gray transparent;
            }
        </style>

        <div class="window-content">
            <div class="body">
                <slot></slot> 
            </div>
        </div>
        `
    }
}

class TheFlavor extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })

        shadow.innerHTML = `
        <style>
            :host {
                display: block;
                unicode-bidi: isolate;

                background: linear-gradient(90deg, #f56342, #f5ad42);

                margin: 0;
                padding: 0;
                border: 0 solid;

                box-sizing: border-box;

                width: calc(100% + 8px);
                margin: -4px -4px 0 -4px
            }
            
            :host
            .flavor-text {
                font-size: 10px;
                width: 100%;
                padding: 2px 0 2px 5px;
                display: block;
                box-sizing: border-box;

                margin: 0;
                border: 0 solid;

                font-family: ArcadeN, monospace;
                font-weight: 700;
                color: #fff;
            }
        </style>

        <span class="flavor-text">
            <slot></slot>
        </span>
        `
    }
}

customElements.define("the-window", TheWindow)
customElements.define("the-flavor", TheFlavor)