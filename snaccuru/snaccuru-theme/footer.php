
    <footer id="footer">
      <div class="container">
        <nav class="nav nav-footer">
          <ul>
            <li><a>ABOUT</a></li>
            <li><a>SERVICE</a></li>
            <li><a>CREATORS</a></li>
            <li><a>PROCESS</a></li>
            <!-- <li><a>COMPANY</a></li> -->
          </ul>
        </nav>
        <div class="footer-logo">
          <a href="/"><img src="<?php echo get_template_directory_uri();?>/img/footer_logo.svg"></a>
          <p>Copyright © 2018 WaVE</p>
        </div>
      </div>
    </footer>

    <div id="lb-creator">
      <div class="lb" id="js-lb-content"></div>
      <a class="js-close-lb btn-close-lb"></a>
      <div id="loading">
        <img src="<?php echo get_template_directory_uri();?>/img/loading.gif">
      </div>
    </div>
  </div>

  <?php wp_footer(); ?>
</body>
</html>