$(document).ready(function () {
    var i;
    for (i = 0; i < 16; i++) {
        var div = $("<div></div>");
        div.addClass("pic");

        var link = $("<a></a>");
        var ln = info[2].link1 + info[2].id;
        link.attr("href", ln);

        var image = $("<img>");
        image.addClass("picture");
        image.attr("src", info[2].posterImg);

        link.append(image);
        div.append(link);

        var para = $("<p>");
        para.addClass("description");

        para.text(info[2].description);
        div.append(para);

        var para2 = $("<p></p>");
        para2.addClass("cost");
        para2.text(info[2].cost);
        div.append(para2);

        $("#images").append(div);
    }
});