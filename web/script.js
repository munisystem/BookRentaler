$(function() {
    var API_URL = 'http://api.munisystem.net:3000/books';
    var NO_USER = 'NOUSER';
    $tbody = $('#books-table tbody');
    $.get(API_URL,
        null,
        function(data) {
            for (var i = 0; i < data.length; i++) {
                var can = data[i].user == NO_USER;
                var can_text = '貸出中';
                var can_class = '';
                var user_name = data[i].user;
                if (can) {
                    can_text = '';
                    can_class = 'allow';
                    user_name = '-';
                }
                $tr = $('<tr/>').addClass(can_class).append(
                        $('<td/>').text(can_text)
                ).append(
                        $('<td/>').text(data[i].name)
                ).append(
                        $('<td/>').text(user_name)
                );
                $tbody.append($tr);
            }
        }
    )
});
