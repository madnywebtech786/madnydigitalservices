const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const dirs = [
  path.join(__dirname, 'src', 'app', 'cms-admin'),
  path.join(__dirname, 'src', 'components', 'admin')
];

let files = [];
dirs.forEach(d => {
  files = [...files, ...walkSync(d)];
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Apply dark theme class replacements
  content = content
    .replace(/bg-gray-50(?!\/)/g, 'bg-[#111116]') // Replace bg-gray-50 that don't have opacity
    .replace(/bg-gray-50\/50/g, 'bg-[#16161c]/50')
    .replace(/bg-gray-50\/80/g, 'bg-[#16161c]/80')
    .replace(/bg-white/g, 'bg-[#16161c]')
    .replace(/border-gray-100/g, 'border-white/10')
    .replace(/border-gray-200/g, 'border-white/20')
    .replace(/text-gray-700/g, 'text-gray-200')
    .replace(/text-gray-600/g, 'text-gray-300')
    .replace(/text-gray-500/g, 'text-gray-400')
    .replace(/text-gray-400/g, 'text-gray-500')
    .replace(/hover:bg-gray-50/g, 'hover:bg-white/5')
    .replace(/hover:bg-gray-100/g, 'hover:bg-white/10')
    .replace(/text-black/g, 'text-white')
    // Input text color specifically to ensure it's visible while typing
    .replace(/<input(.*?)className={`(.*?)`}(.*?)\/>/g, (match, p1, p2, p3) => {
      if (!p2.includes('text-white') && !p2.includes('text-gray-200')) {
        return `<input${p1}className={\`${p2} text-white\`}${p3}/>`;
      }
      return match;
    })
    .replace(/<textarea(.*?)className={`(.*?)`}(.*?)\/>/g, (match, p1, p2, p3) => {
      if (!p2.includes('text-white') && !p2.includes('text-gray-200')) {
        return `<textarea${p1}className={\`${p2} text-white\`}${p3}/>`;
      }
      return match;
    });

  fs.writeFileSync(file, content);
  console.log(`Updated theme for ${file}`);
});
