$(function(){

    var audioFiles = {
        kalileh: ["kalileh.mp3"],
        dq: [
            "quixote/18-Burlesque-De-Don-Quixote-Tvw55-Ouverture.mp3",
            "quixote/19-Burlesque-De-Don-Quixote-Tvw55-Don-Quixote-Awakens.mp3",
            "quixote/20-Burlesque-De-Don-Quixote-Tvw55-His-Attack-On-The-Windmills.mp3",
            "quixote/21-Burlesque-De-Don-Quixote-Tvw55-Sighs-Of-Love-For-Princess-Dulcinea.mp3",
            "quixote/22-Burlesque-De-Don-Quixote-Tvw55-Sancho-Panza-Tossed-In-A-Blanket.mp3",
            "quixote/23-Burlesque-De-Don-Quixote-Tvw55-The-Galloping-Of-Rosinante-And-That-Of-Sancho's-Mule.mp3",
            "quixote/24-Burlesque-De-Don-Quixote-Tvw55-Quixote-Asleep.mp3"],
        utr:   ["UnderTheRuglive.mp3"],
    }

     $(function(){
        _(audioFiles).chain().keys().map(function(key){
            console.log(key);
            _(audioFiles[key]).map(function(filename){
                var $el = $('#'+key + ' .col-md-12');

                $el.append('<p>' + filename + '</p>')
                $el.append('<div class="music-player"><audio preload="none" src="magic-smelt-music/' + filename + '"></div>')
                //$('#'+key).append()
            })
        })
    $('video,audio').mediaelementplayer({
    features: ['playpause','progress','current','duration','tracks','volume','fullscreen']
    });
     })


})
