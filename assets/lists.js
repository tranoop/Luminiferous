/* Draws the tiles from content.js, newest first. Nothing to edit here. */
(function(){
var base=new URL('../',document.currentScript.src).href;
var data=window.LUMINIFEROUS||{};
var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function fmt(d){var p=String(d||'').split('-');return p.length===3?(+p[2])+' '+months[+p[1]-1]+' '+p[0]:'';}
document.querySelectorAll('[data-list]').forEach(function(host){
  var items=(data[host.getAttribute('data-list')]||[]).map(function(it,i){return {it:it,i:i};}).sort(function(a,b){
    var x=a.it.date||'',y=b.it.date||'';
    return x<y?1:x>y?-1:b.i-a.i;
  }).map(function(o){return o.it;});
  if(!items.length){host.innerHTML='<p class="empty">Coming soon.</p>';return;}
  var ul=document.createElement('ul');ul.className='entries';
  items.forEach(function(it){
    var meta=[fmt(it.date),it.tag].filter(Boolean).join(', ');
    var li=document.createElement('li');
    li.innerHTML='<a class="entry" href="'+esc(base+it.url)+'"><b'+(it.lang?' lang="'+esc(it.lang)+'"':'')+'>'+esc(it.title)+'</b><span>'+esc(it.text||'')+'</span><small>'+esc(meta)+'</small></a>';
    ul.appendChild(li);
  });
  host.innerHTML='';host.appendChild(ul);
});
})();
