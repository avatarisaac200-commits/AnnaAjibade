import { readFile } from "fs/promises";
import path from "path";

const WHATSAPP_NUMBER = "2349162057661";
const facilitatorDefs = [
  {
    name: "Ifeoluwa Oyewole",
    image: "/facilitators/ifeoluwa.jpeg",
    bioFile: "bio1.md",
  },
  {
    name: "Olufolake Zion Adegoke",
    image: "/facilitators/olufolake.jpeg",
    bioFile: "bio2.md",
  },
  {
    name: "Temitayo Femi Matthew",
    image: "/facilitators/matthew.jpg",
    bioFile: "bio3.md",
  },
  {
    name: "Damilola Mogaji",
    image: "/facilitators/mogaji.jpg",
    bioFile: "bio4.md",
  },
];

function replaceFirst(html: string, search: string, replacement: string) {
  const index = html.indexOf(search);
  if (index === -1) return html;
  return (
    html.slice(0, index) +
    replacement +
    html.slice(index + search.length)
  );
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderBioMarkdown(markdown: string) {
  const normalized = markdown.replace(/\\\*\\\*/g, "**").trim();
  const paragraphs = normalized
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);

  return paragraphs
    .map((paragraph) => {
      const escaped = escapeHtml(paragraph).replace(
        /\*\*(.+?)\*\*/g,
        "<strong>$1</strong>"
      );
      return `<p style="color:var(--text-dim);font-size:14px;line-height:1.8;margin-bottom:16px">${escaped}</p>`;
    })
    .join("");
}

async function readFacilitatorBio(filename: string) {
  const bioPath = path.join(
    process.cwd(),
    "public",
    "facilitators",
    filename
  );

  try {
    return await readFile(bioPath, "utf8");
  } catch {
    return "";
  }
}

async function buildFacilitatorsSection() {
  const bios = await Promise.all(
    facilitatorDefs.map((item) => readFacilitatorBio(item.bioFile))
  );

  const cards = facilitatorDefs
    .map((facilitator, index) => {
      const bioHtml =
        renderBioMarkdown(bios[index]) ||
        `<p style="color:var(--text-dim);font-size:14px;line-height:1.8;margin-bottom:0">Bio coming soon.</p>`;

      return `
        <article style="padding:18px;background:rgba(9,18,36,0.94);border:1px solid var(--border);border-radius:18px;display:grid;gap:20px">
          <div style="position:relative;overflow:hidden;border-radius:14px;aspect-ratio:4/4.5;background:var(--surface)">
            <img src="${facilitator.image}" alt="${facilitator.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 12%">
          </div>
          <div>
            <div style="font-family:var(--serif);font-size:28px;font-weight:400;line-height:1.1;color:var(--text);margin-bottom:14px">${facilitator.name}</div>
            ${bioHtml}
          </div>
        </article>
      `;
    })
    .join("");

  return `
<!-- FACILITATORS -->
<section id="facilitators">
  <div class="section-tag">08 A· Facilitators</div>
  <h2 class="section-title">Meet the <em>facilitators.</em></h2>
  <p class="section-lead">A lineup of facilitators bringing real-world perspectives across leadership, public health, execution, and impact-driven work.</p>
  <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:60px">
    ${cards}
  </div>
</section>
`;
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
  const facilitatorsSection = await buildFacilitatorsSection();

  html = html.replace(/2025/g, "2026");
  html = html.replace(
    /<div class="countdown-label">[\s\S]*?<\/div>/,
    '<div class="countdown-label">Masterclass Starts In</div>'
  );
  html = html.replace(/Host/g, "Covener");
  html = html.replace(/host\./g, "covener.");
  html = html.replace(/hosted by/g, "convened by");
  html = html.replace(/<!-- REGISTER -->/, `${facilitatorsSection}\n\n<!-- REGISTER -->`);
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
