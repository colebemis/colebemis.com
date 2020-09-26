---
title: Set up changesets in a GitHub repository
date: 2020-09-25
published: true
---

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

1. Install [changeset-bot](https://github.com/apps/changeset-bot) on your repository
