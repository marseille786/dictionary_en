var wp_1 = [
    // Прочие функции. Регистрация script и style
    [
        'wp_enqueue_script(n, s)',
        '(Прочие функции. Регистрация script и style) Добавляет скрипт (n) по пути (s), только если он еще не был добавлен и другие скрипты от которых он зависит зарегистрированы. Зависимые скрипты добавляются автоматически.',
        /^\s*wp_enqueue_script\s*\(\s*n\s*,\s*s\s*\)\s*$/,
        '(Прочие функции. Регистрация script и style) Добавляет скрипт (n) по пути (s), только если он еще не был добавлен и другие скрипты от которых он зависит зарегистрированы. Зависимые скрипты добавляются автоматически.'
    ],[
        'wp_enqueue_style(n, s)',
        '(Прочие функции. Регистрация script и style) Если файл (n) с путем (s) не был предварительно зарегистрирован, то эта функция зарегистрирует файл и добавит его в очередь.',
        /^\s*wp_enqueue_style\s*\(\s*n\s*,\s*s\s*\)\s*$/,
        '(Прочие функции. Регистрация script и style) Если файл (n) с путем (s) не был предварительно зарегистрирован, то эта функция зарегистрирует файл и добавит его в очередь.'
    ],
    // Темы (шаблоны). Другие функции темы
    [
        'get_template_directory_uri()',
        '(Темы (шаблоны). Другие функции темы) Получает URL текущей темы. Учитывает SSL. Не учитывает наличие дочерней темы. Не содержит закрывающий слэш. Синоним get_bloginfo()',
        /^\s*get_template_directory_uri\s*\(\s*\)\s*$/,
        '(Темы (шаблоны). Другие функции темы) Получает URL текущей темы. Учитывает SSL. Не учитывает наличие дочерней темы. Не содержит закрывающий слэш. Синоним get_bloginfo()'
    ],[
        'bloginfo("template_url")',
        '(Темы (шаблоны). Другие функции темы) Выводит на экран различную информацию о блоге. URL директории текущей темы',
        /^\s*bloginfo\s*\(\s*[\"\']template_url[\"\']\s*\)\s*$/,
        '(Темы (шаблоны). Другие функции темы) Выводит на экран различную информацию о блоге. URL директории текущей темы'
    ],[
        'bloginfo("name")',
        '(Темы (шаблоны). Другие функции темы) Выводит на экран различную информацию о блоге. Название блога',
        /^\s*bloginfo\s*\(\s*[\"\']name[\"\']\s*\)\s*$/,
        '(Темы (шаблоны). Другие функции темы) Выводит на экран различную информацию о блоге. Название блога'
    ],
    // Темы (шаблоны). Другие функции темы
    [
        'wp_head()',
        '(Темы (шаблоны). Другие функции темы) Запускает хук-действие. Вызывается в шапке сайта, файл: header.php',
        /^\s*wp_head\s*\(\s*\)\s*$/,
        '(Темы (шаблоны). Другие функции темы) Запускает хук-действие. Вызывается в шапке сайта, файл: header.php'
    ],[
        'wp_footer()',
        '(Темы (шаблоны). Другие функции темы) Функция запускает хук  - один из основных хуков, без которого не будут работать многие плагины. Вызывается в подвале шаблона, файл: footer.php',
        /^\s*wp_footer\s*\(\s*\)\s*$/,
        '(Темы (шаблоны). Другие функции темы) Функция запускает хук  - один из основных хуков, без которого не будут работать многие плагины. Вызывается в подвале шаблона, файл: footer.php'
    ],
    // Темы (шаблоны). Подключение файлов
    [
        'get_header()',
        '(Темы (шаблоны). Подключение файлов) Подключает файл шаблона header.php (шапку). Если передан параметр $name, то будет подключен файл header-{name}.php.',
        /^\s*get_header\s*\(\s*\)\s*$/,
        '(Темы (шаблоны). Подключение файлов) Подключает файл шаблона header.php (шапку). Если передан параметр $name, то будет подключен файл header-{name}.php.'
    ],[
        'get_sidebar()',
        '(Темы (шаблоны). Подключение файлов) Подключает файл шаблона sidebar.php (сайдбар). Если передан параметр $name, то будет подключен файл sidebar-{name}.php',
        /^\s*get_sidebar\s*\(\s*\)\s*$/,
        '(Темы (шаблоны). Подключение файлов) Подключает файл шаблона sidebar.php (сайдбар). Если передан параметр $name, то будет подключен файл sidebar-{name}.php'
    ],[
        'get_footer()',
        '(Темы (шаблоны). Подключение файлов) Подключает файл footer.php из шаблона (темы). Если указано имя в параметре, то будет подключен файл: footer-{name}.php из шаблона темы.',
        /^\s*get_footer\s*\(\s*\)\s*$/,
        '(Темы (шаблоны). Подключение файлов) Подключает файл footer.php из шаблона (темы). Если указано имя в параметре, то будет подключен файл: footer-{name}.php из шаблона темы.'
    ],
    // Плагины, Фильтры (API). Действия (хуки)
    [
        'add_action()',
        '(Плагины, Фильтры (API). Действия (хуки)) Регистрирует хук-событие (a). Заставляет указанную PHP функцию (f) сработать в определенное событие (действие - action) (a)',
        /^\s*add_action\s*\(\s*\)\s*$/,
        '(Плагины, Фильтры (API). Действия (хуки)) Регистрирует хук-событие (a). Заставляет указанную PHP функцию (f) сработать в определенное событие (действие - action) (a)'
    ],
    // Хуки, экшены
    [
        'wp_enqueue_scripts',
        '(Хуки, экшены) Событие для подключения скриптов и стилей',
        /^\s*wp_enqueue_scripts\s*$/,
        '(Хуки, экшены) Событие для подключения скриптов и стилей'
    ]
];