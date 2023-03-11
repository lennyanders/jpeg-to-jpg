const jpeg = '.jpeg';

chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  if (!item.filename.endsWith(jpeg)) return;

  suggest({
    conflictAction: 'overwrite',
    filename: `${item.filename.substring(0, item.filename.length - jpeg.length)}.jpg`,
  });
});
