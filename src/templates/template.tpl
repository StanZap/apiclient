<div  class="container-fluid col-xs-12">
	<div class="row">
		<h3  class="col-md-12">API Test Client</h3>
	</div>
	<div class="row">
		<div class="col-md-6">
			<form role="form">
				<div class="form-group">
					<label for="sltProtocol">HTTP Method:</label>
					<select id="sltProtocol" default="GET" class="form-control">
						<option value="https">HTTPS</option>
						<option value="http">HTTP</option>
					</select>
				</div>
				<div class="form-group">
					<label for="txtHost">Host:</label>
					<input type="text" class="form-control" id="txtHost" value="">
				</div>
				<div class="form-group">
					<label for="txtUri">URI:</label>
					<input type="text" class="form-control" id="txtUri" value="{$uri}">
				</div>
				<div class="form-group">
					<label for="txtParams">Query String:</label>
					<input type="text" id="txtParams" class="form-control">
				</div>
			  
				<div class="form-group">
					<label for="sltMethod">HTTP Method:</label>
					<select id="sltMethod" default="GET" class="form-control">
						<option value="GET">GET</option>
						<option value="POST">POST</option>
						<option value="DELETE">DELETE</option>
					</select>
				</div>
				<div class="form-group">
					<label for="txtInput">Object to Send: </label>
					<textarea id="txtInput"></textarea>
				</div>
				<button class="btn btn-primary" id="btnSend">Send Request</button>
			</form>
		</div>
		<div class="col-md-6">
			<h4>API Response</h4>
			<div id="output">
				<div class="noresponseyet"> // Aun no se ha realziado un request.</div>
				<!-- Aqui va el resultado del request -->
			</div>
			<iframe id="iframe-html">
				
			</iframe>
		</div>
		<div id="lastest-requests" class="col-md-12">
			<div class="row">
				<h4>Requests history</h4>
				<div class="lastest-requests-collection col-md-12">
					{include file='requests-alert.tpl'}
				</div>
			</div>
		</div>
	</div>
</div>