$(document).ready(function () {

    $(".fa-bars ").click(function () {
        $("header .smallscreen").show();
    })

    $(".fa-x").click(function () {
        $("header .smallscreen").css("display", "none")


    })

    // new Typed("main h2", {

    //     strings: ["WELCOME!"],
    //     typeSpeed: 200,
    //     backSpeed: 100,
    //     loop: true

    // })


    AOS.init()
});

