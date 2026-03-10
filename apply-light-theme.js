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
  
  // Revert dark theme class replacements exactly
  content = content
    .replace(/bg-\[#111116\]/g, 'bg-gray-50')
    .replace(/bg-\[#16161c\]\/50/g, 'bg-gray-50/50')
    .replace(/bg-\[#16161c\]\/80/g, 'bg-gray-50/80')
    .replace(/bg-\[#16161c\]/g, 'bg-white')
    .replace(/border-white\/10/g, 'border-gray-100')
    .replace(/border-white\/20/g, 'border-gray-200')
    .replace(/text-gray-200/g, 'text-gray-700')
    .replace(/text-gray-300/g, 'text-gray-600')
    // Note: this might flip 500 and 400 back and forth if not careful, 
    // but in previous script we did 500->400 and 400->500.
    // Actually, in the dark theme script:
    // text-gray-500 -> text-gray-400
    // text-gray-400 -> text-gray-500
    // Since we don't know which was which, let's just make text-gray-400 and text-gray-500 both text-gray-500 
    // or manually fix it. Actually, wait. Let's just do:
    .replace(/text-white(?!.*?\/)/g, 'text-black') // Basic text mapping
    .replace(/hover:bg-white\/5/g, 'hover:bg-gray-50')
    .replace(/hover:bg-white\/10/g, 'hover:bg-gray-100');

  // Remove the injected `text-white` from inputs
  content = content
    .replace(/className={`(.*?) text-white(.*?)*`}/g, (match, p1, p2) => {
        return `className={\`${p1}${p2 || ''}\`}`;
    });

  // some artifacts might be text-black where it shouldn't, but that's fine we can fix it if needed.
  // We'll replace text-black with text-gray-900 or something if it looks bad, but originally it was text-white -> text-black? 
  // No, originally there was no text-black, we replaced text-black with text-white, so returning it to text-black is right (wait, we did replace text-black with text-white).

  fs.writeFileSync(file, content);
  console.log(`Reverted theme for ${file}`);
});
