import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*
Theme Name:Moschino
Theme URI:https://www.wowthemes.net/marketplace/free-html-template-moschino/
Author:WowThemes.net
Author URI:https://www.wowthemes.net/
Description:Minimalist Portfolio & Ecommerce HTML Template
Version:1.0.0
Personal License: Free for personal use
Commercial License: Buy it here-> https://www.wowthemes.net/marketplace/free-html-template-nectaria/
Tags:white,light,one-column,two-columns,left-sidebar,right-sidebar,fluid-layout,custom-header,custom-menu,custom-colors,editor-style,featured-image-header,full-width-template,post-formats,theme-options,featured-images,translation-ready
*/
@font-face {
	font-family:'Genericons';
	src:url('fonts/genericons-regular-webfont.eot');
	src:url('fonts/genericons-regular-webfont.eot?#iefix') format('embedded-opentype'),url('fonts/genericons-regular-webfont.woff') format('woff'),url('fonts/genericons-regular-webfont.ttf') format('truetype'),url('fonts/genericons-regular-webfont.svg#genericonsregular') format('svg');
	font-weight:normal;
	font-style:normal;
}
@font-face {
	font-family:'behance';
	src:url('fonts/behance.eot?61221480');
	src:url('fonts/behance.eot?61221480#iefix') format('embedded-opentype'),url('fonts/behance.woff?61221480') format('woff'),url('fonts/behance.ttf?61221480') format('truetype'),url('fonts/behance.svg?61221480#behance') format('svg');
	font-weight:normal;
	font-style: normal;
}
/*--------------------------------------------------------------1.0 - Reset--------------------------------------------------------------*/
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td {
	border:0;
	font-family:inherit;
	font-size:100%;
	font-style:inherit;
	font-weight:inherit;
	margin:0;
	outline:0;
	padding:0;
	vertical-align: baseline;
}
html {
	font-size:62.5%;
	/* Corrects text resizing oddly in IE6/7 when body font-size is set using em units http://clagnut.com/blog/348/#c790 */
	overflow-y:scroll;
	/* Keeps page centered in all browsers regardless of content height */
	-webkit-text-size-adjust:100%;
	/* Prevents iOS text size adjust after orientation change,without disabling user zoom */
	-ms-text-size-adjust:100%;
	/* www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/ */
}
*,*:before,*:after {
	/* apply a natural box layout model to all elements;see http://www.paulirish.com/2012/box-sizing-border-box-ftw/ */
	-webkit-box-sizing:border-box;
	/* Not needed for modern webkit but still used by Blackberry Browser 7.0;see http://caniuse.com/#search=box-sizing */
	-moz-box-sizing:border-box;
	/* Still needed for Firefox 28;see http://caniuse.com/#search=box-sizing */
	box-sizing:border-box;
}
body {
	background:#F8F7F3;
}
article,aside,details,figcaption,figure,footer,header,main,nav,section {
	display:block;
}
ol,ul {
	list-style: none;
}
table {
	/* tables still need 'cellspacing="0"' in the markup */
	border-collapse:separate;
	border-spacing:0;
}
caption,th,td {
	font-weight:normal;
	text-align:left;
}
blockquote:before,blockquote:after,q:before,q:after {
	content:"";
}
blockquote,q {
	quotes:"" "";
}
a:hover,a:active,a:focus {
	outline:0;
}
a img {
	border: 0;
}
/*--------------------------------------------------------------2.0 Responsive Grid--------------------------------------------------------------*/
.container {
	margin:0 20px;
}
.column {
	margin-bottom:1em;
}
@media (min-width:1024px) {
	.column {
			float:left;
			margin-bottom:0;
			padding:0 15px;
	}
	.column.full {
		width:100%;
		float:none !Important;
	}
	.column.five-sixths {
		width:83.4%;
	}
	.column.four-fifths {
		width:80%;
	}
	.column.three-fourths {
		width:75%;
	}
	.column.two-thirds {
		width:66.7%;
	}
	.column.half {
		width:50%;
	}
	.column.third {
		width:33.3%;
	}
	.column.fourth {
		width:25%;
	}
	.column.fifth {
		width:20%;
	}
	.column.sixth {
		width:16.6%;
	}
	.column.flow-opposite {
		float:right;
	}
	.column.centered {
			margin-left:15%;
			width:70%;
	}
}
@media (min-width:1090px) {
	.container {
			margin:0 auto;
			width: 960px;
	}
}
/*--------------------------------------------------------------3.0 Typography--------------------------------------------------------------*/
body {
	letter-spacing:1px;
}
body,button,input,select,textarea {
	color:#666666;
	font-family:inherit;
	font-size:14px;
	line-height:1.8;
	word-wrap:break-word;
	-webkit-hyphens:auto;
	 -moz-hyphens:auto;
	 -ms-hyphens:auto;
			hyphens:auto;
}
h1,h2,h3,h4,h5,h6 {
	font-weight:700;
	margin-top:20px;
	margin-bottom:10px;
}
h1 {
	font-size:36px;
}
h2 {
	font-size:30px;
}
h3 {
	font-size:24px;
}
h4 {
	font-size:18px;
}
h5 {
	font-size:14px;
}
h6 {
	font-size:12px;
}
p {
	margin-bottom:1.5em;
}
p:last-child {
	margin-bottom:0;
}
b,strong {
	font-weight:bold;
}
dfn,cite,em,i {
	font-style:italic;
}
blockquote {
	border-left:5px solid #ffd700;
	margin-bottom:20px;
	padding:10px 20px;
}
address {
	font-style:italic;
	margin-bottom:1.5em;
}
pre {
	background:#eee;
	font-family:"Courier 10 Pitch",Courier,monospace;
	font-size:15px;
	line-height:1.6;
	margin-bottom:1.6em;
	max-width:100%;
	overflow:auto;
	padding:1.6em;
}
code,kbd,tt,var {
	background:#eee;
	color:#222;
	font:15px Monaco,Consolas,"Andale Mono","DejaVu Sans Mono",monospace;
	padding:0;
	white-space:normal;
}
abbr,acronym {
	border-bottom:1px dotted #666;
	cursor:help;
}
mark,ins {
	background:#fff9c0;
	text-decoration:none;
}
sup,sub {
	font-size:75%;
	height:0;
	line-height:0;
	position:relative;
	vertical-align:baseline;
}
sup {
	bottom:1ex;
}
sub {
	top:.5ex;
}
small {
	font-size:75%;
}
big {
	font-size: 125%;
}
/*--------------------------------------------------------------4.0 Elements--------------------------------------------------------------*/
hr {
	background-color:#e5e5e5;
	border:0;
	height:1px;
	margin-bottom:1.5em;
	margin-top: 1.5em;
}
img {
	height:auto;
	/* Make sure images are scaled correctly. */
	max-width:100%;
	/* Adhere to container width. */
}
ul,ol {
	margin:0 0 1.5em 3em;
}
ul {
	list-style:disc;
}
ol {
	list-style:decimal;
}
li>ul,li>ol {
	margin-bottom:0;
	margin-left:1.5em;
}
dt {
	font-weight:bold;
	color:#0a0700;
}
dd {
	margin-bottom:1.5em;
}
figure {
	margin:0;
}
table {
	border-collapse:collapse;
	border-spacing:0;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
	line-height:2;
	margin-bottom:40px;
	width:100%;
}
table th {
	font-weight:bold;
	padding:10px 10px 10px 0;
	text-align:left;
}
table td {
	padding:10px 10px 10px 0;
}
table tr {
	border-top:1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
/*--------------------------------------------------------------5.0 Forms--------------------------------------------------------------*/
button,input,select,textarea {
	font-size:100%;
	/* Corrects font size not being inherited in all browsers */
	margin:0;
	/* Addresses margins set differently in IE6/7,F3/4,S5,Chrome */
	vertical-align:baseline;
	/* Improves appearance and consistency in all browsers */
}
button,input[type="button"],input[type="reset"],input[type="submit"] {
	border:1px solid #ccc;
	border-radius:0px;
	background:#ccc;
	color:#fff;
	cursor:pointer;
	/* Improves usability and consistency of cursor style between image-type 'input' and others */
	-webkit-appearance:button;
	/* Corrects inability to style clickable 'input' types in iOS */
	padding:3px 15px;
}
button:hover,input[type="button"]:hover,input[type="reset"]:hover,input[type="submit"]:hover {
	opacity:0.6;
}
input[type="checkbox"],input[type="radio"] {
	padding: 0;
	/* Addresses excess padding in IE8/9 */
}
input[type="search"] {
	-webkit-appearance:textfield;
	/* Addresses appearance set to searchfield in S5,Chrome */
	-webkit-box-sizing:content-box;
	/* Addresses box sizing set to border-box in S5,Chrome (include -moz to future-proof) */
	-moz-box-sizing:content-box;
	box-sizing:content-box;
}
input[type="search"]::-webkit-search-decoration {
	/* Corrects inner padding displayed oddly in S5,Chrome on OSX */
	-webkit-appearance:none;
}
button::-moz-focus-inner,input::-moz-focus-inner {
	/* Corrects inner padding and border displayed oddly in FF3/4 www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/ */
	border:0;
	padding:0;
}
input[type="text"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],textarea {
	border:1px solid #ccc;
	border-radius:0px;
	color:#666;
}
input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="search"]:focus,textarea:focus {
	color:#111;
}
input[type="text"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],input[type="tel"] {
	padding:6px;
	border: 1px solid #ccc;
}
textarea {
	overflow:auto;
	/* Removes default vertical scrollbar in IE6/7/8/9 */
	padding:5px;
	vertical-align:top;
	/* Improves readability and alignment in all browsers */
	width:98%;
}
/*--------------------------------------------------------------5.1 Contact Form 7--------------------------------------------------------------*/
.wpcf7-form-control-wrap {
	display:inline;
}
.wpcf7 input[type="text"],.wpcf7 input[type="email"],.wpcf7 input[type="url"],.wpcf7 input[type="password"],.wpcf7 textarea {
	background-color:#e6e6e6;
	border:1px solid #e6e6e6;
	border-radius:0;
	outline-color:transparent;
	outline-style:none;
	padding:10px;
	width:100%;
}
.wpcf7 input[type="text"]:focus,.wpcf7 input[type="email"]:focus,.wpcf7 input[type="url"]:focus,.wpcf7 input[type="password"]:focus,.wpcf7 textarea:focus {
	background-color:#fff;
	color: #111;
}
.wpcf7 input[type="submit"] {
	border:1px solid #4d4d4d;
	border-color:#4d4d4d;
	border-radius:0;
	background:#4d4d4d;
	box-shadow:none;
	color:#fff;
	cursor:pointer;
	/* Improves usability and consistency of cursor style between image-type 'input' and others */
	-webkit-appearance:button;
	/* Corrects inability to style clickable 'input' types in iOS */
	font-size:14px;
	font-size:1.4rem;
	line-height:1;
	outline-color:transparent;
	outline-style:none;
	padding:1em 1em 0.9em;
	text-shadow:0;
	width:100%;
	-webkit-transition:all 0.2s ease-in-out;
	-moz-transition:all 0.2s ease-in-out;
	-o-transition:all 0.2s ease-in-out;
	transition:all 0.2s ease-in-out;
}
.wpcf7 input[type="submit"]:hover {
	opacity:0.6;
	-webkit-transition:all 0.2s ease-in-out;
	-moz-transition:all 0.2s ease-in-out;
	-o-transition:all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}
