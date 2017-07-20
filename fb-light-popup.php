<?php
/*
Plugin Name: FB Light Popup Soleh.Net
Version:     1.0.6
Plugin URI:  http://soleh.net/fb-light-popup/
Description: A super fantastic way to increase facebook likes for your blog post. A facebook like & share box will pop up with the lightbox effect, only 3 seconds after the reader has finished reading, with friendly approach whether the reader like the post or not. This smart popup which never be annoying will be a surefire way to dramatically increase your likes & shares. Extremely easy to configure!
Author:      ImamKhalid
Author URI:  http://soleh.net/

License: GNU General Public License (GPL), v3 (or newer)
License URI: http://www.gnu.org/licenses/gpl-3.0.html
Tags:Related posts, related post with images
Copyright (c) 2014 ImamKhalid. All rights reserved.
 
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
*/

if (!defined('ABSPATH')) die("Aren't you supposed to come here via WP-Admin?");
if ( ! defined( 'WP_CONTENT_URL' ) ) define( 'WP_CONTENT_URL', get_option( 'siteurl' ) . '/wp-content' );
if ( ! defined( 'WP_CONTENT_DIR' ) ) define( 'WP_CONTENT_DIR', ABSPATH . 'wp-content' );
if ( ! defined( 'WP_PLUGIN_URL' ) ) define( 'WP_PLUGIN_URL', WP_CONTENT_URL. '/plugins' );

function fblpsn_options_page()
{
	if($_POST['fblpsn_save']){
		update_option('fblpsn_title',$_POST['fblpsn_title']);
		update_option('fblpsn_text',$_POST['fblpsn_text']);
		update_option('fblpsn_share_button',$_POST['fblpsn_share_button']);
		update_option('fblpsn_cancel_button',$_POST['fblpsn_cancel_button']);
		update_option('fblpsn_like_blog_title',$_POST['fblpsn_like_blog_title']);
		update_option('fblpsn_like_blog_desc',$_POST['fblpsn_like_blog_desc']);
		update_option('fblpsn_close_button',$_POST['fblpsn_close_button']);
		update_option('fblpsn_display_author',$_POST['fblpsn_display_author']);
		echo '<div class="updated"><p>Settings Updated!</p></div>';
	}
	if($_POST['fblpsn_default']){
		delete_option('fblpsn_title');
		delete_option('fblpsn_text');
		delete_option('fblpsn_share_button');
		delete_option('fblpsn_cancel_button');
		delete_option('fblpsn_like_blog_title');
		delete_option('fblpsn_like_blog_desc');
		delete_option('fblpsn_close_button');
		delete_option('fblpsn_display_author');
		echo '<div class="updated"><p>Reverted back to defaults!</p></div>';
	}
	if(!$fblpsn_title = get_option('fblpsn_title'))$fblpsn_title = "Like this post?";
	if(!$fblpsn_text = get_option('fblpsn_text'))$fblpsn_text = "Share this on Facebook!";
	if(!$fblpsn_share_button = get_option('fblpsn_share_button'))$fblpsn_share_button = "Share";
	if(!$fblpsn_cancel_button = get_option('fblpsn_cancel_button'))$fblpsn_cancel_button = "Nevermind";
	if(!$fblpsn_like_blog_title = get_option('fblpsn_like_blog_title'))$fblpsn_like_blog_title = "Want more like this?";
	if(!$fblpsn_like_blog_desc = get_option('fblpsn_like_blog_desc'))$fblpsn_like_blog_desc = "Like us on Facebook to get more!";
	if(!$fblpsn_close_button = get_option('fblpsn_close_button'))$fblpsn_close_button = "Close";
	$fblpsn_display_author = get_option('fblpsn_display_author');
	?>
	<div class="wrap">
	
	<h2>FB Light Popup Options</h2>ver 1.0.6
	<form method="post" id="smooth_scroll_options">
		<fieldset class="options">
		<legend>Select proper options according to your needs.</legend>
		<br /><br />
		<table class="form-table">
		
		<tr valign="top"> 
				<th width="33%" scope="row">Share Post Title:</th> 
				<td>
				<input type="text" maxlength="100" id="fblpsn_title" name="fblpsn_title" value="<?php echo $fblpsn_title;?>" />
				<em>Default: Like this post?</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Share Post Description:</th> 
				<td>
				<input type="text" size="48" maxlength="100" id="fblpsn_text" name="fblpsn_text" value="<?php echo $fblpsn_text;?>" />
				<em>Default: Share this on Facebook!</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Share Button:</th> 
				<td>
				<input type="text" maxlength="30" id="fblpsn_share_button" name="fblpsn_share_button" value="<?php echo $fblpsn_share_button;?>" />
				<em>Default: Share</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Nevermind Button:</th> 
				<td>
				<input type="text" maxlength="30" id="fblpsn_cancel_button" name="fblpsn_cancel_button" value="<?php echo $fblpsn_cancel_button;?>" />
				<em>Default: Nevermind</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Like Blog Title:</th> 
				<td>
				<input type="text" maxlength="100" id="fblpsn_like_blog_title" name="fblpsn_like_blog_title" value="<?php echo $fblpsn_like_blog_title;?>" />
				<em>Default: Want more like this?</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Like Blog Description:</th> 
				<td>
				<input type="text" size="60" maxlength="250" id="fblpsn_like_blog_desc" name="fblpsn_like_blog_desc" value="<?php echo $fblpsn_like_blog_desc;?>" />
				<em>Default: Like us on Facebook to get more!</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Close Button Caption:</th> 
				<td>
				<input type="text" maxlength="30" id="fblpsn_close_button" name="fblpsn_close_button" value="<?php echo $fblpsn_close_button;?>" />
				<em>Default: Close</em>
				</td> 
		</tr>
		<tr valign="top"> 
				<th width="33%" scope="row">Display Author After Post:</th> 
				<td>
				<input type="checkbox" id="fblpsn_display_author" name="fblpsn_display_author" value="fblpsn_display_author"<?php if($fblpsn_display_author) echo ' checked="checked"'; ?> />
				<em>Check to display - will display avatar and user biography.</em>
				</td> 
		</tr>
        <tr>
        <th width="33%" scope="row">Save settings:</th> 
        <td>
		<input type="submit" name="fblpsn_save" value="Save Settings" />
		<input type="submit" name="fblpsn_default" value="Restore Default Settings" />
        </td>
        </tr>
		</table>
		<h3>Enjoy this plugin? <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T6UP4HF8YBT94" target="_blank">Buy me a coffee</a>, thank you!</h3>
		Plugin developed by <a href="http://soleh.net/" target="_blank">ImamKhalid</a>. <br />
		<small>Follow me on Twitter <a href="http://twitter.com/imamkhalid" target="_blank">@imamkhalid</a></small>
		</fieldset>
	</form>
	</table>
	</div>
	<?php
}

