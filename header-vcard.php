<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Editor
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Social Tags -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@guahanweb" />
<meta name="twitter:creator" content="@guahanweb" />
<meta property="og:url" content="https://www.guahanweb.com/garth/" />
<meta property="og:title" content="Garth Henson | whoami" />
<meta property="og:description" content="Garth is a Staff Software Engineer at The Walt Disney Company, working as the tech lead for an Emerging Tech team in Seattle." />
<meta property="og:image" content="https://www.guahanweb.com/wp-content/themes/guahanweb.com/images/me-square.jpg" />

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:300,400,700">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/wp-content/themes/guahanweb.com/css/vcard.css">
</head>
<body <?php body_class(); ?>>
