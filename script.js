$(function() {
    var API_URL = 'http://api.munisystem.net:3000/books';
    $.get(API_URL,
        null,
        function(data) {
            for (var i = 0; i < data.length; i++) {
                $div = $('<div/>').append(
                        $('<span/>').text('id: ' + data[i].user)
                ).append(
                        $('<span/>').text('name: ' + data[i].name)
                );
                $('#res').append($div);
                console.log(data[i]);
            }
        }
    )
});