function fblpsn_css_script() {
	if (is_single()) {
		global $wp_query;

		$post 		= $wp_query->post;
		$permalink 	= urlencode(get_permalink($post->ID));
		$title 		= urlencode($post->post_title);
		$thumb 		= wp_get_attachment_url(get_post_thumbnail_id($post->ID));
		$blog_url 	= urlencode(get_option('siteurl'));

	if(!$fblpsn_title = get_option('fblpsn_title'))$fblpsn_title = "Like this post?";
	if(!$fblpsn_text = get_option('fblpsn_text'))$fblpsn_text = "Share this on Facebook!";
	if(!$fblpsn_share_button = get_option('fblpsn_share_button'))$fblpsn_share_button = "Share";
	if(!$fblpsn_cancel_button = get_option('fblpsn_cancel_button'))$fblpsn_cancel_button = "Nevermind";
	if(!$fblpsn_like_blog_title = get_option('fblpsn_like_blog_title'))$fblpsn_like_blog_title = "Want more like this?";
	if(!$fblpsn_like_blog_desc = get_option('fblpsn_like_blog_desc'))$fblpsn_like_blog_desc = "Like us on Facebook to get more!";
	if(!$fblpsn_close_button = get_option('fblpsn_close_button'))$fblpsn_close_button = "Close";
	$fblpsn_display_author = get_option('fblpsn_display_author');

?>
<script type="text/javascript" src="<?php echo WP_PLUGIN_URL;?>/fb-light-popup-solehnet/fb-light-popup.js"></script>
<script type="text/javascript">
Ajax.auth_params = {};

function shareArticleOnFB(details) {
	var width  = 575;
	var height = 400;
	var left   = (window.innerWidth  - width)  / 2;
	var top    = (window.innerHeight - height) / 2;
	var options   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;  
	window.open(details.fb_url, '_blank',options);
}

function showPopUpPrompt(){
	var user_source = "share_fb_new_<?php echo $post->ID;?>";
	var dlg = new DialogWrapper();
	dlg.showChoice("<?php echo $fblpsn_title;?>","\n<div style=\"margin-bottom:20px;\">\n\t<div style='text-align:center;'>\n\t<?php echo str_replace('/', '\/',addslashes('<img class="lh_lazyimg" style="width:100%;opacity:1.0;filter:alpha(opacity=100);-moz-opacity:1.0;" src="'.$thumb.'">'));?>\n\t<\/div>\n\t<div style='text-align:center;margin-top:10px;font-weight:bold;font-size:18px;'>\n\t\t<?php echo $fblpsn_text;?>\n\t<\/div>\n<\/div>\n\n\n<div style='display:none;font-size:18px;margin-bottom:5px;font-weight:normal;'><\/div>\n\n","<?php echo $fblpsn_share_button;?>","<?php echo $fblpsn_cancel_button;?>");
	dlg.dom.dialog_button_ok.className = 'kfm_button_large';
	dlg.dom.dialog_button_cancel.className = 'kfm_button_ignore kfm_button_ignore_left';
	dlg.onconfirm = function(){
		showSharePrompt({"article_id":"<?php echo $post->ID;?>","fb_url":"http:\/\/www.facebook.com\/sharer.php?u=<?php echo $permalink;?>","tag":"popup_text"}, 1);
	}
	dlg.oncancel = function(){
		showSharePrompt({"0":"0","0":"0","0":"0"}, 0);	
	}
}

var show_fb_like_prompt = true;

Articles = {
  articles: {},
  set: function(id,data) {
    id = id+"";
    Articles.articles[id] = data;
  },
  get: function(id) {
    id = id+"";
    return Articles.articles[id];
  }
};

var end_video_dlg = new DialogWrapper();

var userHasScrolled = false;
var hasPoppedUp = false;

window.addEventListener('scroll', function() {

  if (!userHasScrolled){
	 	var ajax = new Ajax();
		ajax.responseType = Ajax.JSON;
		var params = {"action":"scrolled"};
		userHasScrolled = true;
	}
	
	// stick share buttons to page after scrolling past
	
	var is_mobile = "";
	
	if (!is_mobile){
	  var scrollTop = window.pageYOffset;
	  var el = document.getElementById('top_sharebuttons');
	  var el2 = document.getElementById('creditsbox_element');
	  if ((scrollTop > el.offsetTop+10) && (scrollTop < el2.offsetTop-300)){
	  	if (el.style.position != 'fixed') {
	  		el.style.position = 'fixed';
	  		el.style.top = '0px';
	  		el.style.width = document.getElementById('top_sharebuttons_placeholder').clientWidth+'px';
	  	}
	  }
	  else if (scrollTop < el.offsetTop+100) {
	  	if (el.style.position == 'fixed') {
	  		el.style.position = 'relative';
	  		el.style.top = '';
	  		el.style.width = '100%';
	  	}
	  }
	  
	  if (scrollTop > el2.offsetTop-300){
	  	if (el.style.position == 'fixed') {
	  		el.style.position = 'relative';
	  		el.style.top = '';
	  		el.style.width = '100%';
	  	}
	  }
	  else if ((scrollTop < el2.offsetTop-300) && (scrollTop > el.offsetTop+10)) {
	  	if (el.style.position != 'fixed') {
	  		el.style.position = 'fixed';
	  		el.style.top = '0px';
	  		el.style.width = document.getElementById('top_sharebuttons_placeholder').clientWidth+'px';
	  	}
	  }
	}
  // display popup share prompt after credits
	
	var scrollTop = window.pageYOffset;
	var el = document.getElementById('creditsbox_element');
	var tOffsetTop = totalOffsetTop(el);
	if (scrollTop > tOffsetTop-window.innerHeight+200){
		if (!hasPoppedUp) {
			setTimeout(function(){
					showPopUpPrompt();
				},3000);
			hasPoppedUp = true;
		}
	}
});

var totalOffsetTop = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

function showSharePrompt(details, do_share){
	var user_source = "share_fb_new_<?php echo $post->ID;?>";
	if (do_share){
		shareArticleOnFB(details);
	}
	showFBLikePrompt();
}

function showFBLikePrompt(){
	var show_dialog = "0";
	if (show_dialog == 0 && show_fb_like_prompt){
		end_video_dlg.showMessage("<?php echo $fblpsn_like_blog_title;?>","<div style=\"background:#f7f7f7; padding:10px;\">\n\n\n<div style=\"font-size:16px;margin-bottom:5px;font-weight:normal;\"><?php echo $fblpsn_like_blog_desc;?><\/div>\n\n<iframe src=\"//www.facebook.com/plugins/like.php?href=<?php echo $blog_url;?>&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=671186252920400\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; height:21px;\" allowTransparency=\"true\"></iframe>","<?php echo $fblpsn_close_button;?>");
	}
}
</script>
<style type='text/css'>
.kfm_dialog_overlay {
	position:absolute;
	z-index:999;
	left:0px;
	top:0px;
	width:100%;
	height:100%;
	background-color:#000000;
	opacity:0.5;
	filter:alpha(opacity=50);
	-moz-opacity:0.5;
}
.kfm_dialog {
	position:absolute!important;
	z-index:1000!important;
	left:50%!important;
	width:320px!important;
	margin-left:-160px!important;
	background-color:white!important;
	border-radius:3px!important;
}
.kfm_dialoglarge {
	position:absolute!important;
	z-index:1000!important;
	left:50%!important;
	width:700px!important;
	margin-left:-350px!important;
	background-color:white!important;
}
.kfm_dialog_button_ok {
	background-color:#009900!important;
	color:white!important;
	font-weight:bold!important;
}
.kfm_largedialog {
	left:50%!important;
	width:700px!important;
	margin-left:-350px!important;
	background-color:white!important;
}
.kfm_largedialogtop {
	position:absolute!important;
	top:0px!important;
	left:0px!important;
	height:36px!important;
	width:700px!important;
}
.kfm_largedialogbottom {
	position:absolute!important;
	bottom:0px!important;
	left:0px!important;
	height:34px!important;
	width:700px!important;
}
.kfm_smalldialog {
	left:50%!important;
	width:300px!important;
	margin-left:-176px!important;
	background-color:white!important;
}
.kfm_smalldialogtop {
	position:absolute!important;
	top:0px!important;
	left:0px!important;
	height:36px!important;
	width:352px!important;
}
.kfm_smalldialogbottom {
	position:absolute!important;
	bottom:0px!important;
	left:0px!important;
	height:34px!important;
	width:352px!important;
}
.kfm_smalldialog_inner, .kfm_largedialog_inner {	
	margin:15px!important;
	position:relative!important;
	padding-bottom:50px!important;
	padding-left:20px!important;
	padding-right:15px!important;
	padding-top:20px!important;
	color:black!important;
}
.kfm_dialog_title {
	font-weight:bold!important;
	font-size:25px!important;
	padding:3px 5px 3px 5px!important;
	text-align:center!important;
}
.kfm_dialog_content {
	margin:10px 5px 5px 5px!important;
	font-size:15px!important;
}
.kfm_largedialog_buttons {
	position:absolute!important;
	bottom:15px!important;
	right:20px!important;
	width:300px!important;
	text-align:right!important;
	z-index:100!important;
}
.kfm_smalldialog_buttons {
	position:absolute!important;
	bottom:10px!important;
	left:50%!important;
	width:300px!important;
	margin-left:-150px!important;
	text-align:center!important;
	z-index:100!important;
}
.kfm_dialog_button {
	margin-left:5px!important;
}
.kfm_button {
	padding-top:6px;
	padding-bottom:6px;
	padding-left:10px;
	padding-right:10px;
	padding:15px;
	cursor:pointer;
	border-radius:3px;
	font-size:16px!important;
	font-weight:normal!important;
	color:#454545!important;
	font-family:'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
	text-align:center;
	text-transform:capitalize!important;
	-webkit-appearance:none;
	border:0px;
	background:none!important;
}
.kfm_button_large {
	padding-top:6px!important;
	padding-bottom:6px!important;
	padding-left:10px!important;
	padding-right:10px!important;
	padding:15px!important;
	cursor:pointer!important;
	border-radius:3px!important;
	font-size:16px!important;
	color:#ffffff!important;
	font-family:'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif!important;
	text-align:center!important;
	-webkit-appearance:none!important; 
	border:0px!important;
	background:#405e9f!important;
	margin-left:100px!important;
	text-transform:capitalize!important;
}
.kfm_button_ignore_left {
	position:absolute!important;
	left:30px!important;
	top:0px!important;
	text-transform:capitalize!important;
}
.kfm_button_ignore {
	padding-left:4px!important;
	padding-right:4px!important;
	padding-top:5px!important;
	padding-bottom:5px!important;
	font-weight:normal!important;
	color:#454545!important;
	font-family: 'Lato', Georgia, Times, serif!important;
	font-size:13px!important;
	display:inline-block!important;
	cursor:pointer!important;
	text-decoration:none!important;
}
.kfm_button_ignore {
	padding-top:6px!important;
	padding-bottom:6px!important;
	padding-left:10px!important;
	padding-right:10px!important;
	padding:15px!important;
	cursor:pointer!important;
	border-radius:3px!important;
	font-size:16px!important;
	color:#454545!important;
	font-family:'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif!important;
	text-align:center!important;
	-webkit-appearance:none!important;
	border:0px!important;
	background:white!important;
}
.kfm_button_ignore_skipleft {
	background-repeat:repeat-x!important;
	background: #e5e5e5!important;
	border:1px solid #acacac!important;
	padding-left:8px!important;
	padding-right:8px!important;
	padding-top:5px!important;
	padding-bottom:5px!important;
	font-weight:bold!important;
	color:#454545!important;
	font-family: 'Lato', Georgia, Times, serif!important;
	font-size:12px!important;
	display:inline-block!important;
	cursor:pointer!important;
	text-decoration:none!important;
	position:relative!important;
	left:-200px!important;
}
.kfm_cancel {
	display:none!important;
}
<?php if ( $fblpsn_display_author ) echo '#creditsbox_element {
	background:#eee;
	color:#666;
	font-style:italic;
	padding:10px;
}
#creditsbox_element img {
	float:left;
	margin:0 10px 10px 0;
}
';?>
</style>
<?php
	}
}

