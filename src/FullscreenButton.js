import button from "./assets/fullscreen-button.png"

const FullscreenButton = () => {
    
    const onClick = () => {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen()
    }

    return <img src={button} id="fullscreen-button" onClick={onClick}/>
}

export default FullscreenButton