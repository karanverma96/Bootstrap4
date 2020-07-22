$(document).ready(function(){
            $("#myjq").click(function(){
                $("#reservemodal").modal("toggle");
            });
            $("#myjq2").click(function(){
                $("#loginModal").modal("toggle");
            });
            $("#close").click(function(){
                $("#reservemodal").modal("hide");
            });
            $("#close1").click(function(){
                $("#reservemodal").modal("hide");
            });
            $("#close2").click(function(){
                $("#loginModal").modal("hide");
            });
            $("#close3").click(function(){
                $("#loginModal").modal("hide");
            });
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function()
            {
                if ($("#carouselButton").children("span").hasClass('fa-pause')) 
                {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play'))
                {
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
        });