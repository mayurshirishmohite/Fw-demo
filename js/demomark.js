(function(d) {
	var id = 'fw-environment-marker';
	var text = '<span class="glyphicon glyphicon-remove-circle"></span> Test environment!';
	var style = 'margin:0;'
		+ 'padding:6px 12px;'
		+ 'font-size:16px;'
		+ 'font-family:sans-serif;'
		+ 'display:inline-block;'
		+ 'position:fixed;'
		+ 'top: 0;'
		+ 'right:0;'
		+ 'background:#352e2e;'
		+ 'color:#fbf700;'
		+ 'font-weight:bold;'
		+ 'text-align:center;'
		+ 'line-height:1.1;';
		
	var e = d.createElement('div');
	e.id = id;
	e.innerHTML = '<div style="' + style + '">' + text + '</div>';
	d.body.appendChild(e);

	$('#fw-environment-marker').click(function(){
		$("#fw-environment-marker").hide(600);
	});
})(document);
