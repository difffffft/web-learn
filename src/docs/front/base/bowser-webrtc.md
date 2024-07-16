### 背景

由于项目需要，需要使用摄像头预览功能，设备型号为海康威视。目前已存在的基于 FFmpeg 的方案延迟都太高，所以项目最终选择基于此方案。

### 方案

方案选用为基于 WebRTC 的视频即时通讯，它原生支持对 RTP 协议的解码，所以能够做到延迟很低，大概0.2-0.4秒左右，其他方案都有大于1秒的延迟。WebRTC对浏览器有要求，[点击此处](https://caniuse.com/rtcpeerconnection)中查看支持的浏览器。

<!-- ![Description](/api/web/static/4) -->

WebRTC 的实现方案在 Github 有非常多，经过一序列对比和测试，最终选择的是使用 webrtc-streamer 这个项目，其容易使用并且较为稳定。

### 开始

webrtc-streamer 不仅支持对 RTSP 流的捕获而且还支持对V4L2以及屏幕窗口快照的捕获。webrtc-streamer 内置了一个小型的 HTTP server 来对 webrtc 需要的相关接口提供支持。下面具体开始如何设置

1.对摄像头进行配置

由于 webrtc 的核心库还不支持 h265, 所以需要设置为 h264 编码。登录到海康威视摄像头的后台配置中心，在 “视音频” 菜单下进行设置，然后保存。

<!-- ![Description](/api/web/static/5) -->

2.下载webrtc-streamer

[webrtc-streamer](https://github.com/mpromonet/webrtc-streamer/releases)

在github发布页面根据需要的平台选择相应的包下载

3.测试设备

```
./webrtc-streamer rtsp://账号:密码@IP地址
```


4.集成

你可以在下载的发布包中的html文件夹中找到 index.html 来查看示例代码，下面列出来核心代码：
```html
<html>
    <head>
        <script src="libs/adapter.min.js"></script>
        <script src="webrtcstreamer.js"></script>
        <script>
            var webRtcServer = null;
            window.onload = function() {
                webRtcServer = new WebRtcStreamer("video",location.protocol+"//"+window.location.hostname+":8000");
                webRtcServer.connect("rtsp://账号:密码@IP地址");
            }
            window.onbeforeunload = function() {
                webRtcServer.disconnect(); 
            }
        </script>
    </head>
    <body>
        <video id="video" />
    </body>
</html>
```