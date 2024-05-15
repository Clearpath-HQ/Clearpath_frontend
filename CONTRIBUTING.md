# Contributing Guidelines

Thank you for considering contributing to our project! To ensure a smooth collaboration, please follow these guidelines:

## TL:DR A summary of what you need to know
1. Fork the repository and create your branch from `main`.
2. Make sure your code follows the project's coding style and conventions.
3. Write clear and concise commit messages.
4. Test your changes thoroughly before submitting a pull request.
5. Provide a detailed description of your changes in the pull request.
6. Be respectful and constructive in all communications.

## Getting Started

The Frontend is a NextJs app; that uses the App Router instead of src/ which means that every folder you create within the App folder becomes a route. 
All you have to do is to do is add a page.tsx file within that folder.

### Installation of Libraries

Inside the app folder you will also find a components folder; this one houses the bricks/lego pieces or building blocks of all the figments your add needs. For this project we shall be keenly importing from only three sources/libraries (Shadcn Ui, Radix Ui & Chakra UI) both of which have standardisedl beautiful and functional components. 

For Shadcn UI follow this [guide](https://ui.shadcn.com/docs/installation/next) to set up your project to enable installation of components 

For Radix Ui follow this [documentation](https://www.radix-ui.com/themes/docs/overview/getting-started) to officially get set up to install their primitives.

For Chakra Ui follow this [documentation](https://v2.chakra-ui.com/getting-started/nextjs-app-guide) to get started on using it in the nextjs app


When you install from Shadcn Ui the installed components will be installed within a ui/ subfolder in the components/ folder. 


### How to use the components

Once you have installed necessary components; you can import them into the page.tsx where you need them rendered and modify them accordingly.

### Can I use Vanilla JS/TS

Heaven yeah, There's folks who prefer not to use frameworks and outright write their css, js and ts raw and bare as it comes. 
You can still go ahead to execute every task you are given provided you use the atomic design principles in writing your code.

## Our Principles & Paradigm

For this project we have used DRY(Don't Repeat Yourself) and this literally means everything you need to use to make a page if reusable or needed more than once; ie a button et al has to be made into a component and called instead of being made from scratch each time; This reduces on unnecessary code debt and also increases refactor times and speeds. This principle and paradigm also fits perfectly into Atomic Desin because we view everything as an atom making up the larger part of the app

## Questions
If you have any questions please head over to [discussions](https://github.com/Samsonroyal/Clearpath/discussions) and start a new discussion or ask questions.  


## Thankss for your contributions
We appreciate your contributions and look forward to working with you!

# note
Any PRs that don't meet the set standards and coverage shall not be merged; there shall be constant reviews of PRs and code that is pushed.
