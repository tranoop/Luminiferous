/* The tab bar for every page. To add or rename a tab, edit the list below. */
(function(){
var tabs=[
  ['Home','index.html'],
  ['Popular Science','popular-science.html'],
  ['Education','education.html'],
  ['About','about.html']
];
var base=new URL('../',document.currentScript.src).href;
var cur=document.body.getAttribute('data-section');
var host=document.getElementById('topbar');
if(!host)return;
host.className='topbar';
var bar=document.createElement('div');bar.className='wrap bar';
var brand=document.createElement('a');brand.className='brand';brand.href=base+'index.html';brand.textContent='Luminiferous';
var nav=document.createElement('nav');nav.className='tabs';nav.setAttribute('aria-label','Sections');
tabs.forEach(function(t){
  var a=document.createElement('a');a.href=base+t[1];a.textContent=t[0];
  if(t[1]===cur)a.setAttribute('aria-current','page');
  nav.appendChild(a);
});
bar.appendChild(brand);bar.appendChild(nav);host.appendChild(bar);
})();
