$(function () {
    $.get("../data/LKDS-00001/meta_data.json", function (d, status) {
        if (status === "success" && d != null) {
            console.log(d);
            var txt_dicom = [];

            if (d.Dicom) {
                txt_dicom.push(
                    '<p>{0}</p>'.format(d.Dicom.Manufactory),
                    '<p>{0}</p>'.format(d.Dicom.Device),
                    '<p>{0}</p>'.format(d.Dicom.ImageDate),
                    '<p>{0}</p>'.format(d.Dicom.Spacing)
                );
            }

            $("#pnl-image").find("#meta-data").html(txt_dicom.join(''));
        }
    });

    // 413*413
    // 1292

    $("#container img").mousemove(function (e) {
        var img_origin = $(this).offset();
        var img_x = Math.round(img_origin.left, 0);
        var img_y = Math.round(img_origin.top, 0);
        var img_w = Math.round($(this).width());
        var img_h = Math.round($(this).height());

        var scale_x = Math.round((e.pageX - img_x) * 413 / img_w);
        var scale_y = Math.round((e.pageY - img_y) * 413 / img_h);

        $("#pnl-image").find("#pos-info").html("X Axis : " + scale_x  + " Y Axis : " + scale_y);

    });
});