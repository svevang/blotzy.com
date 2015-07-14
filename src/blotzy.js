$(function(){

    var audioFiles = {
        kalileh: ["kalileh.mp3"],
        dq: [
            "quixote/18-Burlesque-De-Don-Quixote-Tvw55-Library.mp3",
            "quixote/20-Burlesque-De-Don-Quixote-Tvw55-His-Attack-On-The-Windmills.mp3",
            "quixote/21-Burlesque-De-Don-Quixote-Tvw55-Sighs-Of-Love-For-Princess-Dulcinea.mp3",
            "quixote/22-Burlesque-De-Don-Quixote-Tvw55-Penance-in-the-Wilderness.mp3",
            "quixote/23-Burlesque-De-Don-Quixote-Tvw55-Montesinos-Cave.mp3",
            "quixote/24-Burlesque-De-Don-Quixote-Tvw55-Galloping-into-the-West.mp3"],
        utr:   ["UnderTheRuglive.mp3"],
    }

    var videoFiles = {
        rehearsals: ["./15-07-06/Clip10.mp4",
            "15-07-06/Clip2.mp4",
            "15-07-06/Clip4.mp4",
            "15-07-06/Clip6.mp4",
            "15-07-06/Clip8.mp4",
            "15-07-06/Clip9.mp4",
            "15-07-07/00001.mp4",
            "15-07-07/00007.mp4",
            "15-07-07/00011.mp4",
            "15-07-07/00013.mp4",
            "15-07-07/00015.mp4",
            "15-07-07/00016.mp4",
            "15-07-07/00017.mp4",
            "15-07-07/00020.mp4",
            "15-07-07/00022.mp4",
            "15-07-07/7-6-15.mp4",
            "15-07-13/00023.mp4",
            "15-07-13/00024.mp4",]
    }

     $(function(){
        _(audioFiles).chain().keys().map(function(key){
            _(audioFiles[key]).map(function(filename){
                var $el = $('#'+key + ' .col-md-12');

                $el.append('<p>' + filename + '</p>')
                $el.append('<div class="music-player"><audio preload="none" src="magic-smelt-music/' + filename + '"></div>')
            })
        })
        _(videoFiles).chain().keys().map(function(key){
            _(videoFiles[key]).map(function(filename){
                var $el = $('#'+key + ' .col-md-12');

                $el.append('<p>' + filename + '</p>')
                $el.append('<div class="video-player"><video preload="none" > <source src="magic-smelt-movies/' + filename + '"></video></div>')
            })
        })

        var updateTimer = _.debounce(function(target){

            if(target.tagName.toLowerCase() == "video"){
                $('#counter').text('');
                return;
            }
            var timePlayingInSeconds = Math.floor(target.currentTime);
            var minutes = Math.floor(timePlayingInSeconds / 60);
            var seconds = timePlayingInSeconds % 60;
            if(seconds < 10)
                seconds = "0" + seconds;
            $('#counter').text(minutes + ':' + seconds);
        }, 10);

        $('video,audio').mediaelementplayer({
            features: ['playpause','progress','current','duration','tracks','volume','fullscreen']
        }).on('timeupdate', function(e){
            updateTimer(e.target);
        });
     })


})
