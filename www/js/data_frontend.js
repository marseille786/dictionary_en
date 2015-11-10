var bt_1 = [
    // Система сетки
    [
        'col-xs-n',
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на мобильных устройствах (<768px)',
        /^\s*col\-xs\-n\s*$/,
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на мобильных устройствах (<768px)'
    ],[
        'col-sm-n',
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на планшетных устройствах (>=768px)',
        /^\s*col\-sm\-n\s*$/,
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на планшетных устройствах (>=768px)'
    ],[
        'col-md-n',
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на средних устройствах (>=992px)',
        /^\s*col\-md\-n\s*$/,
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на средних устройствах (>=992px)'
    ],[
        'col-lg-n',
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на больших устройствах (>=1200px)',
        /^\s*col\-lg\-n\s*$/,
        '(Система сетки) Класс для разметки сетки с количеством колонок (n) на больших устройствах (>=1200px)'
    ],[
        'container-fluid',
        'Класс для контейнера с резиновой сеткой',
        /^\s*container\-fluid\s*$/,
        'Класс для контейнера с резиновой сеткой'
    ],[
        'clearfix',
        'Класс для сброса обтеканий. Применяется в комбинации с адаптивными служебными классами',
        /^\s*clearfix\s*$/,
        'Класс для сброса обтеканий. Применяется в комбинации с адаптивными служебными классами'
    ],[
        'col-md-offset-n',
        'Класс для сдвига блока (md) вправо на (n) колонок',
        /^\s*col\-md\-offset\-n\s*$/,
        'Класс для сдвига блока (md) вправо на (n) колонок'
    ],[
        'col-md-pull-n',
        'Класс для изменения порядка расположения столбцов разметки. Переместить столбец при разрешениях (md) на (n) столбцов вперед',
        /^\s*col\-md\-pull\-n\s*$/,
        'Класс для изменения порядка расположения столбцов разметки. Переместить столбец при разрешениях (md) на (n) столбцов вперед'
    ],[
        'col-md-push-n',
        'Класс для изменения порядка расположения столбцов разметки. Переместить стоблец при разрешениях (md) на (n) столбцов назад',
        /^\s*col\-md\-push\-n\s*$/,
        'Класс для изменения порядка расположения столбцов разметки. Переместить стоблец при разрешениях (md) на (n) столбцов назад'
    ],
    // Типография
    [
        'text-left',
        '(Типография) Класс для выравнивания текста по левому краю',
        /^\s*text\-left\s*$/,
        '(Типография) Класс для выравнивания текста по левому краю'
    ],[
        'text-center',
        '(Типография) Класс для выравнивания текста по центру',
        /^\s*text\-center\s*$/,
        '(Типография) Класс для выравнивания текста по центру'
    ],[
        'text-right',
        '(Типография) Класс для выравнивания текста по правому краю',
        /^\s*text\-right\s*$/,
        '(Типография) Класс для выравнивания текста по правому краю'
    ],[
        'text-justify',
        '(Типография) Класс для выравнивания текста по всей ширине',
        /^\s*text\-justify\s*$/,
        '(Типография) Класс для выравнивания текста по всей ширине'
    ],[
        '<abbr title="attr">attr</abbr>',
        '(Типография) Тег, для расширения текста (attr) при длительном наведении показывается tooltip с текстом (attr)',
        /^\s*\<\s*abbr\s*title\=(\"|\')attr(\"|\')\>attr\<\/\s*abbr\s*\>\s*$/,
        '(Типография) Тег, для расширения текста (attr) при длительном наведении показывается tooltip с текстом (attr)'
    ],[
        'initialism',
        '(Типография) Класс аббревиатуры для легкого уменьшения шрифта tooltip',
        /^\s*initialism\s*$/,
        '(Типография) Класс аббревиатуры для легкого уменьшения шрифта tooltip'
    ],[
        'blockquote',
        '(Типография) Тег блока для вставки цитаты',
        /^\s*blockquote\s*$/,
        '(Типография) Тег блока для вставки цитаты'
    ],[
        'blockquote-reverse',
        '(Типография) Класс блока цитаты для выравнивания цитаты по правому краю.',
        /^\s*blockquote\-reverse\s*$/,
        '(Типография) Класс блока цитаты для выравнивания цитаты по правому краю.'
    ],[
        'cite',
        '(Типография) Тег для указания источника цитаты',
        /^\s*cite\s*$/,
        '(Типография) Тег для указания источника цитаты'
    ],[
        'list-unstyled',
        '(Типография. Списки) Класс для списка, удаляющий отступ слева для элементов списка (только непосредственных дочерних элементов)',
        /^\s*list\-unstyled\s*$/,
        '(Типография. Списки) Класс для списка, удаляющий отступ слева для элементов списка (только непосредственных дочерних элементов)'
    ],[
        'list-inline',
        '(Типография. Списки) Класс для списка, выводит элементы списка в строку с небольшими отступами',
        /^\s*list\-inline\s*$/,
        '(Типография. Списки) Класс для списка, выводит элементы списка в строку с небольшими отступами'
    ],[
        'dl-horizontal',
        '(Типография. Списки) Класс для списка с описанием, выводит элементы с расположением терминов и их описаний бок о бок в линию',
        /^\s*dl\-horizontal\s*$/,
        '(Типография. Списки) Класс для списка с описанием, выводит элементы с расположением терминов и их описаний бок о бок в линию'
    ],
    // Код
    [
        'code',
        '(Код) Тег, указывающий на вставки кода в тексте (красный текст на сером фоне)',
        /^\s*code\s*$/,
        '(Код) Тег, указывающий на вставки кода в тексте (красный текст на сером фоне)'
    ],[
        'kbd',
        '(Код) Тег, указывающий на участок текста, который как правило вводится с клавиатуры (белый текст на черном фоне)',
        /^\s*kbd\s*$/,
        '(Код) Тег, указывающий на участок текста, который как правило вводится с клавиатуры (белый текст на черном фоне)'
    ],[
        'pre',
        '(Код) Тег, указывающий на блок текста, который выделяется как основной (на светло-сером фоне с темно-серой рамкой)',
        /^\s*pre\s*$/,
        '(Код) Тег, указывающий на блок текста, который выделяется как основной (на светло-сером фоне с темно-серой рамкой)'
    ],
    // Таблицы
    [
        'table',
        '(Таблицы) Класс <table> для определения таблицы в Bootstrap',
        /^\s*table\s*$/,
        '(Таблицы) Класс <table> для определения таблицы в Bootstrap'
    ],[
        'table-striped',
        '(Таблицы) Класс <table> чтобы добавить зебру- чередование для любой строки таблицы внутри <tbody>',
        /^\s*table\-striped\s*$/,
        '(Таблицы) Класс <table> чтобы добавить зебру- чередование для любой строки таблицы внутри <tbody>'
    ],[
        'table-bordered',
        '(Таблицы) Класс <table> для границы со всех сторон таблицы и яичеек.',
        /^\s*table\-bordered\s*$/,
        '(Таблицы) Класс <table> для границы со всех сторон таблицы и яичеек.'
    ],[
        'table-hover',
        '(Таблицы) Класс <table> для эффекта наведения на строки таблицы.',
        /^\s*table\-hover\s*$/,
        '(Таблицы) Класс <table> для эффекта наведения на строки таблицы.'
    ],[
        'table-condensed',
        '(Таблицы) Класс <table> чтобы сделать таблицы более компактными путем срезания клеточных промежутков наполовину.',
        /^\s*table\-condensed\s*$/,
        '(Таблицы) Класс <table> чтобы сделать таблицы более компактными путем срезания клеточных промежутков наполовину.'
    ],[
        'table-responsive',
        '(Таблицы) Класс <table> чтобы сделать их прокрученными горизонтально для небольших экранов (до 768px).',
        /^\s*table\-responsive\s*$/,
        '(Таблицы) Класс <table> чтобы сделать их прокрученными горизонтально для небольших экранов (до 768px).'
    ],[
        'active',
        '(Таблицы) Контекстный класс <tr>, <td>. Применяет цвет при наведении на конкретную строку или ячейку. Выделяет строку или ячейку, заливая фон светло-серым цветом',
        /^\s*active\s*$/,
        '(Таблицы) Контекстный класс <tr>, <td>. Применяет цвет при наведении на конкретную строку или ячейку. Выделяет строку или ячейку, заливая фон светло-серым цветом'
    ],[
        'success',
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на успешное или позитивное действие, заливая фон зеленым цветом',
        /^\s*success\s*$/,
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на успешное или позитивное действие, заливая фон зеленым цветом'
    ],[
        'info',
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на нейтральные информативные изменения или действия, заливая фон синим цветом',
        /^\s*info\s*$/,
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на нейтральные информативные изменения или действия, заливая фон синим цветом'
    ],[
        'warning',
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на предупреждения, которые могут потребовать внимания, заливая фон желтым цветом',
        /^\s*warning\s*$/,
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на предупреждения, которые могут потребовать внимания, заливая фон желтым цветом'
    ],[
        'danger',
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на опасное или потенциально негативное действие, заливая фон красным цветом',
        /^\s*danger\s*$/,
        '(Таблицы) Контекстный класс <tr>, <td>. Указывает на опасное или потенциально негативное действие, заливая фон красным цветом'
    ],
    // Компоненты
    [
        'jumbotron',
        '(Компоненты) Класс определяющий, гибкий компонент, который можно расширять на весь экран, чтобы продемонстрировать ключевой содержимое вашего сайта',
        /^\s*jumbotron\s*$/,
        '(Компоненты) Класс определяющий, гибкий компонент, который можно расширять на весь экран, чтобы продемонстрировать ключевой содержимое вашего сайта'
    ]
];





var lib_scss = [
	[
		'sass --watch . --style expanded',
		'Запуск SASS для текущей директории. (из командной строки)',
	],[
		'$v: val',
		'Установка переменной "v" с значением "val"',
	],[
        '$l: v1, v2, v3',
        'Объявление коллекции "$l" с значениями "v1", "v2" и "v3"',
	],[
		'$o: (\n\t"k1": v1,\n\t"k2": v2\n)',
		'Создание объекта (хэша) "o" значений с ключами "k1", "k2" и их значениями "v1", "v2"',
	],[
		'map-get($o, "k")',
		'Функция. Получить из объекта "o" значение по ключу "k"',
	],[
        'map-merge($l, $v)',
        'Функция. Добавить в список "$l" элемент "$v"',
	],[
		'&',
		'Обозначение текущего элемента',
	],[
		'@mixin n {\n\tp\n}',
		'Создание миксина "n" без аргументов',
	],[
		'@include m',
		'Вставка миксина "m" без аргументов',
	],[
		'@mixin n($a) {\n\tp\n}',
		'Создание миксина "n" с аргументом "$a"',
	],[
		'@include m($a)',
		'Вставка миксина "m" с аргументом "$a"',
	],[
		'.c1 {\n\t@extend .c2;\n}',
		'Наследование стилей из класса "c2" к классу "c1"',
	],[
		'%p {\n\ts\n}',
		'Создание плейсхолдера "p" со стилями "s"',
	],[
		'.c {\n\t@extend %p\n}',
		'Подключение стилей из плейсхолдера "p" к классу "c"',
	],[
		'@import "f"',
		'Подключение к текущему файлу находящийся с ним в одной директории файл "_f.scss"',
	],[
		'darken(c, n%)',
		'Функция цвета. Возвращает затемненный на "n%" цвет "c"',
	],[
		'lighten(c, n%)',
		'Функция цвета. Возвращает осветленный на "n%" цвет "c"',
	],[
        '.c{\n\tcolor: if($b, v1, v2);\n}',
        'Оператор ветвления. Если булево значение переменной "$b" = true, то для класса ".c" свойство "color" примет значение "v1", в противном случае - "v2"',
    ],[
        '@if $w > n1 and $w < n2 {\n\ts1\n} @else if $w > n3 {\n\ts2\n} @else {\n\ts3\n}',
        'Директива ветвлений. Если переменная "$w" больше, чем "n1" и меньше, чем "n2", присвоить свойства стилей "s1". Иначе если "$w" больше чем "n3", присвоить свойства стилей "s2". Иначе присвоить свойства стилей "s3"',
    ],[
        '@debug "w = #{$w}"',
        'Директива. Вывод текущих значений "$w" переменной на момент вызова данной директивы в виде "w = значение переменной"',
    ],[
        '@warn "w = #{$w}"',
        'Директива. Вывод текущих значений "$w" переменной на момент вызова данной директивы в виде "w = значение переменной". Более подробно, чем @debug',
    ],[
        'nth($l, n)',
        'Функция для работы со списком. Из списка "$l" берется элемент с порядковым номером "n"',
    ],[
        'length($l)',
        'Функция для работы со списком. Возвращается числовая длина списка "$l"',
    ],[
        '@for $i from n1 to n2 {\n\tc\n}',
        'Директива цикла for. Выполняет код "c" с изменением счетчика "$i" от "n1" до "n2". Последний не включается.',
    ],[
        '@for $i from n1 through n2 {\n\tc\n}',
        'Директива цикла for. Выполняет код "c" с изменением счетчика "$i" от "n1" до "n2". Последний включается.',
    ],[
        '@each $v in $l {\n\ts\n}',
        'Директива цикла. Перебираем каждый элемент "$v" списка "$l" и применяем стили "s"',
    ],[
        '@each $k, $v in $l {\n\ts\n}',
        'Директива цикла. Перебираем каждый элемент с ключем "$k" и значением "$v" двухмерного массива "$l" и применяем стили "s"',
    ],[
        '@while $i > 0 {\n\ts\n}',
        'Директива цикла с предусловием. Перебираем элементы и пока индекс "$i" больше нуля применяем стили "s"',
    ],[
        '$i !global',
        'Инструкция, делающая переменую $i глобальной',
    ],[
        '@function fn($a) {\n\t@return c\n}',
        'Директива функции. Функция "fn" с аргументом "$a" возвращает результат кода "c"',
    ]
];





var git = [
    // Команды в cmd после установки
    [
        'git config --global user.name "n"',
        'Регистрация имени (n)',
    ],[
        'git config --global user.email "e"',
        'Регистрация электронной почты (e)',
    ],[
        'git config',
        'Просмотр всех опций гита',
    ],[
        'git config --list',
        'Просмотр всех конфигураций',
    ],[
        'git commit --help',
        'Перенаправление на страницу мануала в браузере',
    ],
    // Работа
    [
        'git init',
        'Инициализация выбраной в git',
    ],[
        'git status',
        'Позволяет увидеть в каком статусе находится наш репозиторий',
    ],[
        'branch master',
        'Главная ветка',
    ],[
        'git add .',
        'Закомитить все файлы',
    ]
];