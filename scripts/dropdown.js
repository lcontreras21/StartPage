function DropdownToggler () {

  // Listen to ALL (!) click events to also catch clicks OUTSIDE the dropdowns
  document.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown')) {
      closeOthers(e.target.parentElement.querySelector('.dropdown-menu'));
      handleClick(e.target.parentElement.querySelector('.dropdown-menu'));
    } else {
      closeOthers(null);
    }
  });

  // Add or remove 'expanded' CSS class, depending on the current situation
  function handleClick (dropdown) {
    if (dropdown.classList.contains('expanded')) {
      dropdown.classList.remove('expanded');
    } else {
      dropdown.classList.add('expanded');
    }
  }

  // Close all dropdowns except the one that gets passed as the element parameter
  // Note that we may also pass null in order to close ALL dropdowns
  function closeOthers (element) {
    document.querySelectorAll('.dropdown > .dropdown-menu').forEach(link => {
      if (element != link) {
        link.classList.remove('expanded');
      }
    });
  }

}

document.addEventListener('DOMContentLoaded', DropdownToggler);
