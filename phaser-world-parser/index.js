const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { safeDump } = require('js-yaml');

async function getDirectLink(url) {
  // Load the item's phaser.io news post
  const { window } = await JSDOM.fromURL(url, {}).catch(err => {
    console.log(err);
    return '';
  });

  // The last link in the news post should be the read more or equivalent
  const link = window.document.querySelector('.newsItem > p:last-of-type > a');

  // Just in case we didn't find any link
  if (link && link.href) {
    return link.href;
  } else {
    return '';
  }
}

async function getItems(url) {
  // Load issue from url
  const { window } = await JSDOM.fromURL(url, {}).catch(err => {
    console.log(err);
  });

  // Get the text content of all games and tutorials
  const items = window.document.querySelectorAll(
    'div.combo-left .text-container p'
  );

  // Wait for all processing to complete
  return await Promise.all(
    // NodeList is only array-like and doesn't have .map
    Array.from(items).map(async item => {
      // Create object from each issue item
      const newItem = {};
      newItem.name = item.querySelector(
        'strong a'
      ).textContent;
      newItem.desc = item.textContent
        // Remove the item name
        .replace(newItem.name, '')
        // "Staff Pick" is not part of the description
        .replace('Staff Pick', '')
        .trim();
      newItem.link = item.querySelector(
        'strong a'
      ).href;
      // We have to load the phaser.io news post link to find the direct link
      newItem.directlink = await getDirectLink(
        newItem.link
      );
      // Arrays need to have content to be formatted the way we want by js-yaml
      newItem.tags = ['tag'];

      return newItem;
    })
  );
}

(async function() {
  // Check that a url is specified
  if (!process.argv[2]) {
    console.warn('Error: Please specify a url');
    return;
  }

  const items = await getItems(process.argv[2]);

  // Log to console as yaml
  console.log(safeDump(items));
})();
