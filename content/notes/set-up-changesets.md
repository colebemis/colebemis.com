---
title: Set up changesets in a GitHub repository
date: 2020-11-11
published: true
---

1. Install [changeset-bot](https://github.com/apps/changeset-bot) on your repository

1. Install [`@changesets/cli`](https://github.com/atlassian/changesets/tree/master/packages/cli)

  ```shell
  yarn add --dev @changesets/cli
  ```

1. Initialize changesets

  ```shell
  yarn changeset init
   ```

1. Add a `release` script

  ```diff
  // package.json
  {
    "scripts": {
      "release": "yarn build && changeset publish"
    }
  }
  ```

1. Generate an [npm token](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)

1. Add an `NPM_TOKEN` [secret](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) for your repository

1. Create [`.github/workflows/release.yml`](https://github.com/changesets/action#with-publishing)

1. (Optional) Add [snapshot releases](https://github.com/atlassian/changesets/blob/master/docs/snapshot-releases.md) to your CI workflow

  ```yml
  # .github/workflows/ci.yml
  name: CI
  on:
    push:
      branches-ignore:
        - $default-branch
  jobs:
    ci:
      name: CI
      runs-on: ubuntu-latest
      steps:
        - name: Checkout repo
          uses: actions/checkout@master
          with:
            # This makes Actions fetch all Git history so that Changesets
            # can generate changelogs with the correct commits.
            fetch-depth: 0

        # If you use a version of Node other than 12, change it here.
        - name: Set up Node.js 12.x
          uses: actions/setup-node@master
          with:
            node-version: 12.x

        # If you use npm instead of yarn, change this to `npm install`.
        - name: Install dependencies
          run: yarn

        # Change this to customize your build command.
        - name: Build
          run: yarn build

        # Change this to customize your test command.
        - name: Test
          run: yarn test

        - name: Create .npmrc
          run: |
            cat << EOF > "$HOME/.npmrc"
              //registry.npmjs.org/:_authToken=$NPM_TOKEN
            EOF
          env:
            NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

        - name: Release snapshot
          run: |
            npx changeset version --snapshot
            npx changeset publish --tag canary
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

        - name: Post published version to GitHub checks
          run: |
            name=$(jq -r .name package.json)
            version=$(jq -r .version package.json)
            npx action-status --context=$name --state=success --description=$version --url="https://unpkg.com/$name@$version/"
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```