function fblpsn_content($content) {
	if ( is_single() && is_main_query() && in_the_loop() ) {

		global $wp_query;

		$post 		= $wp_query->post;
		$userid		= get_the_author_meta('ID');
		$userdesc	= get_the_author_meta('description');
		$fblpsn_display_author = get_option('fblpsn_display_author');

		$newcontent = '<div id="top_sharebuttons"></div>'.$content.'<div id="creditsbox_element">';
		if ( $fblpsn_display_author ) $newcontent.= get_avatar($userid,128).$userdesc;
		$newcontent.= '</div>';
		return $newcontent;

	} else return $content;
}

function fblpsn_adminmenu()
{
	if (function_exists('add_options_page')) {	
		add_options_page('FB Light Popup', 'FB Light Popup', 9, basename(__FILE__),'fblpsn_options_page');
	}
}

function fblpsn_plugpage( $links,$plugin ) {
	if($plugin == plugin_basename(__FILE__)) 
	{
		$links[] = '<a href="/wp-admin/options-general.php?page=fb-light-popup.php">Settings</a>';
		$links[] = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T6UP4HF8YBT94" target="_blank">Buy Me A Coffee</a>';
	}
	return $links;
}

add_filter('plugin_row_meta', 'fblpsn_plugpage', 10, 4);
add_filter('plugin_action_links', 'fblpsn_plugpage', 10, 4);

add_filter('wp_head', 'fblpsn_css_script');
add_filter('the_content', 'fblpsn_content');
add_action('admin_menu','fblpsn_adminmenu',1);
?>