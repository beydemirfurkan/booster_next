let dse = 0;
let phone = $(".phone-box img");
let phoneBg = $(".dein-four-bg");
let nam = $(".nam");
let vorname = $(".vorname");
$("#btn_next").click(function () {

    if (dse == 0) {
        phone.attr("src", "img/rundum1-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-1.png)");
        nam.text("name 1");
        vorname.text("Arzt"); //job 1
        dse++
    }
    else if (dse == 1) {
        phone.attr("src", "img/rundum2-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-2.png)");
        nam.text("name 2");
        vorname.text("Fitness Studio"); //job 2
        dse++
    }
    else if (dse == 2) {
        phone.attr("src", "img/rundum3-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-3.png)");
        nam.text("name 3");
        vorname.text("Handy Reparatur"); //job 3
        dse++
    }
    else if (dse == 3) {
        phone.attr("src", "img/rundum4-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-4.png)");
        nam.text("name 4");
        vorname.text("Restaurant"); //job 4
        dse++
    }
    else if (dse == 4) {
        phone.attr("src", "img/rundum-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-5.png)");
        nam.text("name 5");
        vorname.text("SchlÃ¼sseldienst"); //job 5
        dse++
    }
    else if (dse == 5) {
        phone.attr("src", "img/rundum0-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-0.png)");
        nam.text("name 0");
        vorname.text("Brautmodenhaus"); //job 0
        dse = 0
    }
})

$("#btn_prev").click(function () {

    if (dse == 0) {
        phone.attr("src", "img/rundum-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-5.png)");
        nam.text("name 5");
        vorname.text("SchlÃ¼sseldienst"); //job 5
        dse=5;
    }
    else if (dse == 1) {
        phone.attr("src", "img/rundum0-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-0.png)");
        nam.text("name 0");
        vorname.text("Brautmodenhaus"); //job 0
        dse--
    }
    else if (dse == 2) {
        phone.attr("src", "img/rundum1-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-1.png)");
        nam.text("name 1");
        vorname.text("Arzt"); //job 1
        dse--
    }
    else if (dse == 3) {
        phone.attr("src", "img/rundum2-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-2.png)");
        nam.text("name 2");
        vorname.text("Fitness Studio"); //job 2
        dse--
    }
    else if (dse == 4) {
        phone.attr("src", "img/rundum3-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-3.png)");
        nam.text("name 3");
        vorname.text("Handy Reparatur"); //job 3
        dse--
    }
    else if (dse == 5) {
        phone.attr("src", "img/rundum4-new1.png");
        phoneBg.css("background-image", "url(img/phone-bg-4.png)");
        nam.text("name 4");
        vorname.text("Restaurant"); //job 4
        dse--
    }
    

})


// this code is from the original page, but ı want this code more clear and easy to understand.


const data = [
    {
        id: 0,
        name: "name 0",
        job: "Brautmodenhaus",
        img: "img/rundum0-new1.png",
        bg: "img/phone-bg-0.png"
    }
    {
        id: 1,
        name: "name 1",
        job: "Arzt",
        img: "img/rundum1-new1.png",
        bg: "img/phone-bg-1.png"
    },
    {
        id: 2,
        name: "name 2",
        job: "Fitness Studio",
        img: "img/rundum2-new1.png",
        bg: "img/phone-bg-2.png"
    },
    {
        id: 3,
        name: "name 3",
        job: "Handy Reparatur",
        img: "img/rundum3-new1.png",
        bg: "img/phone-bg-3.png"
    },
    {
        id: 4,
        name: "name 4",
        job: "Restaurant",
        img: "img/rundum4-new1.png",
        bg: "img/phone-bg-4.png"
    },
    {
        id: 5,
        name: "name 5",
        job: "SchlÃ¼sseldienst",
        img: "img/rundum-new1.png",
        bg: "img/phone-bg-5.png"
    },
]

let quantity = 0;

$("#btn_next").click(function () {
    data.forEach(function (item) {
        $(".phone-box img").attr("src", item.img);
        $(".phone-box").css("background-image", "url(" + item.bg + ")");
        $(".name").text(item.name);
        $(".job").text(item.job);
    })
    quantity++;
});

$("#btn_prev").click(function () {
    data.forEach(function (item) {
        $(".phone-box img").attr("src", item.img);
        $(".phone-box").css("background-image", "url(" + item.bg + ")");
        $(".name").text(item.name);
        $(".job").text(item.job);
    })
    quantity--;
}
