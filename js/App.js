Vue.component('app-nav', {
	template: `
		<nav class="navbar navbar-light bg-light">
      		<a class="navbar-brand" href="#">
        		<img src="img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        		Programer
      		</a>
     	</nav>
	`;
});
var app = new Vue({
	el: '#app',
	data: {
		message: 'Im working!'
	}
});