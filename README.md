# flucha

Попытка создать Flux фреймворк. 
Фреймворк разделен на 3 части по классификации Flux
 - Диспетчер
 - Представление
 - Хранилище
 
И класс Flucha, который отвечает за сборку всей системы.
В классе Flucha регистрируется компонент, его данные, обработчики изменений и 
функция рендера.

Изменение вызывается через Flux.emit()
## Пример инициализации
```js
// Создание иобъекта flucha
const flucha = new Flucha({
    el: "#app", // Элемент, который отвечает за представление
    data: {  // Данные, из которых Flucha создаст Store
        page: 1
    },
    actions: { // Actions, которые регистрируются в Store.
        changePage: { // Каждое поле объекта - определенный Action, на который будет реагировать Store
            update: function () { // Store будет выполнять для обновления данных ту функцию, которую возвращает update
                return function (page){
                    this.data.page = page;
                }
            } // После выполнения Update Store оповещает все View, что изменение произошло
        },
        init: {
            update: function () {
                return function () {
                    this.data.page = 1;
                }
            }
        }
    },
    render: function () { // Функция рендера для текущего View
        return function () {
            switch (this.data.page) {
                // Варианты рендера компонента
            }
        }
    }
});
```

## Вызов Action

```js
// Вызов Action с имененем changePage и данными 1
flucha.emit("changePage", 1)
```
