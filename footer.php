<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Editor
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a class="powered-by" href="<?php echo esc_url( __( 'http://www.guahanweb.com', 'editor' ) ); ?>"><?php printf( __( 'Guahan Web', 'editor' ) ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( '&copy; Copyright %s &#8212; all rights reserved', 'editor' ), date('Y') ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
