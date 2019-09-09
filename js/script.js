$(document).ready(function () {
    // Сохраняем форму в переменную
    let form = $('#task2_form');

    // Добавляем в форму 2 инпута и кнопку
    form.append('<div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></div>');
    form.append('<div class="form-group"><label for="exampleInputPassword1">Password</label><input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div>');
    form.append('<button id="task2_form_submit" type="submit" class="btn btn-primary">Submit</button>');

    // По клику на кнопку
    $('#task2_form_submit').on('click', function (event) {

        // Останавливаем отправку формы
        event.preventDefault();

        // Преобразуем данные формы в строку
        let form_data = form.serialize();
        /*
            Формируем AJAX запрос к script.php методом POST и данными из формы,
            в случаи успеха выводим результат в div c id=results и добавляем ему класс alert-success,
            в случаи ошибки выводим текст в div c id=results и добавляем ему класс alert-danger
        */
        $.ajax({
            method: "POST",
            url: "script.php",
            data: form_data,
            dataType: 'html'
        }).done(function (response_html) {
            $('#results').addClass('alert-success').html('<h3>Request result</h3>' + response_html);
        }).fail(function () {
            $('#results').addClass('alert-danger').html('<h3>Error</h3> Please try again later or contact site administrator');
        });
    });
});