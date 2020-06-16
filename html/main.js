$(function() {
    window.addEventListener("message", function (event) {
        var _ = event.data
        audioPlayer = new Howl({src: ["assets/demo.ogg"]})
            audioPlayer.volume(1)
            audioPlayer.play()
        if (_.NotifyType == "sucesso") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/sucesso.png'><div class='notify-type'>Sucesso</div><div class='notify-time'>now</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(4500).fadeOut(750);
        }else if (_.NotifyType == "negado") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/negado.png'><div class='notify-type'>Negado</div><div class='notify-time'>now</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(4500).fadeOut(750);
        }else if (_.NotifyType == "aviso") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/aviso.png'><div class='notify-type'>Aviso</div><div class='notify-time'>now</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(4500).fadeOut(750);
        }else if (_.NotifyType == "importante") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/importante.png'><div class='notify-type'>Importante</div><div class='notify-time'>now</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(4500).fadeOut(750);
        }
    })
})