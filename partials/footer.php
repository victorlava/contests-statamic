<section id="footer"> 
	<div class="row">
		<footer class="large-7 columns">
			<p>© 2015 VUID, Inc. All rights reserved. Powered By Victor Lava</p>
		</footer>
		<div class="large-5 columns">
			<ul class="footer__social inline-list">
				<li>
					<a href="#">
						<i class="fa fa-facebook"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-twitter"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-dribbble"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-behance"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-pinterest"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-google-plus"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</section>
 
<script type="text/javascript">
	$(document).ready(function(){
		$('.section__intro h1').addClass('animated bounceOutLeft');
	});
	$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
</script>
