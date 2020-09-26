---
title: Release workflow with changesets
date: 2020-09-25
published: true
---

0. [Set up changesets in your GitHub repository](/set-up-changesets)

1. Create a feature branch

   ```shell
   git checkout -b <branch>
   ```

1. Push changes to your branch

   ```shell
   git commit -m "..."
   git push
   ```

1. Add a changeset (if the changes should result in a new version)

   ```shell
   yarn changeset
   ```

1. Create a pull request

   ```shell
   gh pr create
   ```

1. Merge the pull request into the `main` (default) branch

1. If the pull request contained a changeset, the changesets action will create a ["Version Packages"](https://github.com/colebemis/demo-component-library/pull/5) pull request

1. Continue merging changes into the `main` (default) branch

1. Merge the "Version Packages" pull request to trigger a release
