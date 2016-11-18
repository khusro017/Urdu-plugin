// JavaScript Document

var codes= new Array();
codes['a']=0x0627;
codes['b']=0x0628;
codes['c']=0x0686;
codes['d']=0x062F;
codes['e']=0x0639;
codes['f']=0x0641;
codes['g']=0x06AF;
codes['h']=0x06BE;
codes['i']=0x06CC;
codes['j']=0x062C;
codes['k']=0x06A9;
codes['l']=0x0644;
codes['m']=0x0645;
codes['n']=0x0646;
codes['o']=0x06C1;
codes['p']=0x067E;
codes['q']=0x0642;
codes['r']=0x0631;
codes['s']=0x0633;
codes['t']=0x062A;
codes['u']=0x0626;
codes['v']=0x0637;
codes['w']=0x0648;
codes['x']=0x0634;
codes['y']=0x06D2;
codes['z']=0x0632;

codes['A']=0x0622;
codes['C']=0x062B;
codes['D']=0x0688;
codes['E']=0x0651;
codes['F']=0x064D;
codes['G']=0x063A;
codes['H']=0x062D;
codes['I']=0x0670;
codes['J']=0x0636;
codes['K']=0x062E;
codes['L']=0x0628;
codes['M']=0x064B;
codes['N']=0x06BA;
codes['O']=0x06C3;
codes['P']=0x064F;
codes['R']=0x0691;
codes['S']=0x0635;
codes['T']=0x0679;
codes['U']=0x0621;
codes['V']=0x0638;
codes['W']=0x0624;
codes['X']=0x0698;
codes['Y']=0x0601; //0x0656;
codes['Z']=0x0630;

codes['>']=0x0650;
codes['<']=0x064E;
codes['String.fromCharCode(32)']=32;
codes[' ']=32;
codes['13']=13;
codes[':']=0x061B;
codes[';']=0x061B;
codes[String.fromCharCode(39)]=0x2018;
codes[String.fromCharCode(34)]=0x201C;
codes[String.fromCharCode(46)]=0x06D4;
codes[String.fromCharCode(44)]=0x060C;
codes['!']= 0x0021;
codes['?']=0x061F;
codes[':']=58;

//codes['[']=0x0654;
//codes[']']=0x0655;
codes['[']=0x201C;
codes[']']=0x201D;
codes['{']=0x2018;
codes['}']=0x2019;
codes['~']=0x0653;
codes['^']=0x0652;
codes['/']=0x002F;
codes['\\']=0x060E;
codes['L']=0x064C;
codes['+']=0x002B;
codes['-']=0x002D;
codes['_']=0x0640;
codes['*']=0x00D7;
codes[String.fromCharCode(47)]=0x00F7;
codes[String.fromCharCode(37)]=0x066A;
codes['(']=0x0028;
codes[')']=0x0029;
codes['=']=0x003D;
codes['´']=0x0657;

codes['0']=0x0660;
codes['1']=0x0661;
codes['2']=0x0662;
codes['3']=0x0663;
codes['4']=0x0664;
codes['5']=0x0665;
codes['6']=0x0666;
codes['7']=0x0667;
codes['8']=0x0668;
codes['9']=0x0669;

var caretPos = 0;
function input_text(e, id){	
		var input = document.getElementById(id); 
		var caretPos = input.selectionStart;

		var val = $('#'+id).val();
		var charCode;
		
		if(e == 'bspace')
			charCode = 8;
		else
			charCode = e.charCodeAt();
		
		//console.log(charCode);
		
			
		if( (charCode==37) || (charCode==39) ||  (charCode==38)|| (charCode==40)|| (charCode==33) || (charCode==34)  )
			return;
		
		//backspace
		else if(charCode==8){
			console.log(caretPos);
			if(caretPos != 0){
				var oldtxt = [val.slice(0, caretPos-1),val.slice(caretPos)].join('');
							
				$('#'+id).val('');
				$('#'+id).val(oldtxt);
				setCaretPosition(id, caretPos-1);
			}
			return;
		}
		else{
			var newVal = String.fromCharCode(codes[e]);
			$('#'+id).val('');
			var latval = [val.slice(0, caretPos),newVal,val.slice(caretPos)].join('');
			$('#'+id).val(latval);
			setCaretPosition(id, caretPos+1);
			return;
		}
		
}

