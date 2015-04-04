# learning-ember-cli-101
Repository for my Learning with the Book ember-cli-101
## Executed Commands
```sh
ember new borrowers
ember generate resource friends firstName:string lastName:string email:string twitter:string totalArticles:number
ember g adapter application
ember server --proxy http://api.ember-cli-101.com
ember g route friends/index
ember g route friends/new
ember g template friends/-form
ember g controller friends/new
```
## Backend Repository
https://github.com/abuiles/borrowers-backend

--
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Except where otherwise noted, learning-ember-cli-101</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://jim-beaudoin.com" property="cc:attributionName" rel="cc:attributionURL">Jimmy Beaudoin</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
