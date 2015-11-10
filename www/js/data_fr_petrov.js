/***************************************
* Урок 1
 ***************************************/
var fr_1_petrov = [
    [
        'eau',
        'о (буквосочетание)',
        /^\s*eau\s*$/,
        /^\s*о\s*$/
    ],[
        'ou',
        'у (буквосочетание)',
        /^\s*ou\s*$/,
        /^\s*у\s*$/
    ],[
        'ch',
        'ш (буквосочетание)',
        /^\s*ch\s*$/,
        /^\s*ш\s*$/
    ],[
        'parler',
        'говорить',
        /^\s*parler\s*$/,
        /^\s*говорить\s*$/
    ],[
        'manger',
        'есть, кушать',
        /^\s*manger\s*$/,
        /^\s*есть|кушать\s*$/
    ],[
        'chanter',
        'петь',
        /^\s*chanter\s*$/,
        /^\s*петь\s*$/
    ],[
        'penser',
        'думать',
        /^\s*penser\s*$/,
        /^\s*думать\s*$/
    ],[
        'danser',
        'танцевать',
        /^\s*danser\s*$/,
        /^\s*танцевать|плясать\s*$/
    ],[
        'chercher',
        'искать',
        /^\s*chercher\s*$/,
        /^\s*искать\s*$/
    ],[
        'trouver',
        'находить',
        /^\s*trouver\s*$/,
        /^\s*находить\s*$/
    ],[
        'aimer',
        'любить',
        /^\s*aimer\s*$/,
        /^\s*любить\s*$/
    ],[
        'écouter',
        'слушать',
        /^\s*écouter\s*$/,
        /^\s*слушать\s*$/
    ],[
        'quitter',
        'покидать',
        /^\s*quitter\s*$/,
        /^\s*покидать|уходить|уезжать\s*$/
    ],[
        'ordinateur',
        'компьютер',
        /^\s*ordinateur\s*$/,
        /^\s*компьютер\s*$/
    ],[
        'Je vais travailler.',
        'Я буду работать.',
        /^\s*(J|j)e vais travailler(\.)?\s*$/,
        /^\s*Я буду работать\.\s*$/
    ],[
        'Est-ce que tu vas aimer?',
        'Ты полюбишь?',
        /^\s*(Est-ce que )?(t|T)u vas aimer\?\s*$/,
        /^\s*Ты полюбишь\?\s*$/
    ],[
        'Est-ce que il va étudier?',
        'Он будет учиться?',
        /^\s*(Est-ce que )?(i|I)l va étudier\?\s*$/,
        /^\s*Он будет учиться?\s*$/
    ],[
        'Nous allons voyager.',
        'Мы будем путешествовать.',
        /^\s*(N|n)ous allons voyager\.?\s*$/,
        /^\s*Мы будем путешествовать.\s*$/
    ],[
        'Est-ce que elle va parler?',
        'Она будет говорить?',
        /^\s*(Est-ce que )?(E|e)lle va parler\?\s*$/,
        /^\s*Она будет говорить\?\s*$/
    ],[
        'Je ne vais pas manger.',
        'Я не буду есть.',
        /^\s*(J|j)e ne vais pas manger(\.)?\s*$/,
        /^\s*Я не буду есть\.\s*$/
    ],[
        'Ils vont habiter.',
        'Они будут жить.',
        /^\s*(I|i)ls vont habiter(\.)?\s*$/,
        /^\s*Они будут жить\.\s*$/
    ],[
        'Est-ce que vous aimez?',
        'Вы любите?',
        /^\s*(Est-ce que )?(V|v)ous aimez\?\s*$/,
        /^\s*Вы любите\?\s*$/
    ],[
        'Est-ce que tu vas parler?',
        'Ты будешь говорить?',
        /^\s*(Est-ce que )?(T|t)u vas parler\?\s*$/,
        /^\s*Ты будешь говорить\?\s*$/
    ],[
        'Est-ce que vous allez manger?',
        'Вы будете есть?.',
        /^\s*(Est-ce que )?(V|v)ous allez manger\?\s*$/,
        /^\s*Вы будете есть\?\s*$/
    ],[
        'J\'ai pensé.',
        'Я думал.',
        /^\s*(J|j)\'ai pensé(\.)?\s*$/,
        /^\s*Я думал.\s*$/
    ],[
        'Est-ce que tu as voyagé?',
        'Ты путешествовал?',
        /^\s*(Est-ce que )?(T|t)u as voyagé\?\s*$/,
        /^\s*Ты путешествовал\?\s*$/
    ],[
        'Il a étudié.',
        'Он учился.',
        /^\s*(I|i)l a étudié(\.)?\s*$/,
        /^\s*Он учился.\s*$/
    ],[
        'Est-ce que vous avez travaillé?',
        'Вы работали?',
        /^\s*(Est-ce que )?(V|v)ous avez travaillé\?\s*$/,
        /^\s*Вы работали?\s*$/
    ],[
        'Est-ce que nous avons parlé?',
        'Мы говорили?',
        /^\s*(Est-ce que )?(N|n)ous avons parlé\?\s*$/,
        /^\s*Мы говорили\?\s*$/
    ],[
        'Ils n\'ont pas aimé.',
        'Они не любили.',
        /^\s*(I|i)ls n\'ont pas aimé(\.)?\s*$/,
        /^\s*Они не любили.\s*$/
    ],[
        'Il a mangé.',
        'Он ел.',
        /^\s*(I|i)l a mangé(\.)?\s*$/,
        /^\s*Он ел.\s*$/
    ],[
        'Nous avons étudié.',
        'Мы учились.',
        /^\s*(N|n)ous avons étudié\.\s*$/,
        /^\s*Мы учились.\s*$/
    ],[
        'Il a habité.',
        'Он жил.',
        /^\s*(I|i)l a habité\.\s*$/,
        /^\s*Он жил.\s*$/
    ],[
        'J\'ai travaillé.',
        'Я работала.',
        /^\s*(J|j)\'ai travaillé\.\s*$/,
        /^\s*Я работала.\s*$/
    ],[
        'Bonjour!',
        'Добрый день!',
        /^\s*(B|b)onjour(\!)?\s*$/,
        /^\s*Добрый день!\s*$/
    ],[
        'Salut!',
        'Привет!',
        /^\s*(S|s)alut(\!)?\s*$/,
        /^\s*Привет!\s*$/
    ],[
        'Comment tu t\'appelles?',
        'Как тебя зовут?',
        /^\s*(C|c)omment (tu t\'appelles|t\'appelles tu)\?\s*$/,
        /^\s*Как тебя зовут?\s*$/
    ],[
        'Je m\'appelle Rouslan.',
        'Меня зовут Руслан.',
        /^\s*(J|j)e m\'appelle Rouslan\.\s*$/,
        /^\s*Меня зовут Руслан.\s*$/
    ],[
        'Je vous en prie.',
        'Пожалуйста. (вежливый ответ)',
        /^\s*(J|j)e vous en prie\.?\s*$/,
        /^\s*Пожалуйста. (вежливый ответ)\s*$/
    ],[
        'S\'il vous plaît.',
        'Пожалуйста. (в просьбе на "вы")',
        /^\s*(S|s)\'il vous plaît\.?\s*$/,
        /^\s*Пожалуйста. (в просьбе на "вы")\s*$/
    ],[
        'Comment ça va?',
        'Как у тебя дела?',
        /^\s*(C|c)omment ça va\?\s*$/,
        /^\s*Как у тебя дела?\s*$/
    ],[
        'Merci, ça va bien.',
        'Спасибо, хорошо.',
        /^\s*(M|m)erci\, ça va bien\.?\s*$/,
        /^\s*Спасибо, хорошо.\s*$/
    ],[
        'Bonne nuit.',
        'Доброй ночи.',
        /^\s*(B|b)onne nuit\.?\s*$/,
        /^\s*Доброй ночи.\s*$/
    ],[
        'Bone voyage!',
        'Счастливого пути!',
        /^\s*(B|b)one voyage\!?\s*$/,
        /^\s*Счастливого пути!\s*$/
    ],[
        'Salut!',
        'Пока!',
        /^\s*(S|s)alut\!?\s*$/,
        /^\s*Пока!\s*$/
    ],[
        'Il n\'a pas parlé.',
        'Он не говорил.',
        /^\s*(I|i)l n\'a pas parlé\.?\s*$/,
        /^\s*Он не говорил.\s*$/
    ],[
        'Il va parler.',
        'Он будет говорить.',
        /^\s*(I|i)l va parler\.?\s*$/,
        /^\s*Он будет говорить.\s*$/
    ],[
        'Je parle.',
        'Я говорю.',
        /^\s*(J|j)e parle\.?\s*$/,
        /^\s*Я говорю.\s*$/
    ],[
        'Nous ne parlons pas.',
        'Мы не говорим.',
        /^\s*(N|n)ous ne parlons pas\.?\s*$/,
        /^\s*Мы не говорим.\s*$/
    ],[
        'Est-ce que tu as parlé?',
        'Ты говорил?',
        /^\s*(Est-ce que )?(T|t)u as parlé\?\s*$/,
        /^\s*Ты говорил?\s*$/
    ],[
        'Est-ce que tu parles?',
        'Ты говоришь?',
        /^\s*(Est-ce que )?(T|t)u parles\?\s*$/,
        /^\s*Ты говоришь?\s*$/
    ],[
        'Est-ce que vous parlez?',
        'Вы говорите?',
        /^\s*(Est-ce que )?(V|v)ous parlez\?\s*$/,
        /^\s*Вы говорите?\s*$/
    ],[
        'Il a parlé.',
        'Он говорил.',
        /^\s*(I|i)l a parlé\.?\s*$/,
        /^\s*Он говорил.\s*$/
    ],[
        'Ils ont parlé.',
        'Они говорили.',
        /^\s*(I|i)ls ont parlé\.?\s*$/,
        /^\s*Они говорили.\s*$/
    ],[
        'Est-ce que tu penses?',
        'Ты думаешь?',
        /^\s*(Est-ce que )?(T|t)u penses\?\s*$/,
        /^\s*Ты думаешь?\s*$/
    ],[
        'Est-ce que vous avez pensé?',
        'Вы думали?',
        /^\s*(Est-ce que )?(V|v)ous avez pensé\?\s*$/,
        /^\s*Вы думали?\s*$/
    ],[
        'Je pense.',
        'Я думаю.',
        /^\s*(J|j)e pense\.?\s*$/,
        /^\s*Я думаю.\s*$/
    ],[
        'Nous ne pensons pas.',
        'Мы не думаем.',
        /^\s*(N|n)ous ne pensons pas\.?\s*$/,
        /^\s*Мы не думаем.\s*$/
    ],[
        'Est-ce que tu as pensé?',
        'Ты думал?',
        /^\s*(Est-ce que )?(T|t)u as pensé\?\s*$/,
        /^\s*Ты думал?\s*$/
    ],[
        'Est-ce que vous allez penser?',
        'Вы подумаете?',
        /^\s*(Est-ce que )?(V|v)ous allez penser\?\s*$/,
        /^\s*Вы подумаете?\s*$/
    ],[
        'Ils n\'ont pas pensé.',
        'Они не подумали.',
        /^\s*(I|i)ls n\'ont pas pensé\.?\s*$/,
        /^\s*Они не подумали.\s*$/
    ],[
        'Elle va penser.',
        'Она подумает.',
        /^\s*(E|e)lle va penser\.?\s*$/,
        /^\s*Она подумает.\s*$/
    ],[
        'Il ne va pas penser.',
        'Он не подумает.',
        /^\s*(I|i)l ne va pas penser\.?\s*$/,
        /^\s*Он не подумает.\s*$/
    ],[
        'Est-ce que tu habites?',
        'Ты живешь? Ты проживаешь?',
        /^\s*(Est-ce que )?(T|t)u habites\?\s*$/,
        /^\s*Ты живешь? Ты проживаешь?\s*$/
    ],[
        'Elle habite.',
        'Она живет. Она проживает.',
        /^\s*(E|e)lle habite\.?\s*$/,
        /^\s*Она живет. Она проживает.\s*$/
    ],[
        'Est-ce que vous allez habiter?',
        'Вы будете жить? Вы будете проживать?',
        /^\s*(Est-ce que )?(V|v)ous allez habiter\?\s*$/,
        /^\s*Вы будете жить? Вы будете проживать?\s*$/
    ],[
        'Ils n\'habitent pas.',
        'Они не живут. Они не проживают.',
        /^\s*(I|i)ls n\'habitent pas\.?\s*$/,
        /^\s*Они не живут. Они не проживают.\s*$/
    ],[
        'Est-ce que tu as habité?',
        'Ты жил? Ты проживал?',
        /^\s*(Est-ce que )?(T|t)u as habité\?\s*$/,
        /^\s*Ты жил? Ты проживал?\s*$/
    ],[
        'Vous n\'allez pas habiter.',
        'Вы не будете жить. Вы не будете проживать.',
        /^\s*(V|v)ous n\'allez pas habiter\.?\s*$/,
        /^\s*Вы не будете жить. Вы не будете проживать.\s*$/
    ],[
        'Nous n\'avons pas habité.',
        'Мы не жили. Мы не проживали.',
        /^\s*(N|n)ous n\'avons pas habité\.?\s*$/,
        /^\s*Мы не жили. Мы не проживали.\s*$/
    ],[
        'Il a habité.',
        'Он жил. Он проживал.',
        /^\s*(I|i)l a habité\.?\s*$/,
        /^\s*Он жил. Он проживал.\s*$/
    ],[
        'Je vais habiter.',
        'Я буду жить. Я буду проживать.',
        /^\s*(J|j)e vais habiter\.?\s*$/,
        /^\s*Я буду жить. Я буду проживать.\s*$/
    ],[
        'Elle ne travaille pas.',
        'Она не работает.',
        /^\s*(E|e)lle ne travaille pas\.?\s*$/,
        /^\s*Она не работает.\s*$/
    ],[
        'Est-ce que tu travailles?',
        'Ты работаешь?',
        /^\s*(Est-ce que )?(T|t)u travailles\?\s*$/,
        /^\s*Ты работаешь?\s*$/
    ],[
        'Il travaille.',
        'Он работает.',
        /^\s*(I|i)l travaille\.?\s*$/,
        /^\s*Он работает.\s*$/
    ],[
        'Je travaille.',
        'Я работаю.',
        /^\s*(J|j)e travaille\.?\s*$/,
        /^\s*Я работаю.\s*$/
    ],[
        'Est-ce que vous avez travaillé?',
        'Вы работали?',
        /^\s*(Est-ce que )?(V|v)ous avez travaillé\?\s*$/,
        /^\s*Вы работали?\s*$/
    ],[
        'Je n\'ai pas travaillé.',
        'Я не работал.',
        /^\s*(J|j)e n\'ai pas travaillé\.?\s*$/,
        /^\s*Я не работал.\s*$/
    ],[
        'Est-ce que tu as travaillé?',
        'Ты работал?',
        /^\s*(Est-ce que )?(T|t)u as travaillé\?\s*$/,
        /^\s*Ты работал?\s*$/
    ],[
        'Est-ce que vous travaillez?',
        'Вы работаете?',
        /^\s*(Est-ce que )?(V|v)ous travaillez\?\s*$/,
        /^\s*Вы работаете?\s*$/
    ],[
        'Nous n\'allons pas travailler.',
        'Мы не будем работать.',
        /^\s*(N|n)ous n\'allons pas travailler\.?\s*$/,
        /^\s*Мы не будем работать.\s*$/
    ],[
        'Est-ce que tu aimes?',
        'Ты любишь?',
        /^\s*(Est-ce que )?(T|t)u aimes\?\s*$/,
        /^\s*Ты любишь?\s*$/
    ],[
        'Est-ce que vous aimez?',
        'Вы любите?',
        /^\s*(Est-ce que )?(V|v)ous aimez\?\s*$/,
        /^\s*Вы любите?\s*$/
    ],[
        'J\'aime.',
        'Я люблю.',
        /^\s*(J|j)\'aime\.?\s*$/,
        /^\s*Я люблю.\s*$/
    ],[
        'Nous aimons.',
        'Мы любим.',
        /^\s*(N|n)ous aimons\.?\s*$/,
        /^\s*Мы любим.\s*$/
    ],[
        'Elle n\'aime pas.',
        'Она не любит.',
        /^\s*(E|e)lle n\'aime pas\.?\s*$/,
        /^\s*Она не любит.\s*$/
    ],[
        'Est-ce que tu as aimé?',
        'Ты любил?',
        /^\s*(Est-ce que )?(T|t)u as aimé\?\s*$/,
        /^\s*Ты любил?\s*$/
    ],[
        'Est-ce que vous avez aimé?',
        'Вы любили?',
        /^\s*(Est-ce que )?(V|v)ous avez aimé\?\s*$/,
        /^\s*Вы любили?\s*$/
    ],[
        'Ils ont aimé.',
        'Они любили.',
        /^\s*(I|i)ls ont aimé\.?\s*$/,
        /^\s*Они любили.\s*$/
    ],[
        'Il a aimé.',
        'Он любил.',
        /^\s*(I|i)l a aimé\.?\s*$/,
        /^\s*Он любил.\s*$/
    ],[
        'Est-ce que vous allez voyager?',
        'Вы будете путешествовать?',
        /^\s*(Est-ce que )?(V|v)ous allez voyager\?\s*$/,
        /^\s*Вы будете путешествовать?\s*$/
    ],[
        'Est-ce que tu as voyagé?',
        'Ты путешествовал?',
        /^\s*(Est-ce que )?(T|t)u as voyagé\?\s*$/,
        /^\s*Ты путешествовал?\s*$/
    ],[
        'Est-ce que vous avez voyagé?',
        'Вы путешествовали?',
        /^\s*(Est-ce que )?(V|v)ous avez voyagé\?\s*$/,
        /^\s*Вы путешествовали?\s*$/
    ],[
        'Ils ont voyagé.',
        'Они путешествовали.',
        /^\s*(I|i)ls ont voyagé\.?\s*$/,
        /^\s*Они путешествовали.\s*$/
    ],[
        'Elle a voyagé.',
        'Она путешествовала.',
        /^\s*(E|e)lle a voyagé\.?\s*$/,
        /^\s*Она путешествовала.\s*$/
    ],[
        'Je vais voyager.',
        'Я буду путешествовать.',
        /^\s*(J|j)e vais voyager\.?\s*$/,
        /^\s*Я буду путешествовать.\s*$/
    ],[
        'Est-ce que tu voyages?',
        'Ты путешествуешь?',
        /^\s*(Est-ce que )?(T|t)u voyages\?\s*$/,
        /^\s*Ты путешествуешь?\s*$/
    ],[
        'Vous voyagez.',
        'Вы путешествуете.',
        /^\s*(V|v)ous voyagez\.?\s*$/,
        /^\s*Вы путешествуете.\s*$/
    ],[
        'Il n\'a pas voyagé.',
        'Он не путешествовал.',
        /^\s*(I|i)l n\'a pas voyagé\.?\s*$/,
        /^\s*Он не путешествовал.\s*$/
    ],[
        'J\'étudie.',
        'Я учусь.',
        /^\s*(J|j)\'étudie\.?\s*$/,
        /^\s*Я учусь.\s*$/
    ],[
        'Il n\'étudie pas.',
        'Он не учится.',
        /^\s*(I|i)l n\'étudie pas\.?\s*$/,
        /^\s*Он не учится.\s*$/
    ],[
        'Est-ce que elle va étudier?',
        'Она будет учиться?',
        /^\s*(Est-ce que )?(E|e)lle va étudier\?\s*$/,
        /^\s*Она будет учиться?\s*$/
    ],[
        'Tu ne vas pas étudier.',
        'Ты не будешь учиться.',
        /^\s*(T|t)u ne vas pas étudier\.?\s*$/,
        /^\s*Ты не будешь учиться.\s*$/
    ],[
        'Nous avons étudié.',
        'Мы учились.',
        /^\s*(N|n)ous avons étudié\.?\s*$/,
        /^\s*Мы учились.\s*$/
    ],[
        'Ils n\'ont pas étudié.',
        'Они не учились.',
        /^\s*(I|i)ls n\'ont pas étudié\.?\s*$/,
        /^\s*Они не учились.\s*$/
    ],[
        'Ils étudient.',
        'Они учатся.',
        /^\s*(I|i)ls étudient\.?\s*$/,
        /^\s*Они учатся.\s*$/
    ],[
        'Est-ce que nous étudions?',
        'Мы учимся?',
        /^\s*(Est-ce que )?(N|n)ous étudions\?\s*$/,
        /^\s*Мы учимся?\s*$/
    ],[
        'Est-ce que elle a étudié?',
        'Она училась?',
        /^\s*(Est-ce que )?(E|e)lle a étudié\?\s*$/,
        /^\s*Она училась?\s*$/
    ],[
        'Je mange.',
        'Я ем.',
        /^\s*(J|j)e mange\.?\s*$/,
        /^\s*Я ем.\s*$/
    ],[
        'Est-ce que tu manges?',
        'Ты ешь?',
        /^\s*(Est-ce que )?(T|t)u manges\?\s*$/,
        /^\s*Ты ешь?\s*$/
    ],[
        'Nous n\'avons pas mangé.',
        'Мы не поели.',
        /^\s*(N|n)ous n\'avons pas mangé\.?\s*$/,
        /^\s*Мы не поели.\s*$/
    ],[
        'Il ne va pas manger.',
        'Он не будет есть.',
        /^\s*(I|i)l ne va pas manger\.?\s*$/,
        /^\s*Он не будет есть.\s*$/
    ],[
        'Ils vont manger.',
        'Они будут есть.',
        /^\s*(I|i)ls vont manger\.?\s*$/,
        /^\s*Они будут есть.\s*$/
    ],[
        'Est-ce que vous avez manger?',
        'Вы поели?',
        /^\s*(Est-ce que )?(V|v)ous avez manger\?\s*$/,
        /^\s*Вы поели?\s*$/
    ],[
        'Il ne mange pas.',
        'Он не ест.',
        /^\s*(I|i)l ne mange pas\.?\s*$/,
        /^\s*Он не ест.\s*$/
    ],[
        'Est-ce que nous allons manger?',
        'Мы будем есть?',
        /^\s*(Est-ce que )?(N|n)ous allons manger\?\s*$/,
        /^\s*Мы будем есть?\s*$/
    ],[
        'Elle a mangé.',
        'Она поела.',
        /^\s*(E|e)lle a mangé\.?\s*$/,
        /^\s*Она поела.\s*$/
    ],[
        'Comment ça va? - ça va bien.',
        'Как дела? - Хорошо.',
        /^\s*Comment ça va\?\s*\-?\s*ça va bien\.\s*$/,
        /^\s*Как дела? - Хорошо.\s*$/
    ],[
        'Est-ce que ils vont voyager?',
        'Они будут путешествовать?',
        /^\s*(Est-ce que )?(I|i)ls vont voyager\?\s*$/,
        /^\s*Они будут путешествовать?\s*$/
    ],[
        'Elle n\'étudie pas.',
        'Она не учится.',
        /^\s*(E|e)lle n\'étudie pas\.?\s*$/,
        /^\s*Она не учится.\s*$/
    ],[
        'Vous allez habiter.',
        'Вы будете жить.',
        /^\s*(V|v)ous allez habiter\.?\s*$/,
        /^\s*Вы будете жить.\s*$/
    ],[
        'Elle n\'a pas travaillé.',
        'Она не работала.',
        /^\s*(E|e)lle n\'a pas travaillé\.?\s*$/,
        /^\s*Она не работала.\s*$/
    ],[
        'Vous allez penser.',
        'Вы подумаете.',
        /^\s*(V|v)ous allez penser\.?\s*$/,
        /^\s*Вы подумаете.\s*$/
    ],[
        'Il parle.',
        'Он говорит.',
        /^\s*(I|i)l parle\.?\s*$/,
        /^\s*Он говорит.\s*$/
    ],[
        'Ils n\'aiment pas.',
        'Они не любят.',
        /^\s*(I|i)ls n\'aiment pas\.?\s*$/,
        /^\s*Они не любят.\s*$/
    ],[
        'Tu n\'as pas voyagé.',
        'Ты не путешествовал.',
        /^\s*(T|t)u n\'as pas voyagé\.?\s*$/,
        /^\s*Ты не путешествовал.\s*$/
    ],[
        'Nous habitons.',
        'Мы живем.',
        /^\s*(N|n)ous habitons\.?\s*$/,
        /^\s*Мы живем.\s*$/
    ],[
        'Est-ce que vous allez étudier?',
        'Вы будете учиться?',
        /^\s*(Est-ce que )?(V|v)ous allez étudier\?\s*$/,
        /^\s*Вы будете учиться?\s*$/
    ],[
        'Elle ne va pas travailler.',
        'Она не будет работать.',
        /^\s*(E|e)lle ne va pas travailler\.?\s*$/,
        /^\s*Она не будет работать.\s*$/
    ],[
        'Bonjour.',
        'Добрый день.',
        /^\s*Bonjour.\s*$/,
        /^\s*Добрый день.\s*$/
    ],[
        'Bonne nuit.',
        'Доброй ночи.',
        /^\s*Bonne nuit.\s*$/,
        /^\s*Доброй ночи.\s*$/
    ],[
        'Je m\'appelle Marie.',
        'Меня зовут Мария.',
        /^\s*(J|j)e m\'appelle Marie\.?\s*$/,
        /^\s*Меня зовут Мария.\s*$/
    ],[
        'Nous avons mangé.',
        'Мы ели.',
        /^\s*(N|n)ous avons mangé\.?\s*$/,
        /^\s*Мы ели.\s*$/
    ]
];














/***************************************
* Урок 2
 ***************************************/














/***************************************
* Урок 3
 ***************************************/














/***************************************
* Урок 4
 ***************************************/














/***************************************
* Урок 5
 ***************************************/














/***************************************
* Урок 6
 ***************************************/














/***************************************
* Урок 7
 ***************************************/














/***************************************
* Урок 8
 ***************************************/














/***************************************
* Урок 9
 ***************************************/














/***************************************
* Урок 10
 ***************************************/














/***************************************
* Урок 11
 ***************************************/














/***************************************
* Урок 12
 ***************************************/














/***************************************
* Урок 13
 ***************************************/














/***************************************
* Урок 14
 ***************************************/














/***************************************
* Урок 15
 ***************************************/














/***************************************
* Урок 16
 ***************************************/