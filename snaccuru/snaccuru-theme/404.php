<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package wave
 */

get_header(); ?>
</div><!-- #content -->
</div>

<div class="error-404-page">

	<div  class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="error-404 not-found">
				<header class="page-header" style="text-align: center;">
					<h1 ><?php esc_html_e( 'Oops! 404 Error...', 'wave' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-404" style="text-align: center;">
					<p><?php esc_html_e( 'Looks like you are on a wrong page!', 'wave' ); ?></p>
                    <div class="search-404">
<p><?php esc_html_e( 'Search something else', 'wave' ); ?><?php get_search_form(); ?></p>
                    </div>
                    
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<div class="line-404">
    <div class="main-page">
        <div class="copyright-txt"> 
            <a> A theme by <a class="copyright-txt-link" href="<?php echo "http://www.themebox.co.in" ?>">ThemeBox</a></a>
        </div>
   </div>
         </div>
