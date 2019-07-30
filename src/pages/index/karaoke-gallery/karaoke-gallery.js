import "./karaoke-gallery.sass"

const videoCarousel = $('.karaoke-gallery-carousel');
const videos = ['oO7Y8NsnkRg', 'cK3NMZAUKGw', '001a4x0D1jY', 'GvD3CHA48pA'];

class Video {
    constructor(id, url) {
        this.innerHTML = `
            <video
                id="${id}"
                class="video-js vjs-default-skin karaoke-video"
                controls
                data-setup='{ 
                    "techOrder": ["youtube"], 
                    "sources": [{ 
                        "type": "video/youtube", 
                        "src": "https://www.youtube.com/watch?v=${url}"
                    }],
                    "youtube": {
                        "iv_load_policy": 1
                    }
                }'
              >
            </video>
        `
    }
    appendTo(target) {
        target.append(this.innerHTML);
    }
}
$('document').ready(() => {
    videos.forEach((elem, i) => {
        const item = new Video('video'+ i, elem);
        item.appendTo(videoCarousel);
    });
    videoCarousel.owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
    });
})
