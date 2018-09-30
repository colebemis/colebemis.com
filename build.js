const fs = require('fs');
const path = require('path');
const marked = require('marked');
const cheerio = require('cheerio');

const DEST = 'build';

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const markdown = fs.readFileSync(path.resolve(__dirname, 'README.md'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, 'style.css'));
const favicon = fs.readFileSync(path.resolve(__dirname, 'favicon.ico'));

fs.writeFileSync(
  path.resolve(__dirname, DEST, 'index.html'),
  insertMarkdown(html, markdown),
);

fs.writeFileSync(path.resolve(__dirname, DEST, 'style.css'), css);

fs.writeFileSync(path.resolve(__dirname, DEST, 'favicon.ico'), favicon);

function insertMarkdown(html, markdown) {
  const $ = cheerio.load(html);
  $('#root').html(marked(markdown));
  return $.html();
}
