<?php include '../../inc/header.php'; ?>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li class="active"><a href="/">Иностранный</a></li>
            <li><a href="/category/programming/javascript.php">Javascript</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-pills">
            <li><a href="/">Английский</a></li>
            <li class="active"><a href="/category/languages/en_petrov.php">Английский (Петров)</a></li>
          </ul>
        </div>
      </div>      
      <div class="row">
        <div class="col-md-12">
          <p>Язык вопроса: 
            <label for="lang-ru">Русский</label> <input type="radio" id="lang-ru" name="language" value="ru" checked="checked" disabled="disabled">
            <label for="lang-en">English</label> <input type="radio" id="lang-en" name="language" value="en" disabled="disabled">
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <select name="selectEnTrust" id="selectEnTrust" class="form-control">
            <option value="regular_verbs_petrov">Правильные глаголы</option>
            <option value="irregular_verbs_petrov">Неправильные глаголы</option>
            <option value="exsercice_1_petrov">Упражнения 1</option>
            <option value="en_2_pronoun_petrov">Местоимения</option>
            <option value="en_2_question_words_petrov">Вопросительные слова</option>
            <option value="en_2_index_words_petrov">Указательные слова</option>
            <option value="en_2_petrov">Упражнения 2</option>
            <option value="en_3_petrov">Упражнения 3</option>
            <option value="en_4_petrov">Упражнения 4</option>
          </select>
        </div>
        
<?php include '../../inc/_footer.php'; ?>