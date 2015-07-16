
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
    { "stat": "STR", "score": 10, "modifier": "<input id='STRMod' type='text' value='0'></input>" },
    { "stat": "DEX", "score": 10, "modifier": "<input id='DEXMod' type='text' value='0'></input>" },
    { "stat": "CON", "score": 10, "modifier": "<input id='CONMod' type='text' value='0'></input>" },
    { "stat": "INT", "score": 10, "modifier": "<input id='INTMod' type='text' value='0'></input>" },
    { "stat": "WIS", "score": 10, "modifier": "<input id='WISMod' type='text' value='0'></input>" },
    { "stat": "CHA", "score": 10, "modifier": "<input id='CHAMod' type='text' value='0'></input>" }
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
            var idSelector = '#' + coreDataSet[i].stat + 'Mod';
            var thisMod = $(idSelector).val();
            thisMod = Number(thisMod)
            if (typeof (thisMod) == 'undefined'||thisMod == "") { thisMod == 0 };
            var arrNumNewScore = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)];
            var numMinScore = Math.min(arrNumNewScore[0], arrNumNewScore[1], arrNumNewScore[2], arrNumNewScore[3]);
            var numNewScore = 0;
            for (var j = 0; j < arrNumNewScore.length; j++) {
                numNewScore = numNewScore + arrNumNewScore[j];
            };
            numNewScore = numNewScore - numMinScore;
            if (numNewScore < 8) { numNewScore = 8 };
            numNewScore = numNewScore + thisMod;
            coreDataSet[i].score = numNewScore;
            coreDataSet[i].modifier = "<input id='" + idSelector.replace('#','') + "' type='text' value='" + thisMod + "'></input>";
        }
        console.log(coreDataSet)
        coreDataTable.clear().rows.add(coreDataSet).draw();
    });



});

