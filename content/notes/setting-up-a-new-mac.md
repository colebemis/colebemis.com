---
title: Setting up a new Mac
date: 8-21-2020
---

## Step 0

## Step 1

## <input type="checkbox" /> Step 2: Customize macOS preferences

These settings can be configured programicatally useing the `defaults` shell command. however, that way is not well documented by apple. i found using the system preferences GUI to be more straightfoward and reliable.

### <input type="checkbox" /> Sign in to iCloud

### <input type="checkbox" /> Add Touch ID fingerprint

`System Preferences > Touch ID > Add a fingerprint`

![image](https://user-images.githubusercontent.com/4608155/90947010-4c94eb80-e3e7-11ea-8d86-08172ca3ff52.png)

### <input type="checkbox" /> Enable tap to click

`System Preferences > Trackpad > Point & Click > [x] Tap to click`

![image](https://user-images.githubusercontent.com/4608155/90945814-1c941b00-e3dc-11ea-97a3-f8a745ccf84e.png)

### <input type="checkbox" /> Enable three finger drag

`System Preferences > Accessibility > Pointer Control > Trackpad Options... > [x] Enable dragging: three finger drag`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2F0eRHHef7vg.png?alt=media&token=e6247cde-10e7-402d-8647-07795497b8fc)

### <input type="checkbox" /> Customize Dock

`System Preferences > Dock > [x] Magnification: ~0.8`

`System Preferences > Dock > [x] Automatically hide and show the Dock`

![image](https://user-images.githubusercontent.com/4608155/90946087-6bdb4b00-e3de-11ea-9c96-b348b18bf1ac.png)

### <input type="checkbox" /> Enable Night Shift

`System Preferences > Displays > Night Shift > Schedule: Sunset to Sunrise`

![image](https://user-images.githubusercontent.com/4608155/90946174-62061780-e3df-11ea-8a6f-9003f3f766ef.png)

### <input type="checkbox" /> Change display resolution

`System Preferences > Displays > Display > Resolution: Scaled > Looks like 1440x900 (one left of default)`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FNiAbPXVVfT.png?alt=media&token=e367d1c4-6c78-4c90-b81b-29d4fd18f287)

### <input type="checkbox" /> Enable zoom

`System Preferences > Accessibility > Zoom > [x] Use scroll gesture with modifier keys to zoom: Control`

`System Preferences > Accessibility > Zoom > Zoom style: Full screen`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FWOw1rTkoKA.png?alt=media&token=7dc0bfda-82ce-47b0-afd2-c1efd13af564)

`System Preferences > Accessibility > Zoom > Advanced... > [ ] Smooth images`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FEM2hZ-SYje.png?alt=media&token=fc8f29b8-299d-475f-978d-cc3c2235129b)

### <input type="checkbox" /> Always show expanded control strip

`System Preferences > Keyboard > Touch bar shows: Expanded Control Strip`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FpiVOHQk-c1.png?alt=media&token=2a989a46-1c49-4ce3-958b-755283bcd5ad)

### <input type="checkbox" /> Customize control strip

`System preferences > Keyboard > Customize Control Strip...`

`Brightness, Keyboard Brightness, Media, Volume, Do Not Disturb, Screen Lock`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FbzyVA8NrSh.png?alt=media&token=f20b69e7-a305-4278-acdf-562227d02dc6)

### <input type="checkbox" /> Remap caps lock key to control

`System Preferences > Keyboard > Modifier Keys > Caps Lock Key: Control`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FEMnWcSwRPo.png?alt=media&token=b7a9ced9-8a0d-4a6c-b6eb-4e17ff9e4594)

### <input type="checkbox" /> Add personal and work Google accounts

`System Preferences > Internet Accounts > + > Google`

Enable Mail, Contacts, Calendars

![image](https://user-images.githubusercontent.com/4608155/90946604-3a18b300-e3e3-11ea-9ecd-0e33d8fe9e2f.png)

### <input type="checkbox" /> Diabled iCloud Photos, Mail, and Calendar

### <input type="checkbox" /> Show volume icon in menu bar

`System Preferences > Sound > Input > [x] Show volume in menu bar`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2F-dnC0usooG.png?alt=media&token=a3503c08-d962-4761-9597-e3817e2ac2e2)

### <input type="checkbox" /> Show bluetooth icon in menu bar

`System Preferences > Bluetooth > [x] Show volume in menu bar`

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcolebemis%2FsTCfvQZlqs.png?alt=media&token=1c2ce818-75f7-45f2-b74e-1dedba2858a4)

### <input type="checkbox" /> Show Finder path bar

`Finder > View > Show Path Bar`

![image](https://user-images.githubusercontent.com/4608155/90994450-9b6c8d80-e56d-11ea-8a27-0f09796a556b.png)

### <input type="checkbox" /> Add home directory to Finder sidebar

![image](https://user-images.githubusercontent.com/4608155/90946830-a7c5de80-e3e5-11ea-9428-a3168f5d71a4.png)

## <input type="checkbox" /> Step 3: Set up GitHub SSH keys

[Adding a new SSH key to your GitHub account](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

## Step 4: Clone dotfiles repo

```
git clone --recursive git@github.com:colebemis/dotfiles.git ~/.dotfiles
```

## Step 5: Install oh my zsh

This should be part of the `bootstrap` script but it causes the script to exit early, so for now it's a separate step.

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Step 5: Run bootstrap script

```shell
~/.dotfiles/bootstrap.sh
```

## Step 6: Install app-store-only apps

The `boostrap` script installs a lot of apps using Homebrew Cask

## Step 8: Customize dock

## Step 9: Sign in to apps
