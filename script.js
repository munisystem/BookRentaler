$(function() {
    var API_URL = 'http://api.munisystem.net:3000/books';
    $tbody = $('#books-table tbody');
    $.get(API_URL,
        null,
        function(data) {
            for (var i = 0; i < data.length; i++) {
                $tr = $('<tr/>').append(
                        $('<td/>').text(data[i].name)
                ).append(
                        $('<td/>').text(data[i].user)
                );
                $tbody.append($tr);
            }
        }
    )
});
