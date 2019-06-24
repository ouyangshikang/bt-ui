import VideoDialog from './video-dialog.vue';

let Video = {};
let currentMsg = null;

function defaultCallback(action) {
    if (!action) {
        currentMsg.reject();
    }
    currentMsg.resolve();
}

Video.install = (Vue) => {
    const VideoConstructor = Vue.extend(VideoDialog);
    let video = null;

    VideoConstructor.prototype.callback = defaultCallback;

    Vue.prototype.$video = (params) => {
        if (!video) {
            video = new VideoConstructor().$mount();
            document.body.appendChild(video.$el);
            document.documentElement.style.overflow = 'hidden';
        }
        // params: 暂时只传url
        const { url } = params;

        video.url = url;
        video.visible = true;

        return new Promise((resolve, reject) => {
            currentMsg = { resolve, reject };
        });
    };
};

export default Video;
