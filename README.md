Тестовое задание.SPA приложение для записи на прием к врачу на React

Проект доступен по адресу: https://pribytov.github.io/regform/

![Image text](https://github.com/Pribytov/regform/blob/640098a4c98d25735f0f193528b3b670d90abbc1/regform.png)

Использованы технологии: HTML, CSS, JS, React, Redux(redux-toolkit)

React - функциональные компоненты.

Стор - redux-toolkit, хуки(useSelector, useDispatch)

Маршрутизация - react-router v6, хук useNavigate.


Описание задания: 

Сделать SPA приложение для записи на прием к врачу на React/Vue.

Использовать библиотеки: 
    • Bootstrap (Vue-Bootstrap/React-Bootstrap) или верстка без UI-библиотек
    • Поиск адресов с помощью Dadata (https://dadata.ru/api/suggest/address/)
    • Vue Router/React Router
    • Vuex/Redux

На главной странице отобразить форму из 5 полей:
    • Ф.И.О — текст (поле обязательно, обязательно наличие 2-х слов);
    • Возраст — число (поле обязательно, min: 0, max: 150);
    • Email; — текст (поле обязательно, валидация email);
    • Дата записи — дата - формат ДД.ММ.ГГГГ —
 (поле обязательно, минимальная дата - сегодня, максимальная дата - 1 месяц вперед от сегодня)
    • Город проживания + улица — использовать поиск\подсказки Dadata;
    • Выбор времени: select из часовых промежутков, например 09:00-10:00. Обязательно к выбору; 


    • Поле Dadata оформить в виде отдельного компонента.
    • Данные и состояние хранить в Vuex/Redux
    • Валидация каждого поля на blur/change
    • Валидация всей формы при нажатии кнопки «Записаться»
    • В случае успешной валидации происходит переход на другую страницу в которой показана вся информация из формы записи транслитом английскими буквами


Важно: не нужно обращать внимания на красоты и UI при реализации. Использования простого Boostrap вполне хватит.
