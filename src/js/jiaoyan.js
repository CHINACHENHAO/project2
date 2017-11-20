$("body>div:nth-child(3)").height($(window).height() - 140);
layui.use('layer', function() {
    var layer = layui.layer;
    var imgggg;
    $("td.img_td>img").mouseover(function() {
        var _this = $(this);
        imgggg = layer.open({
            title: '电子票',
            area: ['800px', '700px'],
            content: '<img style="width:700px;height:513px;" src="' + _this.attr("src") + '">',
            shade: 0
        });
    });
    $("td.img_td>img").mouseleave(function() {
        layer.close(imgggg);
    });
});