
function makeMeScrollToDefinedTarget(strJquerySelectorTarget, numDelayTimer, offsetter) {
    var $target = $(strJquerySelectorTarget);
    if (typeof (offsetter) == 'undefined') {
        offsetter = -100;
    };
    if (typeof (numDelayTimer) == 'undefined') {
        numDelayTimer = 0;
    };
    $('html, body').stop().delay(numDelayTimer).animate({
        'scrollTop': $target.offset().top + offsetter
    }, 900, 'swing', function () {
        //window.location.hash = target;

    });
};
var coreDataSet = [
    { "stat": "STR", "score": "10", "modifier": "0" },
    { "stat": "DEX", "score": "10", "modifier": "0" },
    { "stat": "CON", "score": "10", "modifier": "0" },
    { "stat": "INT", "score": "12", "modifier": "0" },
    { "stat": "WIS", "score": "12", "modifier": "0" },
    { "stat": "CHA", "score": "12", "modifier": "0" }
]
var coreTable;
$('document').ready(function () {
    coreDataTable = $('#coreStats').DataTable({
        "data": coreDataSet,
        "columns": [
            { "data": "stat" },
            { "data": "score" },
            { "data": "modifier" }
        ]
    });
    $('#reRoll').click(function () {
        for (var i = 0; i < coreDataSet.length; i++) {
            var numNewScore = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
            coreDataSet[i].score = numNewScore;
        }
        console.log(coreDataSet)
        coreDataTable.clear().rows.add(coreDataSet).draw();
    });
});

