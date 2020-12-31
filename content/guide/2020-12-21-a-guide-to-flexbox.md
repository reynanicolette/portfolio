---
title: A Guide to Flexbox
date: 2020-12-21T17:31:30.608Z
color: blue
slug: flexbox
tags:
  - css
  - flexbox
  - layout
excerpt: >-
  The Flexbox Module is a one dimensional layout system used to create
  responsive layouts. This guide was made for CSS beginners who haven't learned
  the basics of layout yet. Flex is a display property that should be set on the
  parent whose children…


  [](https://cssdesign.netlify.app/flexbox)
Body: Flexbox body
code:
  code: |-
    .flex-container {
      display: flex;
    }
  lang: css
puppies: 2
description: B
---
The Flexbox Module is a one dimensional layout system used to create responsive layouts. This guide was made for CSS beginners who haven't learned the basics of layout yet.

Flex is a display property that should be set on the parent whose children you want to move around. We will look through plenty of examples. First and foremost, I suggest you get familiarized with the properties that relate to Flexbox. Start by completing the game and then pulling up any cheat sheet online or below to continue with how to utilize these properties for a layout.

1. <https://flexboxfroggy.com/>👈 The game
2. <http://flexbox.malven.co/>👈 Cheat sheet!
3. <https://yoksel.github.io/flex-cheatsheet/> 👈 Cheat sheet!

There are some default properties when you set a parent to `display: flex;`. 

```css
.flex-container { 
  color: blue;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
 }
```