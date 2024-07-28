$(function() {
		$('.libSelectBox a.youngsam').on('click', function() {
			$('div.calendar10').css('display','block');
			
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').addClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');		
		});

		$('.libSelectBox a.sadang').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','block');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').addClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

/*
		$('.libSelectBox a.sangdo').on('click', function() {
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','block');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');

			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').addClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
		});
*/

		$('.libSelectBox a.children').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','block');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').addClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.daebang').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','block');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').addClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.samter').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','block');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').addClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.yaksu').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','block');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').addClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.dawool').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','block');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').addClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.kuksabong').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','block');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').addClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.kkamang').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','block');
			$('div.calendar12').css('display','none');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').addClass('on');
			$('.libSelectBox a.sindaebang').removeClass('on');
		});

		$('.libSelectBox a.sindaebang').on('click', function() {
			$('div.calendar10').css('display','none');
			$('div.calendar1').css('display','none');
			$('div.calendar2').css('display','none');
			$('div.calendar3').css('display','none');
			$('div.calendar4').css('display','none');
			$('div.calendar5').css('display','none');
			$('div.calendar6').css('display','none');
			$('div.calendar7').css('display','none');
			$('div.calendar8').css('display','none');
			$('div.calendar9').css('display','none');
			$('div.calendar11').css('display','none');
			$('div.calendar12').css('display','block');

			$('.libSelectBox a.youngsam').removeClass('on');
			$('.libSelectBox a.sadang').removeClass('on');
			//$('.libSelectBox a.sangdo').removeClass('on');
			$('.libSelectBox a.children').removeClass('on');
			$('.libSelectBox a.daebang').removeClass('on');
			$('.libSelectBox a.samter').removeClass('on');
			$('.libSelectBox a.yaksu').removeClass('on');
			$('.libSelectBox a.dawool').removeClass('on');
			$('.libSelectBox a.kuksabong').removeClass('on');
			$('.libSelectBox a.kkamang').removeClass('on');
			$('.libSelectBox a.sindaebang').addClass('on');
		});


















		$('.libSelectBox2 a.allLib').on('click', function() {
			$('ul.t01').css('display','block');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').addClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.youngsam').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','block');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').addClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.sadang').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','block');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').addClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});


/*
		$('.libSelectBox2 a.sangdo').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			$('ul.t03').css('display','block');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			$('.libSelectBox2 a.sangdo').addClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
		});
*/

		$('.libSelectBox2 a.children').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','block');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').addClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.daebang').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','block');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').addClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.samter').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','block');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').addClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.yaksu').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','block');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').addClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.dawool').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','block');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').addClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.kuksabong').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','block');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').addClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.kkamang').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','block');
			$('ul.t12').css('display','none');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').addClass('on');
			$('.libSelectBox2 a.sindaebang').removeClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});

		$('.libSelectBox2 a.sindaebang').on('click', function() {
			$('ul.t01').css('display','none');
			$('ul.t02').css('display','none');
			//$('ul.t03').css('display','none');
			$('ul.t04').css('display','none');
			$('ul.t05').css('display','none');
			$('ul.t06').css('display','none');
			$('ul.t07').css('display','none');
			$('ul.t08').css('display','none');
			$('ul.t09').css('display','none');
			$('ul.t10').css('display','none');
			$('ul.t11').css('display','none');
			$('ul.t12').css('display','block');

			$('.libSelectBox2 a.allLib').removeClass('on');
			$('.libSelectBox2 a.youngsam').removeClass('on');
			$('.libSelectBox2 a.sadang').removeClass('on');
			//$('.libSelectBox2 a.sangdo').removeClass('on');
			$('.libSelectBox2 a.children').removeClass('on');
			$('.libSelectBox2 a.daebang').removeClass('on');
			$('.libSelectBox2 a.samter').removeClass('on');
			$('.libSelectBox2 a.yaksu').removeClass('on');
			$('.libSelectBox2 a.dawool').removeClass('on');
			$('.libSelectBox2 a.kuksabong').removeClass('on');
			$('.libSelectBox2 a.kkamang').removeClass('on');
			$('.libSelectBox2 a.sindaebang').addClass('on');
			
			$('.libSelectBox2 a').attr('title','');
			$(this).attr('title','선택됨');				
		});
});