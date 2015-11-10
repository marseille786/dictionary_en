jQuery(document).ready(function(){

	var testArr = [];

	$('#startCheck').on('click', function(e){
		e.preventDefault();
		
		testArr = [];

		switch ($('#selectEnTrust').val()) {
			case ('regular_verbs'):
				checked(regular_verbs);
				break;
			case ('irregular_verbs'):
				checked(irregular_verbs);
				break;
			case ('pronouns'):
				checked(pronouns);
				break;
			case ('excuse'):
				checked(excuse);
				break;
			case ('questions'):
				checked(questions);
				break;
			case ('demonstrativeWords'):
				checked(demonstrativeWords);
				break;
			case ('etiquette'):
				checked(etiquette);
				break;
			case ('wordWeeds'):
				checked(wordWeeds);
				break;
			case ('otherWords'):
				checked(otherWords);
				break;
			// Петров
			case ('regular_verbs_petrov'):
				checked(regular_verbs);
				break;
			case ('irregular_verbs'):
				checked(irregular_verbs);
				break;
			case ('exsercice_1_petrov'):
				checked(exsercice_1);
				break;
			case ('en_2_petrov'):
				checked(en_2_petrov);
				break;
			case ('en_3_petrov'):
				checked(en_3_petrov);
				break;
			case ('en_4_petrov'):
				checked(en_4_petrov);
				break;
			case ('en_5_petrov'):
				checked(en_5_petrov);
				break;
			case ('en_6_petrov'):
				checked(en_6_petrov);
				break;
			case ('en_7_petrov'):
				checked(en_7_petrov);
				break;
			case ('fr_1_petrov'):
				checked(fr_1_petrov);
				break;
			// JavaScript
			case ('js_1'):
				checked(js_1);
				break;
			case ('js_2'):
				checked(js_2);
				break;
			case ('ajax'):
				checked(ajax);
				break;
			case ('undescore'):
				checked(undescore);
				break;
			case ('php_1'):
				checked(php_1);
				break;
			case ('bt_1'):
				checked(bt_1);
				break;
			case ('wp_1'):
				checked(wp_1);
				break;
		}
	});

});

function checked(elem) {
	testArr = elem.concat();	// Создаем тестовый массив

	var currentNumItem = Math.random(testArr.length) * (testArr.length-1);

	currentNumItem = Math.round(currentNumItem);		// Получаем случайный номер элемента массива

	var countQuestion = 0;
	var positiveAnswer = 0;
	var result = 0;

	var request_1 = ($('#lang-ru').is(':checked')) ? 1 : 0,
		request_2 = ($('#lang-ru').is(':checked')) ? 0 : 1,
		response_1 = ($('#lang-ru').is(':checked')) ? 2 : 3;
	
	$('#question').val(testArr[currentNumItem][request_1]);
	$('#balance').text(testArr.length);

	$('#help').on('click', function(){
		var ru = testArr[currentNumItem][request_1];
		var help = testArr[currentNumItem][request_2];
		countQuestion++;
		currentNumItem = Math.round(Math.random(testArr.length) * (testArr.length-1));
		$('#question').val(testArr[currentNumItem][request_1]);
		$('#fieldHelp').val('"' + ru + '" : "' + help + '"');
		result = Math.round((positiveAnswer / countQuestion) * 100);
		$('#result').text(result + "%");
	});

	$('#enterValue').on('click', function(e){
		e.preventDefault();
		calculate();
	});

	$('#answer').on('keydown', function(e){
		if (e.keyCode == 13 && e.ctrlKey) {
			e.preventDefault();
			calculate();
		}
	});

	function calculate() {
		// e.preventDefault();
		$('#fieldHelp').val('');	// Очищаем поле подсказки
		countQuestion++;			// Увеличиваем счетчик вопросов

		if (testArr.length > 0 && $('#answer').val()) {
			var currentAnswer = $('#answer').val();
			var ru = testArr[currentNumItem][request_1];
			var help = testArr[currentNumItem][request_2];

			if (currentAnswer.search(testArr[currentNumItem][response_1]) != -1) {
				$('.positive').show();
				$('.negative').hide();
				positiveAnswer++;
				testArr.splice(currentNumItem, 1);
				currentNumItem = Math.round(Math.random(testArr.length) * (testArr.length-1));

				if (testArr.length > 0) {
					$('#question').val(testArr[currentNumItem][request_1]);
				} else {
					$('#question').val('');
				}
				
				$('#balance').text(testArr.length);
				$('#answer').val('');
			}
			else {

				pr('currentNumItem1: ' + currentNumItem + ' - ' + testArr[currentNumItem][response_1]);
				pr('currentNumItem2: ' + $('#answer').val());


				currentNumItem = Math.round(Math.random(testArr.length) * (testArr.length-1));

				$('#question').val(testArr[currentNumItem][request_1]);
				
				
				$('.positive').hide();
				$('.negative').show();
				$('#balance').text(testArr.length);
				$('#answer').val('');
				$('#fieldHelp').val('"' + ru + '" : "' + help + '"');
			}
		}

		result = Math.round((positiveAnswer / countQuestion) * 100);
		$('#result').text(result + "%");
	}

}

function pr(data) {
	console.log(data);
}
