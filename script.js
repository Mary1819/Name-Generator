$(".reset").hide();
$(".names").hide();

let arrayNames = ["Grumpy", "Sneezy", "Dopey", "Sleepy", "Doc", "Bashful", "Happy"];
let arrayLength = arrayNames.length;

// $(".names").text(arrayNames);
$(".question-text").text(`What is your favorite number from 1 to ${arrayLength-1}?`);

// $(".add").click(function() {
//     let newName = $(".newName").val();
//     arrayNames.push(newName);
//     $(".names").show();
//     $(".names").text(arrayNames);
//     $(".reset").show();
// });

$(".buttonclick").click(function() {
    let name = $(".name").val();
    let num = Number($(".favNum").val());
    $(".first").hide();
    $(".names").hide();
    $("img").css("width", "200px");
    $("h1").css("font-family", "serif");

    if (num === 1) {
        $("h1").text(`Your Dwarf name is Grumpy ${name}. Grumpy has the biggest nose of the dwarfs and acts negative, and even antagonistic traits.`);
        $("img").attr("src", "http://assets.stickpng.com/images/5874d0d642e4d628738559f3.png");
        $(".reset").show();
        $("body").css("background-color", "brown");

    } else if (num === 2) {
        $("h1").text(`Your Dwarf name is Snezzy ${name}. Sneezy is known for his extraordinarily powerful sneezes, which are seen blowing even the heaviest of objects across a room.`);
        $("img").attr("src", "https://www.pngitem.com/pimgs/m/36-360743_dwarf-png-image-sneezy-dwarfs-clip-art-transparent.png");
        $(".reset").show();
        $("body").css("background-color", "maroon");

    } else if (num === 3) {
        $("h1").text(`Your Dwarf name is Dopey ${name}. Dopey is the only dwarf who does not have a beard and has simply "never tried" to speak.`);
        $("img").attr("src", "https://static.wikia.nocookie.net/scrooge-mcduck/images/7/79/Dopey.png/revision/latest?cb=20180512101039");
        $(".reset").show();
        $("body").css("background-color", "purple");

    } else if (num === 4) {
        $("h1").text(`Your Dwarf name is Sleepy ${name}. Sleepy is always tired and appears lethargic in most situations.`);
        $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCbT_FMMZPLKpNZef__x0hRsKCbuusYP7V9OsEJL20POvojLdF5dgutvZLHcbDqdjkmg&usqp=CAU");
        $(".reset").show();
        $("body").css("background-color", "blue");

    } else if (num === 5) {
        $("h1").text(`Your Dwarf name is Doc ${name}. The leader of the seven dwarfs, Doc wears glasses and often mixes up his words.`);
        $("img").attr("src", "https://static.wikia.nocookie.net/p__/images/3/3a/Doc_OK_214572K5a.jpg/revision/latest?cb=20130706172710&path-prefix=protagonist");
        $(".reset").show();
        $("body").css("background-color", "orange");

    } else if (num === 6) {
        $("h1").text(`Your Dwarf name is Bashful ${name}. Bashful is very shy, kind-hearted, cute, has a rosy blushy face and a small shy smile.`);
        $("img").attr("src", "https://i.pinimg.com/originals/03/1f/dc/031fdcd92b4a03ab8a10ea4baed34df5.jpg");
        $(".reset").show();
        $("body").css("background-color", "pink");

    } else if (num === 7) {
        $("h1").text(`Your Dwarf name is Happy ${name}. Happy is the jovial dwarf and is usually portrayed laughing.`);
        $("img").attr("src", "https://i.pinimg.com/originals/a6/05/53/a605531a9a901d4a11d08092c8247f74.jpg");
        $(".reset").show();
        $("body").css("background-color", "grey");

    } else {
        $("h1").text("Oops you did it wrong...");
        $("img").attr("src", "https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png");
        $(".reset").show();
        $("body").css("background-color", "red");
    }
});
$(".reset").click(function() {
    location.reload();
});