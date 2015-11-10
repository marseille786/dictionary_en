<?php include '../../inc/header.php'; ?>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li><a href="/">Иностранный</a></li>
            <li class="active"><a href="/category/programming/javascript.php">Программирование</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-pills">
            <li class="active"><a href="/category/programming/javascript.php">Javascript</a></li>
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
            <option value="js_1">JavaScript (Уровень 1)</option>
            <option value="js_2">JavaScript (Уровень 2)</option>
          </select>
        </div>
        
<?php include '../../inc/_footer.php'; ?>