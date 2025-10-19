document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('.dropdown-toggle')) {
    e.preventDefault();
    const toggle = target.closest('.dropdown-toggle');
    const dropdown = toggle.closest('.dropdown');
    const isExpanded = dropdown.classList.contains('expanded');

    document.querySelectorAll('.dropdown.expanded').forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('expanded');
        otherDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    dropdown.classList.toggle('expanded', !isExpanded);
    toggle.setAttribute('aria-expanded', !isExpanded);
    return;
  }

  if (target.closest('.db2')) {
    const mask = target.closest('.db2');
    const dropdown = mask.closest('.dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    dropdown.classList.remove('expanded');
    toggle.setAttribute('aria-expanded', 'false');
    return;
  }

  if (target.closest('.dropdown-menu')) {
    if (target.classList.contains('dropdown-item')) {
      return;
    }
    return;
  }

  document.querySelectorAll('.dropdown.expanded').forEach(dropdown => {
    dropdown.classList.remove('expanded');
    dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
});
