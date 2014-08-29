$(function(){
	var editor = CodeMirror.fromTextArea($("#txtInput").get(0), {
		value: "{}",
		theme: "monokai",
		autoCloseBrackets: true,
		matchBrackets: true,
		showCursorWhenSelecting: true,
		lineNumbers: true,
		mode: {name: "javascript", json: true}
	});
		
	function response($resp){
		var $respIndex;
		if ($resp['responseXML']) {
			$respIndex = 'responseXML';
		}
		else if ($resp['responseJSON']) {
			$respIndex = 'responseJSON';
		}
		else if ($resp['responseText']) {
			$('#output').hide();
			$('#iframe-html').show().contents().find('body').css({'background-color': '#ccc', 'color': '#000'}).html($resp['responseText']);
			return;	
		}
		
		$('#iframe-html').hide();
		$('#output').show().children().remove();
		if ($respIndex) {
			$('#output').prettify({highlight : true}, $resp[$respIndex]);
		}
		else {
			$('#output').prettify({highlight : true}, $resp);
		}
	}
	
	
	function sendRequest(e){
		var protocol, host, uri, params, url = '', data, type;
		
		//Prevent to be execute de default behavior
		e.preventDefault();
		
		protocol = $("#sltProtocol").val();
		host = $("#txtHost").val();
		uri = $("#txtUri").val();
		params = $("#txtParams").val().replace(/^[\?&]/, '');
		method = $("#sltMethod").val();
		
		//If the host is a empty string, the host must be omited		
		if (host !== '') {
			url += protocol + '://'+ host;
		}
		
		//Full url
		url += '/'+uri + "?" + APIClient.token + "&" + params
		
		//data to be send
		data = eval("(function(){ return "+editor.doc.getValue()+"; })()");
		data = data !== '' ? data : {};
		
		$.ajax({
			url: url,
			data: data,
			method: method
		}).complete(response);
		
	}
	$("#btnSend").on("click", sendRequest);
	$(".btnSendThis").on("click", sendRequest);
});