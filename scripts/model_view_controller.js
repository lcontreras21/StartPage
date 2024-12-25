const timeout_controller = new AbortController();
const signal = timeout_controller.signal;

const timeoutId = setTimeout(() => timeout_controller.abort(), 300); // TODO: handle timeout when it succeeds?

var startpage_service = {
  url: 'https://startpage_server.luiscontrerasorendain.com'
};


async function get_lists () {
  const response = await fetch(startpage_service.url + '/api/v1/startpage', { signal });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  clearTimeout(timeoutId);
  const data = await response.json();
  return data;
}
startpage_service.get_lists = get_lists;

async function get_last_update () {
  const response = await fetch(startpage_service.url + '/api/v1/last_update', { signal });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  clearTimeout(timeoutId);
  const data = await response.json();
  return data;
}
startpage_service.get_last_update = get_last_update;

class Model {
  constructor (lists) {
    this.lists = lists;
  }
}

class View {
  constructor () {
    // The root element
    this.app = this.get_element('#root');
    this.lists = document.getElementById('lists');
  }

  update_lists (lists) {
    // Clear all lists
    while (this.lists.firstChild) {
      this.lists.removeChild(this.lists.firstChild);
    }

    // set up lists
    for (var list of lists) {
      var list_element = this.create_list(list.list_title, list.list_items);
      this.lists.appendChild(list_element);
    }
  }

  get_element (selector) {
    const element = document.querySelector(selector);
    return element;
  }

  create_element (tag, class_names) {
    const element = document.createElement(tag);
    if (class_names) element.classList.add(...class_names);
    return element;
  }

  create_title (title_name) {
    var title = this.create_element('div', ['list_title']);
    var header = this.create_element('p');
    header.innerText = title_name;
    title.appendChild(header);
    return title;
  }

  create_list (title_name, list_items) {
    var list = this.create_element('div', ['list']);
    var title = this.create_title(title_name);
    var list_content = this.create_element('div', ['list_content']);

    for (let list_item of list_items) {
      if (list_item.dropdown) {
        list_item = this.create_dropdown_menu(list_item);
      } else {
        list_item = this.create_link(list_item);
      }
      list_content.appendChild(list_item);
    }

    list.appendChild(title);
    list.appendChild(list_content);
    return list;
  }

  create_dropdown_menu (list_item) {
    var parent = this.create_element('div', ['dropdown']);
    var button = this.create_element('a', ['btn', 'dropdown-toggle', 'list_item']);
    button.href = '#';
    button.setAttribute('onClick', 'return false');
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'dropdown');
    button.setAttribute('aria-expanded', 'false');
    button.innerText = list_item.item_title;

    var ul = this.create_element('ul', ['dropdown-menu']);

    for (var menu_item of list_item.dropdown_menu) {
      var li = this.create_element('li', ['dropdown-item']);
      var link = this.create_element('a');
      link.innerText = menu_item.dropdown_item;
      link.href = menu_item.link;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      li.appendChild(link);
      ul.appendChild(li);
    }

    parent.appendChild(button);
    parent.appendChild(ul);
    return parent;
  }

  create_link (list_item) {
    var parent = this.create_element('div');
    var link = this.create_element('a', ['list_item']);
    link.innerText = list_item.item_title;
    link.href = list_item.link;
    parent.appendChild(link);

    return parent;
  }

}

class Controller {
  constructor (model, view) {
    this.model = model;
    this.view = view;

    this.init(this.model.lists);
  }

  init (lists) {
    this.view.update_lists(lists);
  }
}

function init (remote_timestamp) {
  var saved_timestamp = localStorage.getItem('timestamp');

  var promise;

  if (remote_timestamp && remote_timestamp !== saved_timestamp) {
    promise = startpage_service.get_lists();
  } else {
    var lists = JSON.parse(localStorage.getItem('lists')) || [];
    promise = Promise.resolve(lists);
  }

  promise.then(function (lists) {
    new Controller(new Model(lists), new View());
    if (saved_timestamp !== remote_timestamp) {
      localStorage.setItem('timestamp', remote_timestamp);
      localStorage.setItem('lists', JSON.stringify(lists));
    }
  });
}

startpage_service.get_last_update().then(function (response) {
  init(response.remote_timestamp);
}, function () {
  init(null);
});
