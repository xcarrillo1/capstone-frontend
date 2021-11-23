export default function Home(props) {
    return (
        <div class="slider">

            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <a href="#slide-5">5</a>

            <div class="slides">
                <div id="slide-1">
                    <img src="https://i.imgur.com/7mJCd1F.jpg" alt="Lincoln Field" />
                </div>
                <div id="slide-2">
                    <img src="https://i.imgur.com/B1TGXAf.jpg" alt="Red Bull Arena" />
                </div>
                <div id="slide-3">
                    <img src="https://i.imgur.com/gWqK337.jpg" alt="Madison Square Garden" />
                </div>
                <div id="slide-4">
                    <img src="https://aviewfrommyseat.com/wallpaper/anonymous-20211002160707.jpg" alt="Amalie Arena" />
                </div>
                <div id="slide-5">
                    <img src="https://aviewfrommyseat.com/wallpaper/kwilsonm-20211106171152.jpg" alt="Truist Park" />
                </div>
            </div>
        </div>
    )
}