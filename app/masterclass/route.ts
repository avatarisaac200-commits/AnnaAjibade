import { readFile } from "fs/promises";
import path from "path";

const WHATSAPP_NUMBER = "2349162057661";

function replaceFirst(html: string, search: string, replacement: string) {
  const index = html.indexOf(search);
  if (index === -1) return html;
  return (
    html.slice(0, index) +
    replacement +
    html.slice(index + search.length)
  );
}

function buildScript() {
  return `<script>
(function(){
  var target=new Date('2026-06-19T18:00:00+01:00').getTime();
  var dEl=document.getElementById('cd-d'),hEl=document.getElementById('cd-h'),mEl=document.getElementById('cd-m'),sEl=document.getElementById('cd-s');
  function pad(n){return(n<10?'0':'')+n}
  function tick(){
    var diff=Math.max(0,target-Date.now());
    var d=Math.floor(diff/86400000);diff%=86400000;
    var h=Math.floor(diff/3600000);diff%=3600000;
    var m=Math.floor(diff/60000);diff%=60000;
    var s=Math.floor(diff/1000);
    if(dEl)dEl.textContent=pad(d);
    if(hEl)hEl.textContent=pad(h);
    if(mEl)mEl.textContent=pad(m);
    if(sEl)sEl.textContent=pad(s);
  }
  tick();setInterval(tick,1000);
})();

function handleSubmit(){
  var first=document.getElementById('f-first').value.trim();
  var last=document.getElementById('f-last').value.trim();
  var email=document.getElementById('f-email').value.trim();
  var phone=document.getElementById('f-phone').value.trim();
  var cat=document.getElementById('f-category').value;
  var country=document.getElementById('f-country').value.trim();
  if(!first||!email||!cat){alert('Please fill in your name, email, and category.');return;}
  var message=[
    'Hello Anna, I want to register for the Dreamers to Doers masterclass.',
    '',
    'First Name: '+first,
    'Last Name: '+(last||'Not provided'),
    'Email: '+email,
    'WhatsApp Number: '+(phone||'Not provided'),
    'Category: '+cat,
    'Country: '+(country||'Not provided')
  ].join('\\n');
  var overlay=document.getElementById('success-overlay');
  overlay.classList.add('active');
  document.body.style.overflow='hidden';
  setTimeout(function(){window.location.href='https://wa.me/${WHATSAPP_NUMBER}?text='+encodeURIComponent(message);},1500);
}
</script>`;
}

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "masterclass",
    "index.html"
  );
  let html = await readFile(filePath, "utf8");

  html = html.replace(/2025/g, "2026");
  html = replaceFirst(
    html,
    "June 19",
    "June 19"
  );
  html = html.replace(
    /<script>[\s\S]*?<\/script>\s*<\/body>/,
    `${buildScript()}\n</body>`
  );

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
