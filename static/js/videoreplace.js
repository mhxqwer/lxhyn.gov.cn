/**
 * 将视频替换为外网可播放地址
 * 在模板中使用时请手动添加<script>标签
 */
var videoList = document.getElementsByTagName('iframe'),
    removeIndex = [];
for (var i = 0, length = videoList.length; i < length; i++) {
    var video = videoList[i],
        src = video.getAttribute('src');
        durl = video.getAttribute('durl');
    if (durl) {
        var videoEle = document.createElement('video');
        videoEle.setAttribute('src', durl);
        videoEle.setAttribute('controls', true);
        videoEle.setAttribute('appendix', true);
        videoEle.setAttribute('preload', true);
        videoEle.setAttribute('name', video.getAttribute('name'));
        videoEle.setAttribute('class', video.getAttribute('class'));
        videoEle.setAttribute('width', video.getAttribute('width'));
        videoEle.setAttribute('height', video.getAttribute('height'));
        videoEle.setAttribute('style', video.getAttribute('style'));
        videoEle.setAttribute('autoplay', src.match(/&autoPlay=\S*/)[0].split('=')[1]);

        video.parentElement.insertBefore(videoEle, video);
        removeIndex.push(i);
    }
}

if (removeIndex.length > 0) {
        for (var i = removeIndex.length; i > 0; i--) {
            var videoIframe = videoList[removeIndex[i-1]];
            videoIframe.parentElement.removeChild(videoIframe);
        }
}