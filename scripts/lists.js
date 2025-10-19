(function () {
  const colorVars = [
    '--ctp-frappe-rosewater',
    '--ctp-frappe-flamingo',
    '--ctp-frappe-pink',
    '--ctp-frappe-mauve',
    '--ctp-frappe-red',
    '--ctp-frappe-maroon',
    '--ctp-frappe-peach',
    '--ctp-frappe-yellow',
    '--ctp-frappe-green',
    '--ctp-frappe-teal',
    '--ctp-frappe-sky',
    '--ctp-frappe-sapphire',
    '--ctp-frappe-blue',
    '--ctp-frappe-lavender'
  ];

  function getColors () {
    const rootStyles = getComputedStyle(document.documentElement);
    const colors = colorVars.map(varName => rootStyles.getPropertyValue(varName).trim());

    // Check if we have valid colors (non-empty and valid hex/rgb)
    const validColors = colors.filter(color => color && (color.startsWith('#') || color.startsWith('rgb')));
    return validColors.length > 0 ? colors : null;
  }

  function assignColors () {
    const lists = document.querySelectorAll('.list');
    if (lists.length === 0) return false;

    const colors = getColors();
    if (!colors) return false;

    lists.forEach((list, index) => {
      const color = colors[index % colors.length] || colors[0];
      const titles = list.querySelectorAll('.list_title');
      if (titles.length > 0) {
        titles.forEach(title => {
          title.style.color = color;
        });
      }
    });
    return true;
  }

  function waitForReady () {
    if (assignColors()) {
      observer.disconnect();
      return;
    }

    // Retry every 100ms, max 5 seconds
    let attempts = 0;
    const maxAttempts = 50;
    const interval = setInterval(() => {
      attempts++;
      if (assignColors()) {
        clearInterval(interval);
        observer.disconnect();
        return;
      }
      if (attempts >= maxAttempts) {
        clearInterval(interval);
        observer.disconnect();
        // eslint-disable-next-line no-console
        console.warn('List colors: Timed out waiting for CSS variables');
      }
    }, 100);

    // Also keep observing DOM changes as backup
    const observer = new MutationObserver(() => {
      if (assignColors()) {
        clearInterval(interval);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Start waiting
  waitForReady();

})();
