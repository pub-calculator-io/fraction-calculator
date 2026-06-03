<?php
/*
Plugin Name: Fraction Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/fraction-calculator/
Description: Solve math problems instantly with our free online Fraction Calculator. Add, subtract, multiply, divide, and simplify fractions or mixed numbers with ease.
Version: 1.0.0
Author: www.calculator.io / Fraction Calculator
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: calcio_fraction_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Fraction Calculator by www.calculator.io";

function calcio_fraction_calculator_shortcode(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Fraction Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="calcio_fraction_calculator_iframe"></iframe></div>';
}


add_shortcode( 'calcio_fraction_calculator', 'calcio_fraction_calculator_shortcode' );