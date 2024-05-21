<!-- Template from https://github.com/othneildrew/Best-README-Template -->
<a name="readme-top"></a>

<!-- *** https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[![test][test-sheild]][test-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">StartPage</h3>

  <p align="center">
    Simple StartPage for Firefox containing quicklinks
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT -->
## About The Project 

Firefox's default new tab and homepage were ugly to me. I wanted something that I could customize to my liking.  Built using Bootstrap and some jQuery, but I want to move away from that. 
Using Firefox on Linux changes some of the hotkeys. For example, opening bookmarks library and toggling bookmarks tab are different. Swapping tabs is also different. Because of that, in the autoconfig.cfg file that gets copied over contains some code to revert that. You can now use CTR + i to navigate to different tabs. 

Links: 
* Firefox Page [Documentation](https://searchfox.org/mozilla-release/source/browser/base/content/browser-sets.inc)
    - searching specifically for "key_selectTab1". Just above that is this chunk of code that changes the key binding if on Linux.
```
#ifdef XP_GNOME
#define NUM_SELECT_TAB_MODIFIER alt
#else
#define NUM_SELECT_TAB_MODIFIER accel
#endif
```
* Helpful Reddit [Post](https://www.reddit.com/r/firefox/comments/kilmm2/restore_ctrlshiftb_library_by_setting_configjs/)
    - Only issue on that page is that it's a bit outdated. Replacing the Services part with some of the info from this [StackOverflow Post](https://superuser.com/questions/1271147/change-key-bindings-keyboard-shortcuts-in-firefox-57) fixes things

There are extensions out there that do this type of thing but I thought it would be fun to do a little digging. It kind of was but it's such a rabbit-hole with all the different Firefox versions.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![JQuery][JQuery.com]][JQuery-url]
[![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Have npm installed on your system :(
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lcontreras21/StartPage.git
   ```
2. Install dependencies
   ```sh
    npm install
   ```
2. Clone files to set StartPage as new tab page
   ```sh
    Need to find where Firefox is installed. In my popos setup, it is in /usr/lib/. In windows, it is in C://Program Files/
    cp autoconfig.cfg /usr/lib/firefox/
    cp autoconfig.js /user/lib/firefox/defaults/pref/
    The URL in the autoconfig.cfg file might need to be changed depending on OS
   ```
4. Set StartPage for Homepage and new windows
   ```js
    Open Settings -> Select Home on the right -> Select Use Current Pages
    Make sure to only have the new tab page open!
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Rebuild using Elm (no javascript and npm pog)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[test-sheild]: https://img.shields.io/badge/EZPZ-purple?logo=github&style=for-the-badge
[test-url]: http://youtube.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
