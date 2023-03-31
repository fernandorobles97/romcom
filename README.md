______________________________________________________  

# RomCom  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This Romantic Novel Cover Generator creates random novel covers and allows the user to save the covers. Users can also make their own covers by passing in their image, title and descriptors and save those as well and view them all the saved covers on one page. Authors who need inspiration for covers for their novels could use this generator to get ideas for their novel cover. This application also allows the user to visualize their own ideas by helping them generate their own custom covers using the make your own book form. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork the repository
2. Clone this repository to your local machine
3. Open in text editor or open the application by using the command open index.html from terminal

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project took about 15 hours to complete. We are in the Front End turing program in Mod 1. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)


### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
Our learning goals were to:
- Build functionality using Javascript in order to work with HTML and CSS
- Manipulate the page without reloading
- Learn to write DRY Javascript
- Practice reading and understanding code
- Learn to work as a team to code, communicate, troubleshoot and plan

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Wins:
- Learning how to create functions that only do one thing, and combining them all together to complete a bigger task.
- Being able to render the covers on the page successfully while updating the data model

Challenges:
- Figuring out why the covers were duplicating on the page every time you went back to saved covers view. We eventually figured out that the page was rendering the images over and over every time you clicked on the saved covers view button, and added a piece of code to clear the page every time before loading.

- Figuring out how to make the books look mini on the saved covers page, and how to format them to all be in-line with each other. We used trial and error to test our functions and then we saw on the CSS file that were was a mini cover class, and experimented with that to display the images correctly. 
