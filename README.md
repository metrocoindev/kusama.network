# kusama.network

The site was built with the framework [Bootstrap 4](https://getbootstrap.com/) and the theme [Leap](https://leap.mediumra.re/documentation/index.html) and the deployed version is on the `gh-pages` branch.

### Development
To develop and build the site locally you need to use [CodeKit](https://codekitapp.com/) application while using the `.config.codekit3` configuration file from the root of this repository.

### Deployment
This static site is deployed to GitHub Pages from the `gh-pages` branch. In order to push the local commit to the remote repository you need to pause the CodeKit app before committing, otherwise the `.config.codekit3` file will be re-compiled by the app after the commit which modifies the branch again so it can't be pushed to the remote. More info about using CodeKit and Git together [here](https://codekitapp.com/help/git/).
