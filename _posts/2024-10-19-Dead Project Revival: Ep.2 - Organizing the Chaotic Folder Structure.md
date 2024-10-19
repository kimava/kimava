---
layout: post
category: Dev
---

### The first look

Now that I’ve made the decision, the very first thing I needed to do was to review my code — the last thing I wanted to do.

It’s cringe. So messy. What was I even thinking?

But I had to get on with it.

<br/>

![few hours later meme](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGNnM3hoZGpjbjMybGN3emw5c3dsZWRvcmthMDZ3YjVua3N3YnN4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wNYW4Hqk6C1Uu1W/giphy.webp)

<br/>

How did it go?
Awful!

<br/>

### I have to admit. back then, I didn’t want to do it.

Why? Well, again — too much drama.

To keep it brief and honest tho, I was scared of coding. (Definitely not anymore!)

But this was a team project, and since I was the only front-end developer, I had no choice but to get it done somehow.

<br/>

### So, what was so awful?

The folder structure, bad naming, redundant code, repeated code, non-existence of separation of concerns... you name it.

<br/>

### But first, upgrading Next.js

Other than anything, by upgrading Next.js first I would be able to build on a clean foundation. This way, I wouldn’t have to refactor or deal with issues caused by using an outdated version later.

What was I worried about? Compatibility, of course. All the crashes, you know. But, as it turned out, I only needed to make a minor update to the carousel library I was using.

<br/>

### And tada! Here comes the worst:

Now, I desperately need to fix the project organization.

Embarrassingly, here’s what my current project structure looks like:

![a screenshot of the project folder structure](/assets/images/2024-10-19/screenshot-1.png)

a file for managing constants, global CSS, and even the favicon and font files are all jumbled together in the app folder.

This time, I want to keep the app directory strictly for routing.

<br/>

The components folder is even worse.

![a screenshot of the components folder](/assets/images/2024-10-19/screenshot-2.png)

Every component in the app is just thrown in there with no clear separation. It’s so hard to figure out which component belongs to which page — even for me, and I built this thing!

<br/>

The service folder is no better. It's even singular - 'service'. Girl, seriously?

![a screenshot of the service folder](/assets/images/2024-10-19/screenshot-3.png)

<br/>

### Now, let’s tidy up the folder structure!

<br/>

**/public**

I’m going to start with the public folder.

![a screenshot of the public folder](/assets/images/2024-10-19/screenshot-4.png)

I moved the favicon and font files from the app folder to the public folder, where static assets are supposed to be.

I’ve also created an svgs folder to keep all the SVGs separate. Later, I’ll create an `index.ts` file in this folder and export all the SVGs, so I can conveniently use them in my components like this: `<IconLogo />`

Even though I’m only using one Lottie file right now, I’ve created a separate folder for it in case I need more later.

I think the public folder’s in good shape now. Let’s move on to the next one.

<br/>

**/components** & **/features**

Here’s the part I’m most pleased with.

![a screenshot of the updated components and features folder](/assets/images/2024-10-19/screenshot-5.png)

From now on, **the components folder** will only contain components that are shared across multiple pages. For example, the GNB or Header, which will be used on almost every page.

**The features folder** is organized by the different functionalities this project offers. Since it has both a map and a plogging tab, I’ve split those into two main folders. Within the plogging tab, there are further subfolders for crew recruitment, event information, and the plogging posts feature. Components specific to each feature will go into their respective folder.

<br/>

**/styles & /types**

![a screenshot of the added folders](/assets/images/2024-10-19/screenshot-6.png)

In addition to the existing hooks, services, and utils folders, I’ve added styles and types folders and moved the relevant files into them.

<br/>

---

That’s pretty much it!

There are still plenty of issues to solve, but just organizing the folders has made the project so much easier to navigate, and it’s going to make building on top of this much smoother.

It’s like tidying up my room — feels so much better already!
