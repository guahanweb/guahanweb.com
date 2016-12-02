<?php
/**
 * Template Name: VCard Page
 *
 * The template for displaying personal "card"
 *
 * This is the template that displays the "business card" one-off
 * page that can be used for quick communication.
 *
 * @package guahanweb.com
 */

get_header('vcard');
$page = get_queried_object();
?>

<div id="page" class="container vcard">
    <header>
        <nav class="social">
            <ul>
                <li class="wordpress"><a href="/"><i class="fa fa-wordpress"></i></a></li>
                <li class="twitter"><a href="https://twitter.com/guahanweb" target="_blank"><i class="fa fa-twitter-square"></i></a></li>
                <li class="linkedin"><a href="https://linkedin.com/in/garthhenson" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                <li class="github"><a href="https://github.com/guahanweb" target="_blank"><i class="fa fa-github"></i></a></li>
            </ul>
        </nav>
        <h1>
            <span class="name">Garth Henson</span>
            <span class="role">Software Engineer &amp; Architect</span>
        </h1>
    </header>
    <div class="row about-me">
        <div class="col-md-12 clearfix">
            <h2 class="whoami">whoami</h2>
            <?php echo apply_filters('the_content', $page->post_content); ?>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 bio-section">
            <h2>Professional</h2>
            <section class="entry disney row">
                <div class="logo col-md-3"></div>
                <div class="content col-md-9">
                    <h3 class="title">The Walt Disney Company</h3>
                    <p>Currently acting as the technical lead for an
                    Emerging Tech team in Seattle, focusing on concepts
                    and feasibility in the 1-2 year timeframe.</p>
                    <div class="skills clearfix">
                        <span>node.js</span>
                        <span>IoT</span>
                        <span>React</span>
                        <span>UX</span>
                        <span>Management</span>
                    </div>
                </div>
            </section>
            <section class="entry amazon row">
                <div class="logo col-md-3"></div>
                <div class="content col-md-9">
                    <h3 class="title">Amazon.com</h3>
                    <p>Spanned two organizations during my time: both
                    platform and fulfillment. Worked directly to build
                    new UI to interface with numerous hardware components
                    for FC employees.</p>
                    <div class="skills clearfix">
                        <span>node.js</span>
                        <span>AWS</span>
                        <span>java</span>
                        <span>HCD</span>
                        <span>big data</span>
                    </div>
                </div>
            </section>
            <section class="entry synacor row">
                <div class="logo col-md-3"></div>
                <div class="content col-md-9">
                    <h3 class="title">Synacor, Inc.</h3>
                    <p>Worked on the CMS team to build portals for ISP's
                    around the globe. We essentially built code that
                    would build code!</p>
                    <div class="skills clearfix">
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>UX</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </section>
        </div>
        <div class="col-md-6 bio-section">
            <h2>Personal</h2>
            <div class="portrait"><div></div></div>
            <p>Garth had the amazing opportunity to be raised overseas on
            the island of Guam. Growing up in such a culturally diverse
            environment instilled in him a great love for people from an
            early age.</p>
            <p>He moved from Guam to South Carolina for college in the late
            '90s, married his beautiful bride, and worked his way from SC
            through Buffalo, NY before setting in the Seattle area, where
            he now lives with his wife and five children.</p>
            <p>When he is not writing code or tinkering with devices,
            Garth enjoys photography and music. He also spends a lot of
            time mentoring other engineers and speaking at meetups,
            conferences or other events whenever the opportunities arise.</p>
        </div>
    </div>
</div>

<?php get_footer('vcard'); ?>
