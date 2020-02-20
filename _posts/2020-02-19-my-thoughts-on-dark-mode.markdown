---
layout: post
title:  "My thoughts on designing for dark mode"
date: 2020-02-19 00:00:00 +0100   
categories: post
tags: [visual design, ui, css]
---

Right now I do most my reading and writing on my phone in bed at night when the rest of the family is sleeping. This make me really appreciate dark mode and Safari Reader Mode which I gave a dark palette and use on all sites not providing a dark alternative. But what should one consider when designing for dark mode? I’ll cover a few things such as color and type here. I’m also touching on high contrast modes.

## Context
What’s your light mode context? Does your light mode follow any guidelines, such as Apples [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) or Googles [Material Design](https://material.io/design/)? It’s probably a good idea to follow suite for your dark mode.

If you’re designing for a website or an app by following any internal or brand guidelines I believe it’s a good idea to design a dark alternative to those guidelines. Is it possible to have a dark version of your light palette and keep the same emotion? Remember that not all colors work very well as a tinted black. Be creative!

And always always keep contrast and accessibility in mind. Use tools as [Stark](https://www.getstark.co) to make sure all your users can access your content and that you comply with the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines.

Other services, such as Netflix, already have a dark UI to fit their context - should they provide a light mode?

<!--more-->

## Type
I find bolder fonts slightly easier to read on a dark background. Variable fonts can be effective when designing for dark palettes. It’s possible to use *grad* to thicken the font without causing the text to reflow. However, I've only found a limited number of fonts supporting this today, one is Apples system font San Francisco. You could use this technique to increase the contrast in high contrast mode too (Microsoft Edge only at the time of writing).

![darkmode-GRAD](/assets/posts/darkmode-GRAD.png){:class="center"}

The image above shows Apples San Fransisco in light mode with *grad* 400 and dark mode with *grad* 480.

[Firefox has a great tool](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_fonts) which let you inspect the font and make changes to it in real time.

## Colors
We never have full control over color. Color shift with ambient sensors, night shift, screens and the physical environment. Black might not be 100% black.

And should your 100% black (RGB 0) actually be 95% black (RGB 5)? Maybe, Vidit Bhargava suggests in his [Designing a Dark Theme for OLED iPhones](https://medium.com/lookup-design/designing-a-dark-theme-for-oled-iphones-e13cdfea7ffe).

### Depth or elevation
![spotify](/assets/posts/spotify.jpeg){:class="right"}
In dark mode the darkest color should be at the bottom, and each new layer is brighter. We move from dark to light. 

Spotify's iOS app is a great example of using colors to increase the depth of the UI. They use a gradient or image at the top that turns to black when information is presented. The navigation and controls is a dark grey which make them appear above the rest of the UI. The control panel makes this even clearer with a top border in lighter grey (which also indicate the tracks progression). 

## Contrast
As I mentioned above, make sure all of your modes have enough contrast to make your content accessible to all. However, some user might require or prefer higher contrast. 

Maybe high-contrast could be the black and white color scheme? The (currently) experimental media query has three different values, including color scheme preferences. I think we could combine prefer-color-scheme and high-contrast media queries instead.


## Implementing on the web
Implementing dark mode on the web is pretty easy, especially if you have a rigid system and are using CSS custom properties. Warp your mode specific styles inside the *prefers-color-scheme* media query. The media query takes three values: 

* no-preference 
* light
* dark

The same goes for high-contrast (note that the ms prefix is required today). Warp your styles with *-ms-high-contrast* media query. It has three values:

* active
* black-on-white
* white-on-black

```css
:root {
  --backgroundcolor: white;
  --color: darkblue;
}

@media (prefers-color-scheme: dark) {
  :root {
    --backgroundcolor: darkblue;
    --color: white;
  }
}

@media (-ms-high-contrast: active) {
  :root {
    --backgroundcolor: white;
    --color: black;
  }
}

// You could propably do this:
@media (prefers-color-scheme: dark) and (-ms-high-contrast: active) {
  :root {
    --backgroundcolor: black;
    --color: white;
  }
}

```


## Into the dark
The following resources are worth diving into.

[Design Details: 317: Designing for Dark Mode](https://spec.fm/podcasts/design-details/310206)

[UX Matters: Dark Isn’t Just a Mode :](https://www.uxmatters.com/mt/archives/2020/01/dark-isnt-just-a-mode.php)

[24ways: An Introduction to Variable Fonts](https://24ways.org/2019/an-introduction-to-variable-fonts/)
