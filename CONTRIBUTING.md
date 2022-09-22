## Contributing

### Quick setup

> _Ensure [`nodejs`](https://nodejs.org) is installed_

```bash
git clone https://github.com/agoose77/markdown-it-mermaid.git
cd markdown-it-mermaid
npm install
# make changes
npm lint
npm build
```

### Building the documentation

- ensure `conda` or `mamba` is installed
  - [Mambaforge](https://github.com/conda-forge/miniforge/) is recommended
- install the documentation depdendencies

```bash
mamba env update docs/environment.yml
mamba activate markdown-it-mermaid
```

- build the documentation

```bash
sphinx-build -b html docs build/docs
```

- serve the documentation

```bash
python -m http.server -b 127.0.0.1
```

- review the docs at `http://127.0.0.1:8000/build/docs`

### Releasing

- Make a [new issue](https://github.com/agoose77/markdown-it-mermaid/issues) to track
  the release process with a checklist like this:

  ```markdown
  ## Release Checklist

  - [ ] All PRs are merged
    - [ ] `package.json` was updated to reflect the new version
    - [ ] `CHANGELOG.md` was updated with the new version's changes
    - [ ] The `docs` were updated
  - [ ] The `latest` documentation was verified on ReadTheDocs
  - [ ] A GitHub Release and Tag were created
    - [ ] The `.tgz` and `SHA256SUMS` from the latest distribution from GitHub Actions
  - [ ] The package was publish on `https://npmjs.com`
  ```

- Complete the checklist
- Close the issue
