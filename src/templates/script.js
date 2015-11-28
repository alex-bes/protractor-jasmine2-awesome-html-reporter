$(document).ready(function () {

    var filterState = {
        q: null,
        onlyFailed: false
    };

    var applyFilter = function (filterState) {
        var q = (typeof filterState.q == "string" && filterState.q.length > 0) ? filterState.q.toLowerCase() : null;
        var onlyFailed = filterState.onlyFailed;
        $('.spec').each(function () {
            var spec = $(this);
            var fullName = spec.attr('data-fullName').toLowerCase();
            var description = spec.attr('data-description').toLowerCase();
            var failed = "failed" == spec.attr('data-status').toLowerCase();
            var passFilter = true;
            if (q && fullName.indexOf(q) == -1) {
                passFilter = false;
            }
            if (onlyFailed && !failed) {
                passFilter = false;
            }

            if (passFilter) {
                spec.slideDown();
            } else {
                spec.slideUp();
            }

        });
    };

    var inputTimeout = 1000;
    var inputTimer = null;
    $('#filterText').on('input', function (event) {
        inputTimer && clearTimeout(inputTimer);
        inputTimer = setTimeout(function () {
            filterState.q = $(event.target).val();
            applyFilter(filterState);
            inputTimer = null;
        }, inputTimeout);
    });
    $('#filterFailed').on('change', function (event) {
        filterState.onlyFailed = $(event.target).prop("checked");
        applyFilter(filterState);
    });


    $('.suite-title').click(function (event) {
        var suiteId = $(event.target).attr('data-suite-id');
        var suiteContentElement = $('.suite-content[data-suite-id="' + suiteId + '"]');
        suiteContentElement.slideToggle();
    });
    $('#showAllSuites').click(function () {
        $('.suite-content').slideDown();
    });
});

