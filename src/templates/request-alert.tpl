{foreach from=$requests item='r'}
<div class="request alert alert-success ">
	<span class="method">[{$r.method}]</span>
	<span class="protocol">{$r.protocol}</span>
	<span>://</span>
	<span class="host">{$r.host}</span>
	<span class="uri">{$r.uri}</span>
	<span class="querystring">{$r.querystring}</span>
	<div class="btn-group btn-group-sm">
		<button class="btn btn-default" id="btnEdit"><i class="glyphicon glyphicon-edit"></i> Edit</button>
		<button class="btn btn-default" id="btnSend"><i class="glyphicon glyphicon-send"></i> Send</button>
		<button class="btn btn-default" id="btnSend"><i class="glyphicon glyphicon-remove-circle"></i> Delete</button>
	</div>
</div>
{/foreach}