$(document).ready(function()
{

    var currentImage = $(".default");
    var bIsClickOff = false;

    //Change these values to achieve your desired effect
    const slideLength = 400;
    const slideTime = 200;
    const blurStrength = 10;

    $(".previous").click(function(){
        if ($("img").not(':animated'))
        {
            $(".arrow").prop('disabled', true);
            bIsClickOff = true;
        }

        let bIsFirst = $(".images img").first().hasClass("default");

        currentImage.animate({
                opacity: 0,
                filter: $(currentImage).css("filter", `blur(${blurStrength}px)`),
                move: $(currentImage).css("transform", `translateX(${slideLength}px)`)
            }, slideTime, function(){

                $(this).removeClass("default");

                if(bIsFirst)
                {
                    $(".images img").last().addClass("default");
                }
                else
                {
                    currentImage.prev().addClass("default");
                }

                currentImage = $(".default").removeAttr("style");

            if (bIsClickOff)
            {
                $(".arrow").prop('disabled', false);
                bIsClickOff = false;
            }
        });
    });

    $(".next").click(function(){

        if ($("img").not(':animated'))
        {
            $(".arrow").prop('disabled', true);
            bIsClickOff = true;
        }

        let bIsLast = $(".images img").last().hasClass("default");

        currentImage.animate({
                opacity: 0,
                filter: $(currentImage).css("filter", `blur(${blurStrength}px)`),
                move: $(currentImage).css("transform", `translateX(-${slideLength}px)`)
            }, slideTime, function(){

                $(this).removeClass("default");

                if(bIsLast)
                {
                    $(".images img").first().addClass("default");
                }
                else
                {
                    currentImage.next().addClass("default");
                }

                currentImage = $(".default").removeAttr("style");

            if (bIsClickOff)
            {
                $(".arrow").prop('disabled', false);
            }
        });
    });
});