# CyVerse Learning Center Documentation

Welcome to the **CyVerse Learning Center** documentation repository! This repository contains all the resources for maintaining and updating the **CyVerse Learning Center** website, which is hosted at [https://learning.cyverse.org](https://learning.cyverse.org).

This guide provides comprehensive instructions for contributing to the Learning Center, deploying changes, and rendering the website using different MkDocs themes. Please follow the guidelines below to ensure consistency and reliability in maintaining the documentation.

## Table of Contents
1. [Overview](#overview)
2. [Branch Management and Workflow](#branch-management-and-workflow)
3. [Deployment Using GitHub Actions](#deployment-using-github-actions)
4. [Themes and Customization](#themes-and-customization)
5. [Building and Testing Locally](#building-and-testing-locally)
6. [Best Practices for Contributing](#best-practices-for-contributing)
7. [License](#license)

## Overview
The **CyVerse Learning Center** is the main hub for tutorials, documentation, and resources that support the CyVerse platform. The content is rendered using **MkDocs**, a static site generator, and is deployed automatically using **GitHub Actions**.

The website is designed to be easy to navigate, providing users with guides and learning material for tools, technologies, and scientific workflows within CyVerse. We encourage contributions to ensure the documentation stays up-to-date and accurate.

## Branch Management and Workflow
The **main** and **mkdocs** branches are the two primary branches used in the repository. This branching strategy ensures stability while allowing for new developments to be tested before being deployed.

### Branches:
- **mkdocs**: This branch is used for active development and changes to the documentation.
- **main**: The main branch contains stable content. Changes should only be merged here after being thoroughly tested.

### Workflow:
1. **Create a New Branch**: When making updates, create a new branch from **mkdocs**. This keeps the workflow clean and ensures that the main branch remains stable.
2. **Commit Changes**: Work on the new branch, make changes, and commit them.
3. **Merge into mkdocs**: Once changes are finalized, merge them into the **mkdocs** branch and test them locally or on GitHub CodeSpaces.
4. **Deploy to Main**: Only after thorough testing should changes from the **mkdocs** branch be merged into the **main** branch.

> **Note**: **Commits to the main branch trigger an automatic GitHub Action** that rebuilds and redeploys the website to [https://learning.cyverse.org](https://learning.cyverse.org).

## Deployment Using GitHub Actions
The **deploy-mkdocs GitHub Action** is responsible for building and deploying the CyVerse Learning Center documentation. Any time a commit is made to the **main** branch, the action runs, rebuilding the content and deploying it to the publicly available website.

- **Branch Triggers**: Only the **main** branch is set to trigger this action.
- **Deployment Process**: When changes are merged into **main**, the deploy-mkdocs action rebuilds the site using **MkDocs** and deploys it automatically. This process ensures the website remains live and in sync with the latest approved content.

## Themes and Customization
The **CyVerse Learning Center** uses the **ReadTheDocs** theme by default. However, it can easily be switched to the **Material** theme if desired.

### Current Theme: ReadTheDocs
We are currently using the **ReadTheDocs** theme, which provides a clean, user-friendly interface similar to that of the ReadTheDocs platform. The deployment action uses the **@nomaterial** branch to apply the **readthedocs** theme.

```yaml
# mkdocs.yml
theme:
  name: readthedocs
```

### Switching to Material Theme
To switch to the **Material** theme:
1. Change the deployment action to use **@master** instead of **@nomaterial**.
2. Update the theme in `mkdocs.yml` to **material**:

```yaml
# mkdocs.yml
theme:
  name: material
```

The **Material** theme is popular for its modern design and flexibility, allowing for customization of the website's look and feel.

## Building and Testing Locally
It is highly recommended to build and test the website locally before pushing changes. This helps ensure that there are no formatting issues, missing links, or other problems that could affect the deployed site.

### Install Dependencies
To start building and testing the site locally, install all necessary dependencies:

```sh
pip install -r requirements_mkdocs.txt
```

### Running a Local Server
Once dependencies are installed, run a local server to view the documentation:

```sh
mkdocs serve
```

This command will start a local server, typically accessible at [http://127.0.0.1:8000](http://127.0.0.1:8000). Here, you can see changes in real time as you edit the documentation.

## Best Practices for Contributing
- **Work on Feature Branches**: Never work directly on the **main** branch unless absolutely necessary.
- **Testing**: Always build and serve your changes locally or in a development environment before pushing to **mkdocs** or **main**.
- **Pull Requests**: Make pull requests for all changes, especially when merging into the **main** branch. This ensures that all modifications are reviewed and meet CyVerse documentation standards.
- **Use Proper Markdown**: Follow best practices for Markdown to keep content consistent and readable. Always use proper headings, bullet points, and inline code where necessary.

## License
The documentation and resources provided in this repository are made available under the **MIT License**. This means you are free to use, modify, and distribute the content as long as proper attribution is given.

---

By following this comprehensive guide, contributors can help maintain the quality and accuracy of the CyVerse Learning Center, making it a reliable resource for the CyVerse community. Please adhere to the branching workflow, and test thoroughly before deploying changes, ensuring the highest standards of quality for all users.

