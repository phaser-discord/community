const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { safeDump } = require('js-yaml');

async function getDirectLink(url) {
  const { window } = await JSDOM.fromURL(url, {}).catch(err => {
    console.log(err);
    return '';
  });
  const link = window.document.querySelector('.newsItem > p:last-of-type > a');

  if (link && link.href) {
    return link.href;
  } else {
    return '';
  }
}

async function getItems(url) {
  const { window } = await JSDOM.fromURL(url, {}).catch(err => {
    console.log(err);
  });
  const items = window.document.querySelectorAll(
    'div.combo-left .text-container p'
  );

  return await Promise.all(
    Array.from(items).map(async item => {
      const newItem = {};
      newItem.name = item.querySelector('strong a').textContent;
      newItem.desc = item.textContent
        .replace(newItem.name, '')
        .replace('Staff Pick', '')
        .trim();
      newItem.link = item.querySelector('strong a').href;
      newItem.directlink = await getDirectLink(newItem.link);
      newItem.tags = ['tag'];

      return newItem;
    })
  );
}

(async function() {
  if (!process.argv[2]) {
    console.warn('Error: Please specify a url');
    return;
  }
  const items = await getItems(process.argv[2]);

  console.log(safeDump(items));
})();
