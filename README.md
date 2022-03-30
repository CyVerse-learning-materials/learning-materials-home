# CyVerse Learning Center Documentation

These documents are for use on the CyVerse Learning Center (https://learning.cyverse.org)

## MkDocs deploy GitHub Action

The `main` branch uses [deploy-mkdocs](https://github.com/marketplace/actions/deploy-mkdocs) GitHub Action.

Do not commit changes directly to the `main` branch unless necessary. Please commit your updates to the `mkdocs` branch, test on CodeSpaces or locally, and then commit those merges back to `main`.

Commits to `main` will trigget the Action which re-builds and deploys the website to https://learning.cyverse.org -- which is publicly available. 

## Render with ReadTheDocs Theme

We are using the `@nomaterial` branch for the [Action](.github/workflows/main.yml) to produce the ReadTheDocs style layout with the `theme: readthedocs` in the [mkdocs.yml](./mkdocs.yml):

```
theme:
  name: readthedocs
```

## Render with Material Theme

To change to [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) theme, change [Action](./github/workflows/main.yml) to `@master` and set `theme: material` in the [mkdocs.yml](./mkdocs.yml):

```
theme:
  name: material
```
