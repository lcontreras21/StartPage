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
    Need to find where Firefox is installed. In my popos setup, it's in /usr/lib/. In windows, it's in C://Program Files/
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

See the [open issues](https://github.com/lcontreras21/StartPage/issues) for a full list of proposed features (and known issues).

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
