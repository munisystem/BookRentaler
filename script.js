console.log($);
$(function() {
    $.post('https://raw.githubusercontent.com/twitter/hbc/master/hbc-twitter4j/src/test/resources/scrub-geo.json',
        null,
        function(data) {
            data = '[ { "id": 1, "name": "muni" }, { "id": 2, "name": "piyopiyo" }, { "id": 3, "name": "hogehoge" } ]';
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                $div = $('<div/>').append(
                        $('<span/>').text('id: ' + data[i].id)
                ).append(
                        $('<span/>').text('name: ' + data[i].name)
                );
                $('#res').append($div);
                console.log(data[i]);
            }
        }
    )
});
