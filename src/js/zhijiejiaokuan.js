layui.use('laydate', function() {
    var laydate = layui.laydate;
    //获取当月第一天
    var date22 = new Date();
    date22.setDate(1);
    var date3 = date22.getFullYear() + "-" + (date22.getMonth() + 1) + "-01";

    laydate.render({
        elem: '#startDate', //指定元素
        max: 0,
        value: date3
    });
    laydate.render({
        elem: '#endDate', //指定元素
        max: 0,
        value: new Date()
    });
});
$("body>div:nth-child(2)").height($(window).height() - $("body>div:nth-child(1)").height() - 40);
$(window).resize(function() {
    $("body>div:nth-child(2)").height($(window).height() - $("body>div:nth-child(1)").height() - 40);
});
//如果对页面上的select插入option，加上下面一段
layui.use('form', function() {
    var form = layui.form;
    //在这里给select添加option
    form.render();
});

$("#table_main").dataTable({
    "lengthChange": true,
    "ordering": false,
    "scrollX": true
});