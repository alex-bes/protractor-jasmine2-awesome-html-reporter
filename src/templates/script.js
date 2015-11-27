$(document).ready(function () {

    $('#filterText').on('change', function (event) {
        var q = $(event.target).val();
        if (typeof q == "string" && q.length > 0) {
            $('.spec').hide();
            $('.spec[data-fullName~="' + q + '"]').show();
        } else {
            $('.spec').show();
        }
    });


    $('.suite-title').click(function (event) {
        var suiteId = $(event.target).attr('data-suite-id');
        var suiteContentElement = $('.suite-content[data-suite-id="' + suiteId + '"]');
        suiteContentElement.slideToggle();
    });
});

