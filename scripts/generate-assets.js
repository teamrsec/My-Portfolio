/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '..', 'public', 'assets');
const projectsDir = path.join(targetDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B132B"/>
      <stop offset="50%" stop-color="#1C2541"/>
      <stop offset="100%" stop-color="#0A1128"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(6, 182, 212, 0.08)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  
  <circle cx="300" cy="240" r="110" fill="#1E293B" stroke="url(#accent)" stroke-width="3"/>
  <circle cx="300" cy="210" r="50" fill="#334155"/>
  <path d="M 215 310 C 215 260, 385 260, 385 310 Z" fill="#334155"/>
  
  <g transform="translate(100, 420)">
    <rect width="400" height="210" rx="12" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5"/>
    <text x="200" y="42" text-anchor="middle" fill="#F8FAFC" font-family="monospace" font-size="16" font-weight="bold">ENGINEERING IDENTITY</text>
    <text x="200" y="70" text-anchor="middle" fill="#06B6D4" font-family="monospace" font-size="12">BUILD · UNDERSTAND · TEST · SECURE</text>
    
    <line x1="30" y1="92" x2="370" y2="92" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    
    <text x="40" y="125" fill="#94A3B8" font-family="monospace" font-size="12">ROLE:</text>
    <text x="110" y="125" fill="#E2E8F0" font-family="sans-serif" font-size="12" font-weight="600">Flutter &amp; Web Developer</text>
    
    <text x="40" y="155" fill="#94A3B8" font-family="monospace" font-size="12">FOCUS:</text>
    <text x="110" y="155" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="600">Cybersecurity Specialist Studies</text>
    
    <text x="40" y="185" fill="#94A3B8" font-family="monospace" font-size="12">STATUS:</text>
    <text x="110" y="185" fill="#38BDF8" font-family="sans-serif" font-size="12" font-weight="600">Active Hands-on Labs (2026)</text>
  </g>
</svg>`;

const sheqleeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="sbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09101D"/>
      <stop offset="100%" stop-color="#111C30"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sbg)"/>
  <circle cx="680" cy="120" r="160" fill="rgba(6, 182, 212, 0.05)"/>
  
  <g transform="translate(60, 50)">
    <rect width="250" height="340" rx="18" fill="#1E293B" stroke="rgba(6, 182, 212, 0.4)" stroke-width="2"/>
    <rect x="20" y="20" width="210" height="30" rx="6" fill="#0F172A"/>
    <text x="35" y="40" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Sheqlee Mobile</text>
    
    <rect x="20" y="65" width="210" height="65" rx="8" fill="#0B132B" stroke="rgba(255,255,255,0.06)"/>
    <circle cx="45" cy="97" r="14" fill="#0284C7"/>
    <rect x="70" y="87" width="100" height="8" rx="4" fill="#E2E8F0"/>
    <rect x="70" y="103" width="65" height="6" rx="3" fill="#64748B"/>
    
    <rect x="20" y="145" width="210" height="65" rx="8" fill="#0B132B" stroke="rgba(255,255,255,0.06)"/>
    <circle cx="45" cy="177" r="14" fill="#10B981"/>
    <rect x="70" y="167" width="115" height="8" rx="4" fill="#E2E8F0"/>
    <rect x="70" y="183" width="75" height="6" rx="3" fill="#64748B"/>

    <rect x="20" y="225" width="210" height="65" rx="8" fill="#0B132B" stroke="rgba(255,255,255,0.06)"/>
    <circle cx="45" cy="257" r="14" fill="#8B5CF6"/>
    <rect x="70" y="247" width="90" height="8" rx="4" fill="#E2E8F0"/>
    <rect x="70" y="263" width="60" height="6" rx="3" fill="#64748B"/>
  </g>
  
  <g transform="translate(370, 100)">
    <rect width="90" height="26" rx="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1"/>
    <text x="45" y="18" text-anchor="middle" fill="#06B6D4" font-family="monospace" font-size="12" font-weight="bold">FLUTTER</text>
    <text x="0" y="70" fill="#F8FAFC" font-family="sans-serif" font-size="32" font-weight="800">Sheqlee Platform</text>
    <text x="0" y="105" fill="#94A3B8" font-family="sans-serif" font-size="16">Freelancer &amp; Enterprise Marketplace</text>
    <text x="0" y="140" fill="#64748B" font-family="sans-serif" font-size="14">Cross-Platform Mobile App · REST API · Production</text>
    
    <g transform="translate(0, 180)">
      <rect width="180" height="36" rx="6" fill="#0F172A" stroke="rgba(6, 182, 212, 0.3)"/>
      <text x="90" y="23" text-anchor="middle" fill="#38BDF8" font-family="monospace" font-size="12">DEVELOPER INTERNSHIP</text>
    </g>
  </g>
</svg>`;

const tigrignaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="tbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1320"/>
      <stop offset="100%" stop-color="#131F33"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#tbg)"/>
  
  <g transform="translate(50, 90)">
    <rect width="320" height="260" rx="16" fill="#0F172A" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5"/>
    <text x="25" y="40" fill="#10B981" font-family="monospace" font-size="13" font-weight="bold">SPECTRUM &amp; ACOUSTIC PIPELINE</text>
    
    <path d="M 30 140 Q 60 40 90 140 T 150 140 T 210 140 T 270 140 T 300 140" fill="none" stroke="#06B6D4" stroke-width="3"/>
    <path d="M 30 140 Q 60 80 90 140 T 150 140 T 210 140 T 270 140 T 300 140" fill="none" stroke="#10B981" stroke-width="2" opacity="0.7"/>
    
    <rect x="25" y="185" width="270" height="45" rx="6" fill="#1E293B"/>
    <text x="160" y="215" text-anchor="middle" fill="#F8FAFC" font-family="sans-serif" font-size="18" font-weight="bold">ትግርኛ ድምጺ ናብ ጽሑፍ</text>
  </g>
  
  <g transform="translate(410, 110)">
    <rect width="140" height="26" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
    <text x="70" y="18" text-anchor="middle" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold">PYTHON &amp; AUDIO ML</text>
    <text x="0" y="70" fill="#F8FAFC" font-family="sans-serif" font-size="30" font-weight="800">Tigrigna STT</text>
    <text x="0" y="105" fill="#94A3B8" font-family="sans-serif" font-size="16">Speech-to-Text for Tigrigna Language</text>
    <text x="0" y="140" fill="#64748B" font-family="sans-serif" font-size="14">Low-Resource Speech Processing · MFCC Features</text>
  </g>
</svg>`;

const merkatoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="mbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#172033"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#mbg)"/>
  
  <g transform="translate(60, 60)">
    <rect width="310" height="320" rx="12" fill="#0F172A" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.5"/>
    <rect width="310" height="30" rx="12" fill="#1E293B"/>
    <circle cx="20" cy="15" r="5" fill="#EF4444"/>
    <circle cx="35" cy="15" r="5" fill="#F59E0B"/>
    <circle cx="50" cy="15" r="5" fill="#10B981"/>
    
    <rect x="20" y="50" width="125" height="110" rx="8" fill="#1E293B"/>
    <rect x="165" y="50" width="125" height="110" rx="8" fill="#1E293B"/>
    <rect x="20" y="180" width="125" height="110" rx="8" fill="#1E293B"/>
    <rect x="165" y="180" width="125" height="110" rx="8" fill="#1E293B"/>
  </g>
  
  <g transform="translate(410, 110)">
    <rect width="130" height="26" rx="4" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1"/>
    <text x="65" y="18" text-anchor="middle" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold">MERN STACK</text>
    <text x="0" y="70" fill="#F8FAFC" font-family="sans-serif" font-size="32" font-weight="800">Merkato Store</text>
    <text x="0" y="105" fill="#94A3B8" font-family="sans-serif" font-size="16">E-Commerce for Local Ethiopian Commerce</text>
    <text x="0" y="140" fill="#64748B" font-family="sans-serif" font-size="14">React · Express · Node.js · MongoDB · JWT Auth</text>
  </g>
</svg>`;

const md5Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="hbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F17"/>
      <stop offset="100%" stop-color="#191E29"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#hbg)"/>
  
  <g transform="translate(50, 75)">
    <rect width="330" height="300" rx="12" fill="#090D16" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.5"/>
    <text x="25" y="35" fill="#F59E0B" font-family="monospace" font-size="13">$ python md5_explorer.py</text>
    <text x="25" y="70" fill="#94A3B8" font-family="monospace" font-size="11">[+] Computing digest...</text>
    <text x="25" y="95" fill="#38BDF8" font-family="monospace" font-size="11">MD5: 5d41402abc4b2a76b9719d911017c592</text>
    <text x="25" y="130" fill="#EF4444" font-family="monospace" font-size="11">[!] CRYPTO WARNING: Collision Broken</text>
    <text x="25" y="150" fill="#EF4444" font-family="monospace" font-size="11">[!] Wang et al. 2004 vulnerability</text>
    <text x="25" y="190" fill="#10B981" font-family="monospace" font-size="11">[+] Recommended: SHA-256 / Argon2</text>
  </g>
  
  <g transform="translate(420, 110)">
    <rect width="160" height="26" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1"/>
    <text x="80" y="18" text-anchor="middle" fill="#F59E0B" font-family="monospace" font-size="12" font-weight="bold">CRYPTO &amp; SECURITY LAB</text>
    <text x="0" y="70" fill="#F8FAFC" font-family="sans-serif" font-size="30" font-weight="800">MD5 Hash Explorer</text>
    <text x="0" y="105" fill="#94A3B8" font-family="sans-serif" font-size="16">Hash Computation &amp; Collision Study</text>
    <text x="0" y="140" fill="#64748B" font-family="sans-serif" font-size="14">Python CLI · Avalanche Effect · Educational</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'profile.svg'), profileSvg);
fs.writeFileSync(path.join(projectsDir, 'sheqlee.svg'), sheqleeSvg);
fs.writeFileSync(path.join(projectsDir, 'tigrigna-stt.svg'), tigrignaSvg);
fs.writeFileSync(path.join(projectsDir, 'merkato-store.svg'), merkatoSvg);
fs.writeFileSync(path.join(projectsDir, 'md5-converter.svg'), md5Svg);

Promise.all([
  sharp(Buffer.from(profileSvg)).jpeg().toFile(path.join(targetDir, 'profile.jpg')),
  sharp(Buffer.from(sheqleeSvg)).png().toFile(path.join(projectsDir, 'sheqlee.png')),
  sharp(Buffer.from(tigrignaSvg)).png().toFile(path.join(projectsDir, 'tigrigna-stt.png')),
  sharp(Buffer.from(merkatoSvg)).png().toFile(path.join(projectsDir, 'merkato-store.png')),
  sharp(Buffer.from(md5Svg)).png().toFile(path.join(projectsDir, 'md5-converter.png')),
]).then(() => {
  console.log('All project & profile illustrations generated successfully.');
});