/*--------------------------------------------------------------6.0 Header--------------------------------------------------------------*/
html {
	border: none;
	height: auto;
}
.site-header {
	padding-top:2em;
	padding-bottom:1em;
}
.header-image {
	margin-top:1em;
	text-align:center;
	margin-bottom: 2em;
}
/*--------------------------------------------------------------6.1 Links--------------------------------------------------------------*/
a {
	color:inherit;
	text-decoration:none;
	-webkit-transition:all 0.2s ease-in-out;
	-moz-transition:all 0.2s ease-in-out;
	-o-transition:all 0.2s ease-in-out;
	transition:all 0.2s ease-in-out;
}
a:visited {
	color:#666666;
}
a:hover {
	color:#ccc;
	text-decoration:none;
	-webkit-transition:all 0.2s ease-in-out;
	-moz-transition:all 0.2s ease-in-out;
	-o-transition:all 0.2s ease-in-out;
	transition:all 0.2s ease-in-out;
}
a:active,a:focus {
	text-decoration: none;
}
/*--------------------------------------------------------------6.2 Logo and Title--------------------------------------------------------------*/
.site-branding {
	margin-bottom:1em;
	text-align:center;
}
.site-title {
	font-family:'Quattrocento Sans',sans-serif;
	font-size:60px;
	font-weight:300;
	letter-spacing:2px;
	line-height:1;
	margin-top:25px;
	margin-bottom:20px;
	text-transform:uppercase;
}
.site-title a {
		text-decoration:none;
}
.site-description {
	font-size:14px;
	font-style:italic;
	font-weight:300;
	margin-top:-15px;
	margin-bottom:35px;
	padding-top: 0;
}
/*--------------------------------------------------------------6.3 Menus--------------------------------------------------------------*/
.menu {
	display:table;
	margin:0 auto;
}
.main-navigation {
	background-color:#FFFAF2;
	font-size:14px;
	font-weight:700;
	letter-spacing:1px;
	padding:15px 0;
	margin-bottom: 15px;
	border-top:1px solid;
	border-bottom:1px solid;
	text-transform:uppercase;
}
.main-navigation a {
		text-decoration:none;
}
.main-navigation ul {
	list-style:none;
	margin:0 auto;
	padding:3px 0;
}
.main-navigation li {
	display:inline;
	float:left;
	margin:0 1em;
	position:relative;
}
.main-navigation ul ul {
	display:none;
	text-transform:none;
	box-shadow:none;
	opacity:0.9;
	float:left;
	left:-1em;
	padding:0.5em 1em;
	position:absolute;
	top:1.5em;
	z-index:99999;
	padding-top:35px;
	transition:all 0.3s;
	font-weight:400;
  background-color:#fff;
}
.main-navigation ul ul li {
	margin:0;
	width:150px;
}
.main-navigation ul li:hover>ul {
	display: block;
}
/* Small menu */
.menu-toggle {
	display: none;
}
/* Paging Navigation */
.pagination {
	margin-top: 50px;
	clear:both;
	padding:15px 15px 30px 15px;
	overflow:hidden;
	text-align:center;
}
.pagination a {
	padding:5px 10px;
	margin-right:2px;
	background:#ccc;
	color:#fff;
	text-decoration:blink;
}
.pagination a:hover,.pagination .current {
	padding:5px 10px;
	margin-right:2px;
	background:#ffd700;
	color:#fff;
}
.site-main .comment-navigation,.site-main .paging-navigation {
	margin:15px 0 30px;
	overflow:hidden;
}
.site-main .post-navigation {
	margin:15px 0 0px;
	overflow:hidden;
}
.paging-navigation {
	padding:0 15px;
}
.comment-navigation .nav-previous,.paging-navigation .nav-previous,.post-navigation .nav-previous {
	float:left;
	width:50%;
	padding-bottom:2.5em;
}
.comment-navigation .nav-next,.paging-navigation .nav-next,.post-navigation .nav-next {
	float:right;
	text-align:right;
	width: 50%;
}
/*--------------------------------------------------------------7.0 Accessibility--------------------------------------------------------------*/
/* Text meant only for screen readers */
.screen-reader-text {
	clip:rect(1px,1px,1px,1px);
	position:absolute !important;
}
.screen-reader-text:hover,.screen-reader-text:active,.screen-reader-text:focus {
	background-color:#f1f1f1;
	border-radius:3px;
	box-shadow:0 0 2px 2px rgba(0,0,0,0.6);
	clip:auto !important;
	color:#21759b;
	display:block;
	font-size:14px;
	font-weight:bold;
	height:auto;
	left:5px;
	line-height:normal;
	padding:15px 23px 14px;
	text-decoration:none;
	top:5px;
	width:auto;
	z-index: 100000;
	/* Above WP toolbar */
}
/*--------------------------------------------------------------8.0 Alignments--------------------------------------------------------------*/
.alignleft {
	display:inline;
	float:left;
	margin:0.5em 1.5em 1em 0;
}
.alignright {
	display:inline;
	float:right;
	margin:0.5em 0 1em 1.5em;
}
.aligncenter {
	clear:both;
	display:block;
	margin: 0 auto;
}
/*--------------------------------------------------------------9.0 Clearings--------------------------------------------------------------*/
.clear:before,.clear:after,.entry-content:before,.entry-content:after,.comment-content:before,.comment-content:after,.site-header:before,.site-header:after,.site-content:before,.site-content:after,.site-footer:before,.site-footer:after {
	content:'';
	display:table;
}
.clear:after,.entry-content:after,.comment-content:after,.site-header:after,.site-content:after,.site-footer:after {
	clear:both;
}
.clear {
	*zoom: 1;
}
/*--------------------------------------------------------------10.0 Widgets--------------------------------------------------------------*/
.widget-area {
}
.widget {
	border:0;
	margin:0 0 2em 0;
	padding:0;
	word-wrap:break-word;
}
.widget a {
	text-decoration:none;
}
.widget ul {
	list-style:none;
	margin-left:0;
}
.widget-title {
	font-size:14px;
	font-weight:700;
	letter-spacing:4px;
	list-style:none;
	margin-top:0;
	margin-left:0;
	margin-bottom:1em;
	text-transform:uppercase;
	text-align:left;
}
.widget-title a {
		text-decoration: none;
}
/* Make sure select elements fit in widgets */
.widget select {
	max-width: 100%;
}
/* Search widget */
.widget_search .search-submit {
	display:none;
}
.widget_search input[type="search"] {
	width: 70%;
}
.widget_recent_comments ul li:before, .widget_categories ul li:before, .widget_archive ul li:before, .widget_links ul li:before, .widget_meta ul li:before, .widget_pages ul li:before, .widget_recent_entries ul li:before {
	content: "\f105";
	font-family: FontAwesome;
	margin-right: 5px;
}
.widget a {color:inherit;}
/*--------------------------------------------------------------11.0 Site Content--------------------------------------------------------------*/
#primary,#secondary {
	padding-top: 2em;
}
/*--------------------------------------------------------------11.1 Posts and pages--------------------------------------------------------------*/
.sticky {
}
.bypostauthor {
}
.hentry {
	margin: 0 0 3.5em;
}
.single-post .hentry {
    margin: 0 0 1.5em;
}
/* Thumbnail */
.entry-thumbnail {
	padding:1em 0 0em 0;
}
.single-portfolio .entry-thumbnail {
	padding: 2em 0 1.5em 0;
}
/* Entry Title */
.entry-title {
	font-weight:700;
	font-size:20px;
	letter-spacing:2px;
	line-height:1.4;
	margin-top:0;
	margin-bottom:0;
	text-transform:uppercase;
}
.entry-title a {
		text-decoration:none;
	color:#222;
}
.entry-title a:hover {
		color: #ccc !important;
}
/* Entry Content */
.entry-content {
	white-space:normal;
}
.entry-content p:last-child {
	margin-bottom:0;
}
a.more-link {
	position:relative;
	text-decoration:none;
	font-style:italic;
	text-transform:lowercase;
	margin-left:3px;
}
a.more-links:before {
	content:'...';
	text-decoration:none;
	margin-right:3px;
}
a.more-link {
	text-decoration:underline;
}
.entry-content ul li,.entry-content ol li,#comments ul li,#comments ul li {
	margin-bottom:12px;
}
.page-content,.entry-content,.entry-summary {
	margin:1em 0;
}
.no-results .page-content {
	margin:1.5em 0;
	padding-bottom: 1em;
}
/* Entry Meta */
.entry-meta {
	font-size:13px;
	font-style:italic;
	font-weight:300;
	letter-spacing:1px;
	;
}
.entry-meta a {
		color:#7f7f7f !important;
		text-decoration:none;
}
	.entry-meta a:hover {
			text-decoration:underline;
}
.entry-meta .comments-link:before {
	content:" - ";
}
.byline,.updated {
	display:none;
}
.single .byline,.group-blog .byline {
	display: inline;
}
/* Page Links */
.page-links {
	clear:both;
	margin:0 0 1.5em;
	word-spacing: 18px;
}
/* Entry Footer */
.entry-footer {
	font-style:italic;
	padding-top:1em;
	padding-bottom:0.5em;
}
.single-portfolio .entry-footer {
	padding:0;
}
.entry-footer a {
		color:#7f7f7f !important;
		text-decoration:none;
}
.entry-footer a:hover {
		text-decoration:underline;
}
.blog .entry-footer,.search-results .entry-footer,.archive .entry-footer {
	padding-bottom:2em;
}
.page .entry-footer {
	border-bottom:0;
}
.entry-meta {
	margin-top: 5px;
}
/* Entry Navigation */
.meta-nav {
	font-size:13px;
}
.nav-links a {
	text-decoration: none;
}
/* Archives Page */
.page-header {
	margin-bottom:1.5em;
}
.page-title {
	line-height:1;
	margin-top:0;
	text-transform:capitalize;
}
.page-title:before {
	content:"#";
}
.page-header p {
	font-style:italic;
	margin-bottom: 0.5em;
}
/* 404 Page */
.error-404 .widget,.error-404 .widget-title {
	text-align:left;
	border: 0;
}
/* Go to top */
.smoothup {
	bottom:22px;
	display:none;
	position:fixed;
	right:10px;
	transition:all 0.2s ease-in-out 0s;
}
a.smoothup {
		text-decoration: none;
}
/*--------------------------------------------------------------11.2 Asides--------------------------------------------------------------*/
.blog .format-aside .entry-title,.archive .format-aside .entry-title {
	display: none;
}
/*--------------------------------------------------------------11.3 Gallery--------------------------------------------------------------*/
.blog .format-gallery .entry-thumbnail,.archive .format-gallery .entry-thumbnail,.single-post .format-gallery .entry-thumbnail {
	display: none;
}
/*--------------------------------------------------------------11.4 Image--------------------------------------------------------------*/
.blog .format-image .entry-thumbnail,.archive .format-image .entry-thumbnail,.single-post .format-image .entry-thumbnail {
	display: none;
}
/*--------------------------------------------------------------11.5 Comments--------------------------------------------------------------*/
.comment-list {
	list-style:none;
	margin-left:0;
}
.comment-body {
	border-bottom:1px solid #f2f2f2;
	padding:20px 0;
}
.comment-author {
	float:left;
}
.comment-author img {
		-webkit-border-radius:50%;
		-moz-border-radius:50%;
		-ms-border-radius:50%;
		-o-border-radius:50%;
		border-radius:50%;
		display:block;
}
.comment-meta {
	padding-bottom:20px;
}
.comment-meta .fn {
		color:#24282d;
		font-weight:900;
		font-style:normal;
		text-transform:uppercase;
}
	.comment-meta .fn a {
			color:#404040;
			text-decoration:none;
}
.comment-meta-details {
	color:#7f8d8c;
	font-size:0.90em;
	font-style:italic;
	line-height:1.3;
	padding-top:5px;
	text-align:center;
	text-align:left;
}
.comment-meta-details a {
		text-decoration:none;
}
.comment-content {
	margin-left:80px;
}
.comment-content a {
		word-wrap:break-word;
}
.comment-list .children {
	list-style:none;
	margin-left:80px;
	position:relative;
}
.comment-list .children .depth-5 {
		padding-top: 30px;
}
/*--------------------------------------------------------------12.0 Footer--------------------------------------------------------------*/
.site-footer {
	padding:2em 0;
	text-align:center;
	background-color:#333;
	color:#999;
}
.site-footer a {
	text-decoration:none;
	color: #999;
}
/*--------------------------------------------------------------13.0 Infinite scroll--------------------------------------------------------------*/
/* Globally hidden elements when Infinite Scroll is supported and in use. */
.infinite-scroll .paging-navigation,/* Older / Newer Posts Navigation (always hidden) */
.infinite-scroll.neverending .site-footer {
	/* Theme Footer (when set to scrolling) */
	display:none;
}
/* When Infinite Scroll has reached its end we need to re-display elements that were hidden (via .neverending) before */
.infinity-end.neverending .site-footer {
	display: block;
}
/*--------------------------------------------------------------14.0 Media--------------------------------------------------------------*/
.page-content img.wp-smiley,.entry-content img.wp-smiley,.comment-content img.wp-smiley {
	border:none;
	margin-bottom:0;
	margin-top:0;
	padding: 0;
}
/* Make sure embeds and iframes fit their containers */
embed,iframe,object {
	max-width: 100%;
}
/*--------------------------------------------------------------14.1 Captions--------------------------------------------------------------*/
.wp-caption {
	margin-bottom:1.5em;
	max-width:100%;
}
.wp-caption img[class*="wp-image-"] {
		display:block;
		margin:0 auto;
}
.wp-caption-text {
	font-style:italic;
	line-height:24px;
	text-align:center;
}
.wp-caption .wp-caption-text {
	margin: 1em 0;
}
/*--------------------------------------------------------------14.2 Galleries--------------------------------------------------------------*/
.gallery {
	margin-bottom:1.5em;
}
.gallery-item {
	display:inline-block;
	margin-bottom:10px;
	padding-right:2.6%;
	text-align:center;
	vertical-align:top;
	width:100%;
}
.gallery-item img {
		height:auto;
		width:100%;
}
.gallery-columns-2 .gallery-item {
	max-width:50%;
}
.gallery-columns-3 .gallery-item {
	max-width:33.33%;
}
.gallery-columns-4 .gallery-item {
	max-width:25%;
}
.gallery-columns-5 .gallery-item {
	max-width:20%;
}
.gallery-columns-6 .gallery-item {
	max-width:16.66%;
}
.gallery-columns-7 .gallery-item {
	max-width:14.28%;
}
.gallery-columns-8 .gallery-item {
	max-width:12.5%;
}
.gallery-columns-9 .gallery-item {
	max-width:11.11%;
}
.gallery-caption {
	display: none;
}
/*--------------------------------------------------------------15.0 Shortcodes--------------------------------------------------------------*/
/*--------------------------------------------------------------15.1 Responsive Slider--------------------------------------------------------------*/
/* Browser Resets*********************************/
.flex-container a:active,.flexslider a:active,.flex-container a:focus,.flexslider a:focus {
	outline:none;
}
.slides,.flex-control-nav,.flex-direction-nav {
	margin:0;
	padding:0;
	list-style: none;
}
/* Icon Fonts*********************************/
/* FlexSlider Necessary Styles*********************************/
.flexslider {
	margin:0;
	padding:0;
}
.flexslider .slides>li {
	display:none;
	-webkit-backface-visibility: hidden;
}
/* Hide the slides before the JS is loaded. Avoids image jumping */
.flexslider .slides img {
	width:100%;
	display:block;
}
.flex-pauseplay span {
	text-transform: capitalize;
}
/* Clearfix for the .slides element */
.slides:after {
	content:".";
	display:block;
	clear:both;
	visibility:hidden;
	line-height:0;
	height:0;
}
html[xmlns] .slides {
	display:block;
}
* html .slides {
	height: 1%;
}
/* No JavaScript Fallback */
/* If you are not using another script,such as Modernizr,make sure you * include js that eliminates this class on page load */
.no-js .slides>li:first-child {
	display: block;
}
/* FlexSlider Default Theme*********************************/
.flexslider {
	margin:0 0 30px;
	background:#fff;
	position:relative;
	zoom:1;
}
.flex-viewport {
	max-height:2000px;
	-webkit-transition:all 1s ease;
	-moz-transition:all 1s ease;
	-o-transition:all 1s ease;
	transition:all 1s ease;
}
.loading .flex-viewport {
	max-height:300px;
}
.flexslider .slides {
	zoom:1;
}
.carousel li {
	margin-right: 5px;
}
/* Direction Nav */
.flex-direction-nav {
	*height:0;
}
.flex-direction-nav a {
	text-decoration:none;
	display:block;
	width:40px;
	height:40px;
	margin:-20px 0 0;
	position:absolute;
	top:50%;
	z-index:10;
	overflow:hidden;
	opacity:0;
	cursor:pointer;
	-webkit-transition:all .3s ease;
	-moz-transition:all .3s ease;
	transition:all .3s ease;
}
.flex-direction-nav .flex-prev {
	left:-50px;
}
.flex-direction-nav .flex-next {
	right:-50px;
	text-align:right;
}
.flexslider:hover .flex-prev {
	opacity:1;
	left:0;
	color:#64625a;
}
.flexslider:hover .flex-next {
	opacity:1;
	right:0;
	color:#64625a;
}
.flexslider:hover .flex-next:hover,.flexslider:hover .flex-prev:hover {
	opacity:1;
}
.flex-direction-nav .flex-disabled {
	opacity:0!important;
	filter:alpha(opacity=0);
	cursor:default;
}
.flex-direction-nav a:before {
	font-family:"Genericons";
	font-size:40px;
	line-height:1;
	display:inline-block;
	content:'\f503';
}
.flex-direction-nav a.flex-next:before {
	content: '\f501';
}
/* Pause/Play */
.flex-pauseplay a {
	display:block;
	width:20px;
	height:20px;
	position:absolute;
	bottom:5px;
	left:10px;
	opacity:0.8;
	z-index:10;
	overflow:hidden;
	cursor:pointer;
	color:#000;
}
.flex-pauseplay a:before {
	font-family:"flexslider-icon";
	font-size:20px;
	display:inline-block;
	content:'\f004';
}
.flex-pauseplay a:hover {
	opacity:1;
}
.flex-pauseplay a.flex-play:before {
	content: '\f003';
}
/* Control Nav */
.flex-control-nav {
	display:none;
	width:100%;
	position:absolute;
	bottom:-40px;
	text-align:center;
}
.flex-control-nav li {
	margin:0 6px;
	display:inline-block;
	zoom:1;
	*display:inline;
}
.flex-control-paging li a {
	width:11px;
	height:11px;
	display:block;
	background:#666;
	background:rgba(0,0,0,0.5);
	cursor:pointer;
	text-indent:-9999px;
	-webkit-border-radius:20px;
	-moz-border-radius:20px;
	-o-border-radius:20px;
	border-radius:20px;
	-webkit-box-shadow:inset 0 0 3px rgba(0,0,0,0.3);
	-moz-box-shadow:inset 0 0 3px rgba(0,0,0,0.3);
	-o-box-shadow:inset 0 0 3px rgba(0,0,0,0.3);
	box-shadow:inset 0 0 3px rgba(0,0,0,0.3);
}
.flex-control-paging li a:hover {
	background:#333;
	background:rgba(0,0,0,0.7);
}
.flex-control-paging li a.flex-active {
	background:#000;
	background:rgba(0,0,0,0.9);
	cursor:default;
}
.flex-control-thumbs {
	margin:5px 0 0;
	position:static;
	overflow:hidden;
}
.flex-control-thumbs li {
	width:25%;
	float:left;
	margin:0;
}
.flex-control-thumbs img {
	width:100%;
	display:block;
	opacity:.7;
	cursor:pointer;
}
.flex-control-thumbs img:hover {
	opacity:1;
}
.flex-control-thumbs .flex-active {
	opacity:1;
	cursor:default;
}
@media screen and (max-width:860px) {
	.flex-direction-nav .flex-prev {
		opacity:1;
		left:10px;
	}
	.flex-direction-nav .flex-next {
		opacity:1;
		right:10px;
	}
}
.slide-title {
	display: none;
}
/*--------------------------------------------------------------15.2 Dropcap--------------------------------------------------------------*/
.dropcap {
	float:left;
	font-size:52px;
	font-weight:bold;
	line-height:0.8;
	padding: 0 6px 0 0;
}
/*--------------------------------------------------------------15.3 Buttons--------------------------------------------------------------*/
.button {
	color:#fff;
	cursor:pointer;
	display:inline-block;
	margin:0 0 1em;
	padding:10px 15px;
	text-align:center;
}
a.button {
		text-decoration:none;
}
	a:hover.button {
			color:#fff;
			opacity: 0.6;
}
/* Colors */
.grey {
	background-color:#ccc;
}
.yellow {
	background-color:#FBCB43;
}
.green {
	background-color:#34B67A;
}
.red {
	background-color:#E57368;
}
.blue {
	background-color:#77A7FB;
}
.purple {
	background-color:#955BA5;
}
.black {
	background-color: #202020;
}
/* Size */
.extra-small {
	font-size:12px;
	padding:5px 10px;
}
.small {
	font-size:14px;
	padding:10px 15px;
}
.medium {
	font-size:16px;
	padding:15px 20px;
}
.large {
	font-size:18px;
	padding:20px 25px;
}
.extra-large {
	font-size:20px;
	padding: 25px 30px;
}
/* Type */
.square {
	border-radius:0;
}
.round {
	border-radius:3px;
}
.pill {
	border-radius: 30px;
}
/* Display */
.inline {
	display:inline;
}
.block {
	display: block;
}
/*--------------------------------------------------------------15.4 Alerts--------------------------------------------------------------*/
.alert {
	color:#fff;
	font-size:18px;
	margin:0 0 1em;
	padding:3% 5%;
	text-align:center;
	width: 100%;
}
/* Text Align */
.left {
	text-align:left;
}
.right {
	text-align: right;
}
/*--------------------------------------------------------------15.5 Icons--------------------------------------------------------------*/
.genericon {
	display:inline-block;
	font-family:'Genericons';
	font-size:32px;
	font-style:normal;
	font-weight:normal;
	height:32px;
	line-height:1;
	text-decoration:inherit;
	vertical-align:top;
	width:32px;
	-webkit-font-smoothing:antialiased;
	-moz-osx-font-smoothing: grayscale;
}
/* IE7 and IE6 hacks */
.genericon {
	*overflow:auto;
	*zoom:1;
	*display: inline;
}
/* Post formats */
.genericon-standard:before {
	content:'\f100';
}
.genericon-aside:before {
	content:'\f101';
}
.genericon-image:before {
	content:'\f102';
}
.genericon-gallery:before {
	content:'\f103';
}
.genericon-video:before {
	content:'\f104';
}
.genericon-status:before {
	content:'\f105';
}
.genericon-quote:before {
	content:'\f106';
}
.genericon-link:before {
	content:'\f107';
}
.genericon-chat:before {
	content:'\f108';
}
.genericon-audio:before {
	content: '\f109';
}
/* Social icons */
.genericon-github:before {
	content:'\f200';
}
.genericon-dribbble:before {
	content:'\f201';
}
.genericon-twitter:before {
	content:'\f202';
}
.genericon-facebook:before {
	content:'\f203';
}
.genericon-facebook-alt:before {
	content:'\f204';
}
.genericon-wordpress:before {
	content:'\f205';
}
.genericon-googleplus:before {
	content:'\f206';
}
.genericon-linkedin:before {
	content:'\f207';
}
.genericon-linkedin-alt:before {
	content:'\f208';
}
.genericon-pinterest:before {
	content:'\f209';
}
.genericon-pinterest-alt:before {
	content:'\f210';
}
.genericon-flickr:before {
	content:'\f211';
}
.genericon-vimeo:before {
	content:'\f212';
}
.genericon-youtube:before {
	content:'\f213';
}
.genericon-tumblr:before {
	content:'\f214';
}
.genericon-instagram:before {
	content:'\f215';
}
.genericon-codepen:before {
	content:'\f216';
}
.genericon-polldaddy:before {
	content:'\f217';
}
.genericon-googleplus-alt:before {
	content:'\f218';
}
.genericon-path:before {
	content:'\f219';
}
.genericon-skype:before {
	content:'\f220';
}
.genericon-digg:before {
	content:'\f221';
}
.genericon-reddit:before {
	content:'\f222';
}
.genericon-stumbleupon:before {
	content:'\f223';
}
.genericon-pocket:before {
	content:'\f224';
}
.genericon-dropbox:before {
	content: '\f225';
}
/* Meta icons */
.genericon-comment:before {
	content:'\f300';
}
.genericon-category:before {
	content:'\f301';
}
.genericon-tag:before {
	content:'\f302';
}
.genericon-time:before {
	content:'\f303';
}
.genericon-user:before {
	content:'\f304';
}
.genericon-day:before {
	content:'\f305';
}
.genericon-week:before {
	content:'\f306';
}
.genericon-month:before {
	content:'\f307';
}
.genericon-pinned:before {
	content: '\f308';
}
/* Other icons */
.genericon-search:before {
	content:'\f400';
}
.genericon-unzoom:before {
	content:'\f401';
}
.genericon-zoom:before {
	content:'\f402';
}
.genericon-show:before {
	content:'\f403';
}
.genericon-hide:before {
	content:'\f404';
}
.genericon-close:before {
	content:'\f405';
}
.genericon-close-alt:before {
	content:'\f406';
}
.genericon-trash:before {
	content:'\f407';
}
.genericon-star:before {
	content:'\f408';
}
.genericon-home:before {
	content:'\f409';
}
.genericon-mail:before {
	content:'\f410';
}
.genericon-edit:before {
	content:'\f411';
}
.genericon-reply:before {
	content:'\f412';
}
.genericon-feed:before {
	content:'\f413';
}
.genericon-warning:before {
	content:'\f414';
}
.genericon-share:before {
	content:'\f415';
}
.genericon-attachment:before {
	content:'\f416';
}
.genericon-location:before {
	content:'\f417';
}
.genericon-checkmark:before {
	content:'\f418';
}
.genericon-menu:before {
	content:'\f419';
}
.genericon-refresh:before {
	content:'\f420';
}
.genericon-minimize:before {
	content:'\f421';
}
.genericon-maximize:before {
	content:'\f422';
}
.genericon-404:before {
	content:'\f423';
}
.genericon-spam:before {
	content:'\f424';
}
.genericon-summary:before {
	content:'\f425';
}
.genericon-cloud:before {
	content:'\f426';
}
.genericon-key:before {
	content:'\f427';
}
.genericon-dot:before {
	content:'\f428';
}
.genericon-next:before {
	content:'\f429';
}
.genericon-previous:before {
	content:'\f430';
}
.genericon-expand:before {
	content:'\f431';
}
.genericon-collapse:before {
	content:'\f432';
}
.genericon-dropdown:before {
	content:'\f433';
}
.genericon-dropdown-left:before {
	content:'\f434';
}
.genericon-top:before {
	content:'\f435';
}
.genericon-draggable:before {
	content:'\f436';
}
.genericon-phone:before {
	content:'\f437';
}
.genericon-send-to-phone:before {
	content:'\f438';
}
.genericon-plugin:before {
	content:'\f439';
}
.genericon-cloud-download:before {
	content:'\f440';
}
.genericon-cloud-upload:before {
	content:'\f441';
}
.genericon-external:before {
	content:'\f442';
}
.genericon-document:before {
	content:'\f443';
}
.genericon-book:before {
	content:'\f444';
}
.genericon-cog:before {
	content:'\f445';
}
.genericon-unapprove:before {
	content:'\f446';
}
.genericon-cart:before {
	content:'\f447';
}
.genericon-pause:before {
	content:'\f448';
}
.genericon-stop:before {
	content:'\f449';
}
.genericon-skip-back:before {
	content:'\f450';
}
.genericon-skip-ahead:before {
	content:'\f451';
}
.genericon-play:before {
	content:'\f452';
}
.genericon-tablet:before {
	content:'\f453';
}
.genericon-send-to-tablet:before {
	content:'\f454';
}
.genericon-info:before {
	content:'\f455';
}
.genericon-notice:before {
	content:'\f456';
}
.genericon-help:before {
	content:'\f457';
}
.genericon-fastforward:before {
	content:'\f458';
}
.genericon-rewind:before {
	content:'\f459';
}
.genericon-portfolio:before {
	content:'\f460';
}
.genericon-heart:before {
	content:'\f461';
}
.genericon-code:before {
	content:'\f462';
}
.genericon-subscribe:before {
	content:'\f463';
}
.genericon-unsubscribe:before {
	content:'\f464';
}
.genericon-subscribed:before {
	content:'\f465';
}
.genericon-reply-alt:before {
	content:'\f466';
}
.genericon-reply-single:before {
	content:'\f467';
}
.genericon-flag:before {
	content:'\f468';
}
.genericon-print:before {
	content:'\f469';
}
.genericon-lock:before {
	content:'\f470';
}
.genericon-bold:before {
	content:'\f471';
}
.genericon-italic:before {
	content:'\f472';
}
.genericon-picture:before {
	content:'\f473';
}
.genericon-fullscreen:before {
	content: '\f474';
}
/* Generic shapes */
.genericon-uparrow:before {
	content:'\f500';
}
.genericon-rightarrow:before {
	content:'\f501';
}
.genericon-downarrow:before {
	content:'\f502';
}
.genericon-leftarrow:before {
	content: '\f503';
}
/*--------------------------------------------------------------15.6 Highlights--------------------------------------------------------------*/
.highlight {
	color: #fff;
}
/*--------------------------------------------------------------15.7 Dividers--------------------------------------------------------------*/
.divider {
	background:none;
	display:block;
	margin:20px auto;
	height:0;
	width: 100%;
}
/* Colors */
.divider.grey {
	border-color:#ccc;
}
.divider.yellow {
	border-color:#FBCB43;
}
.divider.green {
	border-color:#34B67A;
}
.divider.red {
	border-color:#E57368;
}
.divider.blue {
	border-color:#77A7FB;
}
.divider.purple {
	border-color:#955BA5;
}
.divider.black {
	border-color: #202020;
}
/* Type */
.solid {
	border-top:1px solid #ccc;
}
.dashed {
	border-top:1px dashed #ccc;
}
.dotted {
	border-top:1px dotted #ccc;
}
.filled {
	border-top:5px solid #ccc;
}
.double-solid {
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
	height:5px;
}
.double-dashed {
	border-top:1px dashed #ccc;
	border-bottom:1px dashed #ccc;
	height:5px;
}
.double-dotted {
	border-top:1px dotted #ccc;
	border-bottom:1px dotted #ccc;
	height: 5px;
}
/*--------------------------------------------------------------15.8 Archive--------------------------------------------------------------*/
ul.shortcode-archive {
	list-style:none;
	margin:0;
	padding-bottom:1em;
}
ul.shortcode-archive li {
	margin-bottom:5px;
}
.shortcode-archive-title:before {
	content:'\f436';
	font-family:'Genericons';
}
.shortcode-archive-title {
	text-transform:uppercase;
}
.shortcode-date {
	color:#ccc;
	padding-left: 10px;
}
/*--------------------------------------------------------------16.0 Media Queries--------------------------------------------------------------*/
@media (max-width:600px) {
	.entry-meta {
			font-size:12px !important;
	}
}
@media screen and (min-width:1024px) {
	.site-content {
			margin-left:-15px;
			margin-right:-15px;
			overflow:hidden;
		min-height:280px;
	}
	.row-shortcode {
			margin:0 -15px;
			padding-bottom:2em;
	}
	.page-template-layoutspage-left-sidebar-php .column {
			float:right !important;
	}
	.page-template-layoutspage-no-sidebar-php .column {
			float:none !important;
	}
	.page .column,.archive .column,.search .column {
			float:left;
	}
}
@media screen and (max-width:860px) {
	.flex-direction-nav .flex-prev {
		opacity:1;
		left:-10px;
	}
	.flex-direction-nav .flex-next {
		opacity:1;
		right:10px;
	}
}
@media screen and (max-width:1023px) {
	#primary {
			padding-top:1em;
	}
	#secondary {
			border-top:1px solid #404040;
	}
	.menu-toggle,.main-navigation.toggled .nav-menu {
			display:block;
	}
	button.menu-toggle {
			background:none;
			border:0;
			box-shadow:none;
			color:#ffffff;
			font-size:14px;
			margin:0 auto;
			outline-style:none;
			text-shadow:none;
			text-transform:uppercase;
	}
	.main-navigation {
			display:block;
			float:none;
			margin:0 auto;
	}
		.main-navigation a {
				display:block;
				padding:0.5em 0;
				text-decoration:none;
	}
	.main-navigation ul {
			display:none;
	}
		.main-navigation li {
				float:none;
				margin:0;
				position:relative;
				padding:0;
				text-align:center;
	}
		.main-navigation li:last-child {
				border-bottom:0;
	}
	.main-navigation ul li>ul {
			display:block;
			margin-left:0;
	}
	.main-navigation ul ul {
			border-left:0;
			box-shadow:none;
			display:block;
			float:none;
			left:0;
			padding:0;
			position:relative;
			top:0;
			text-transform:capitalize;
			z-index:99999;
	}
	.main-navigation ul ul li {
			border-bottom:0;
			padding:0;
	}
	.widget_search input[type="search"] {
			width: 30%;
	}
}
/*--------------------------------------------------------------17.0 Print--------------------------------------------------------------*/
@media print {
	body {
			background:none !important;
		/* Brute force since user agents all print differently. */
		color:#2b2b2b;
			font-size:12pt;
	}
	.hentry,.site-content .entry-header,.site-content .entry-content,.site-content .entry-summary,.site-content .entry-meta,.page-content,.archive-header,.page-header {
			max-width:100%;
	}
	.edit-link,.page-links,.widget-area,.more-link,.site-footer,.smoothup,#social-box,.nav-links,.comments-area {
			display:none;
	}
	.site-title a,.entry-meta,.entry-meta a {
			color:#2b2b2b !important;
	}
	.entry-content a,.entry-summary a,.page-content a,.comment-content a {
			text-decoration:none;
	}
	.site-header,.entry-thumbnail,.site-content .entry-header,.site-footerr {
			background:transparent;
	}
	.site-title {
			float:none;
			font-size:19pt;
	}
	.content-area {
			padding-top:0;
	}
	.entry-thumbnail img {
			margin:0 10px 24px;
	}
	.archive-title,.page-title {
			margin: 0 10px 48px;
	}
}
/* Masonry */
@media (min-width:480px) {
	.bloggrid article {
		width:46%;
		margin-right:4%;
	}
	.bloggrid article:nth-child(2n+2) {
		margin-right:0;
	}
}
.bloggrid article.hentry,.single-portfolio .hentry {
	margin-bottom:0;
}
.bloggrid .entry-footer {
	padding-top:0;
}
@media (min-width:480px) {
	.portfoliogrid {
		margin-left:-1.2%;
		margin-right:-1.2%;
	}
	.portfoliogrid article {
		width:30.93%;
		margin-left:1.2%;
		margin-right:1.2%;
	}
}
.page-template-template-portfolio .grid .entry-thumbnail img {
	width:100%;
	transition:all 0.4s;
}
.page-template-template-portfolio .grid .entry-thumbnail img:hover {
	opacity:0.8;
	transition:all 0.4s;
}
.portfoliogrid{
	height: 400px;
}
.portfoliogrid .entry-thumbnail,.single-portfolio .entry-thumbnail {
	padding-top:0;
}
.portfoliogrid .entry-title {
	font-size:14px;
	color:#111;
	font-weight:400;
}
.portfoliogrid article.hentry {
	margin-bottom:30px;
	background-color: #8f8f8f;
	padding: 50px 30px;
}
a.portfoliotype {
	text-decoration:none;
	margin-right:5px;
	font-style:italic;
}
a.portfoliotype:after {
	content:'/';
	margin-left:5px;
}
a.portfoliotype:last-child:after {
	content:none;
	margin-right: 0;
}
/* WooCommerce */
.woocommerce .woocommerce-ordering select {
	padding:5px;
}
.woocommerce a.button {
	background-color:#f4f5f6;
	color:#333;
	border:1px solid rgba(0,0,0,0.1);
	font-size:11px;
	text-transform:uppercase;
	border-radius:0;
	padding:10px;
}
.woocommerce nav.woocommerce-pagination ul li span,.woocommerce nav.woocommerce-pagination ul li a {
	padding:8px 12px;
}
.woocommerce span.onsale {
	min-height:50px;
	min-width:50px;
	padding:.30px;
	line-height:50px;
	font-weight:400;
	background-color:#ACE096;
}
.woocommerce div.product .woocommerce-tabs .panel h2,.related.products h2,.woocommerce #reviews h3,.cart_totals h2,.upsells.products h2 {
	font-weight:400;
	font-size:17px;
	margin-top:0;
}
.woocommerce form h3,.woocommerce-account h2,.woocommerce-account h3 {
	font-size:17px;
	font-weight:400;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li {
	background:#f4f5f6;
}
.woocommerce #reviews #comments ol.commentlist li .comment-text,.woocommerce #respond input#submit,.woocommerce a.button,.woocommerce button.button,.woocommerce input.button {
	border-radius:0;
}
.woocommerce #respond input#submit.alt,.woocommerce a.button.alt,.woocommerce button.button.alt,.woocommerce input.button.alt {
	background-color:#222;
}
.woocommerce #respond input#submit.alt:hover,.woocommerce a.button.alt:hover,.woocommerce button.button.alt:hover,.woocommerce input.button.alt:hover {
	background-color:#000;
}
.woocommerce div.product form.cart,.woocommerce div.product p.cart {
	margin-bottom:2em;
	margin-top:2em;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li {
	text-transform:uppercase;
	font-size:12px;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li:before {
	left:-3px;
	border-width:0;
	box-shadow:none;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li,.woocommerce table.shop_table,#add_payment_method #payment,.woocommerce-checkout #payment,.select2-drop.select2-drop-above,.select2-container .select2-choice {
	border-radius:0;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li:after {
	border-bottom-left-radius:0;
	border-width:0;
	box-shadow:none;
}
.woocommerce div.product .woocommerce-tabs ul.tabs li:after,.woocommerce div.product .woocommerce-tabs ul.tabs li:before {
	width:0;
}
.posted_in a {
	text-decoration:none;
	font-style:italic;
}
.posted_in a:before {
	content:'#';
}
.woocommerce div.product form.cart .variations label {
	text-transform:capitalize;
}
.woocommerce div.product form.cart .variations select {
	min-width:55%;
	padding:5px;
}
.woocommerce #reviews #comments ol.commentlist li img.avatar {
	width:42px;
	height:auto;
	border:0;
	padding:0;
}
.woocommerce nav.woocommerce-pagination {
	margin-bottom:30px;
}
.woocommerce div.product p.price,.woocommerce div.product span.price {
	font-size:14px;
}
.woocommerce #coupon_code {
	min-width:150px;
}
.woocommerce div.product form.cart .button {
	vertical-align:middle;
	float:left;
	text-transform:uppercase;
	letter-spacing:1px;
	font-size:11px;
	min-height:31px;
}
.woocommerce ul.products li.product {
	transition:all 0.3s;
}
.woocommerce ul.products li.product:hover {
	border:1px solid #eee;
	padding:20px;
	transition:all 0.3s;
}
.woocommerce ul.products li.product h3 {
	font-size:1.1em;
	font-weight:400;
}
.woocommerce form.login, .woocommerce form.register {
	padding: 20px;
	margin: 1em 0;
	border-radius: 0px;
	max-width:480px;
}
.wpcmsdev-button {
	border:0 !Important;
	border-radius:0 !Important;
	background-image:none !Important;
}
.wpcmsdev-accordion .accordion-item-title a,.wpcmsdev-tabs .headings a,.wpcmsdev-toggle .toggle-title a {
	background-image:none !Important;
}
.wpcmsdev-accordion,.wpcmsdev-tabs .headings a:first-child,.wpcmsdev-tabs .headings a:last-child,.wpcmsdev-toggle {
	border-radius:0 !Important;
}
h3#reply-title,.comments-title {
	font-weight:400;
	margin-top:0;
	font-size:16px;
	text-transform:uppercase;
}
form.comment-form {
	margin-bottom:30px;
}
.wpcmsdev-columns {
	margin-left:-15px;
	margin-right:-15px;
}
/* CUSTOM STYLE */
body { font-family: 'Roboto'; }
h1, h2, h3, h4, h5, h6 { font-family: 'Oswald'; }
.site-title { font-family: 'Herr Von Muellerhoff'; }
.site-description { font-family: 'Quattrocento Sans'; }
.entry-title { font-family: 'Oswald'; }
.main-navigation { font-family: 'Oswald'; }
.widget-title { font-family: 'Oswald' !important; }
body {
	font-size: 14px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-style: normal;
	font-weight: 700;
	letter-spacing: 0px;
	text-align: left;
	text-transform: none;
}
h1 { font-size: 36px; }
h2 { font-size: 30px; }
h3 { font-size: 24px; }
h4 { font-size: 18px; }
h5 { font-size: 14px; }
h6 { font-size: 12px; }
.site-title {
	font-size: 60px;
	font-style: normal;
	font-weight: 300;
	letter-spacing: 2px;
	text-align: center;
	text-transform: none;
}
.site-description {
	font-size: 14px;
	font-style: italic;
	font-weight: 300;
	letter-spacing: 0px;
	text-align: center;
	text-transform: none;
}
.entry-title {
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 1px;
	text-align: left;
	text-transform: uppercase;
}
.entry-meta,
.cat-links,
.tags-links,
.comments-link,
.edit-link {
	font-size: 13px;
	font-style: italic;
	font-weight: 300;
	letter-spacing: 0px;
	text-align: left;
	text-transform: none;
}
.main-navigation {
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
}
.widget-title {
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 1px;
	text-align: left;
	text-transform: uppercase;
}
body,
button,
input,
select,
textarea {
	color: #888888;
}
h1, h2, h3, h4, h5, h6 {
	color: #222222;
}
.entry-title, .entry-title a {
	color: #222222;
}
.main-navigation a {
	color: #222222 !important;
}
@media screen and (max-width: 1023px) {
	button.menu-toggle {
		color: #222222;
	}
}
.widget-title {
	color: #222222;
}
.site-title a, .site-description {
	color: #222222;
}
#comments label, #review_form label {
	min-width: 60px;
    display: inline-block;
}
.done {
	background: #9CCA17;
    color: #fff;
    padding: 10px;
	margin-top:15px;
	text-align:center;
	display: none;
}
.error input, input.error, .error textarea, textarea.error {
    background-color: #ffffff;
    border: 1px solid orangered !Important;
    -webkit-transition: border linear 0.2s,box-shadow linear 0.2s;
    -moz-transition: border linear 0.2s,box-shadow linear 0.2s;
    -o-transition: border linear 0.2s,box-shadow linear 0.2s;
    transition: border linear 0.2s,box-shadow linear 0.2s;
}
`;
