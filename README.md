# Example MkDocs deploy GitHub Action

This is a template that uses the [MkDocs deploy](https://github.com/marketplace/actions/deploy-mkdocs) GitHub action.

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
