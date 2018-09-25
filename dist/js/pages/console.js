$.ajax({
    async: true,
    beforeSend: function () {
        $("#image").html('加载中...');
    },
    error: function () {
        alert("error");
    },
    type: 'GET',
    url: '',
    data: {},
    success: function () {
        ShowDiv();
    }
});
//显示加载数据
function ShowDiv() {
    $("#image").html(' ');
    var paths = new Array(351); //数组 图片地址
    var path;
    for (var i = 0; i < paths.length; i++) {
        if (i < 10) {
            path = "../data/LKDS-00001/img_000" + i + "_i.png";
            paths[i] = path;
        }
        if (i > 9 && i < 100) {
            path = "../data/LKDS-00001/img_00" + i + "_i.png";
            paths[i] = path;
        }
        if (i > 99 && i < paths.length) {
            path = "../data/LKDS-00001/img_0" + i + "_i.png";
            paths[i] = path;
        }
    }

    $.each(paths, function (index, item) {
        //循环获取数据
        var srcimg = paths[index];

        $("#image").html(
            $("#image").html() + "<img style='width: 413px; height: 413px' alt='413*413' src='" + srcimg + "' />"
        );
    });
    $("#image").show();
}