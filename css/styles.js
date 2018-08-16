let styles = `@import url(http://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab);

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* STYLES */

body{
  background-color: #3F3F4E;
  font-family: 'Open Sans', 'Helvetica', sans-serif;
  padding: 50px;
  max-width: 500px;
  margin: auto;
}

h1, h2, h3, h4, h5, h6{
  font-family: 'Roboto Slab', 'Helvetica', sans-serif;
  color: #B4D12B;
  margin-bottom: 20px;
}

h1{
  font-size: 50px;
  line-height: 55px;
}

h2{
  font-size: 30px;
  line-height: 38px;
  color: #879642;
}

h3{
  font-size: 25px;
  line-height: 30px;
  color: #F2FFC1;
}

p{
  color: #C6C5AC;
  font-family: 'Open Sans', 'Helvetica', sans-serif;
  line-height: 26px;
  font-size: 15px;
}

ul{

}

li{
  line-height: 26px;
  font-size: 15px;
}

a{
  color: #F2FFC1;
  text-decoration: none;
  border-bottom: 1px dashed #E3DE8B;
}

a:hover{
  color: #C6C5AC;
  border-bottom: 1px dashed #C6C5AC;
}`;

module.exports = {
  styles,
}