function setCaretPosition(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function callKey(obj){
	txtId = obj.id;

 	$( "#"+txtId ).keypress(function(e) {
 		
 		//console.log("#"+txtId);
	    var charCode = e.keyCode || e.charCode;
	   // console.log(charCode);
	    if(charCode > 122)
	    	return false;
		var whichASC = charCode ;
		var whichChar = $.trim(String.fromCharCode(whichASC)); // key's character
		var input = document.getElementById(txtId); 
		caretPos = input.selectionStart;
		
		if((charCode==9) || (charCode==13) || (charCode==8) || (charCode==37) || (charCode==32) || (charCode==39) ||  (charCode==38) || (charCode==40)|| (charCode==33) || (charCode==34)	) 
		return;
	
		e.keyCode= codes[whichChar];		
		var val = $( "#"+txtId ).val();
		e.preventDefault();
		//console.log(val);	
		var newVal = String.fromCharCode(codes[whichChar]);
		//alert(newVal);
		var latval = [val.slice(0, caretPos),newVal,val.slice(caretPos)].join('');
		$( "#"+txtId ).val('');
		$( "#"+txtId ).val(latval);
		//for setting
		setCaretPosition(txtId, caretPos+1);	
		return;
	});
}
function addKeyboard(kid, id)
{
	var html = '<map name="FPMap_'+id+'">';
	html += '<area shape="RECT" coords="4,4,26,22" href="Javascript:input_text(\'Z\',\''+id+'\')">';	
	html += '<area shape="RECT" coords="30,5,50,22" href="Javascript:input_text(\'D\',\''+id+'\')">';
	html += '<area shape="RECT" coords="53,4,72,21" href="Javascript:input_text(\'d\',\''+id+'\')">'; 
	html += '<area shape="RECT" coords="76,4,99,23" href="Javascript:input_text(\'K\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="103,4,123,23" href="Javascript:input_text(\'H\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="128,3,147,22" href="Javascript:input_text(\'c\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="153,3,172,22" href="Javascript:input_text(\'j\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="178,4,196,21" href="Javascript:input_text(\'C\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="201,4,222,22" href="Javascript:input_text(\'T\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="225,3,245,22" href="Javascript:input_text(\'t\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="251,3,272,23" href="Javascript:input_text(\'p\',\''+id+'\')">';
	html += '<area shape="RECT" coords="277,2,296,21" href="Javascript:input_text(\'b\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="305,2,320,23" href="Javascript:input_text(\'a\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="329,2,349,22" href="Javascript:input_text(\'A\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="4,27,24,45" href="Javascript:input_text(\'q\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="28,28,50,44" href="Javascript:input_text(\'f\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="54,27,71,46" href="Javascript:input_text(\'G\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="79,27,97,45" href="Javascript:input_text(\'e\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="104,26,123,45" href="Javascript:input_text(\'V\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="129,27,146,42" href="Javascript:input_text(\'v\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="153,26,172,44" href="Javascript:input_text(\'J\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="180,27,196,45" href="Javascript:input_text(\'S\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="203,27,221,45" href="Javascript:input_text(\'x\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="225,26,245,46" href="Javascript:input_text(\'s\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="252,26,272,44" href="Javascript:input_text(\'X\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="277,28,298,45" href="Javascript:input_text(\'z\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="302,27,320,46" href="Javascript:input_text(\'R\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="328,27,349,46" href="Javascript:input_text(\'r\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="4,51,23,69" href="Javascript:input_text(\'y\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="28,49,47,67" href="Javascript:input_text(\'i\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="54,51,72,67" href="Javascript:input_text(\'u\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="78,51,96,66" href="Javascript:input_text(\'h\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="104,49,121,66" href="Javascript:input_text(\'o\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="128,51,147,68" href="Javascript:input_text(\'U\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="152,49,171,68" href="Javascript:input_text(\'W\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="176,49,196,69" href="Javascript:input_text(\'w\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="203,51,220,68" href="Javascript:input_text(\'N\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="227,49,247,68" href="Javascript:input_text(\'n\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="253,48,272,68" href="Javascript:input_text(\'m\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="277,49,297,67" href="Javascript:input_text(\'l\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="301,50,320,67" href="Javascript:input_text(\'g\',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="326,48,349,69" href="Javascript:input_text(\'k\',\''+id+'\')">'; 
	html += '<area shape="RECT" coords="301,75,348,92" href="Javascript:input_text(\'13\',\''+id+'\')">';  
	html += '<area shape="RECT" coords="229,73,298,92" href="Javascript:input_text(\' \',\''+id+'\')"> '; 
	html += '<area shape="RECT" coords="155,74,223,91" href="Javascript:input_text(\'bspace\',\''+id+'\')">'; 
	html += '<area shape="RECT" coords="127,74,147,94" href="Javascript:input_text(\'-\',\''+id+'\')"></map>';
	html += '<IMG height="96" src="Keyboard_New.jpg" width="350" useMap="#FPMap_'+id+'" border="0">&nbsp;';
	jQuery('#'+kid).html(html);
}
function removeKeyboard(kid)
{
	jQuery('#'+kid).html('');
}
(function ( $ ){
	var method = '';
	var k_div = '';
	$.fn.addUrduEditor=function(options){
		//console.log(this);
		var id = this[0].id;
		//console.log(method);
		if(options.method)
		{
			this.attr(options.method, "callKey(this);");
			method = options.method;
		}
		else
			this.attr("onchange", "callKey(this);");
		
		if(options.style)
			this.attr("style", options.style);

		
		if(options.keyboard)
		{
			addKeyboard(options.keyboard_div, id);
			k_div = options.keyboard_div;
		}
	};
	$.fn.removeUrduEditor=function(){
		var id = this[0].id;
		this.attr(method, "");
		this.val("");
		this.attr("style", "display:none;");
		removeKeyboard(k_div);
	};
})(jQuery);