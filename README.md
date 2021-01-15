
# Project Overview

## Project Links

- [Github Repo](https://github.com/adrianmendez03/news-app)
- [add your deployment link]()

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
{data: {
        "status": "ok",
        "totalResults": 38,
        "articles": [
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Jay Peters",
                "title": "Spotify’s Car Thing shows up in FCC filings with a new design     and bigger screen - The Verge",
                "description": "Spotify may be preparing a new version of its Car Thing     voice-controlled smart assistant for cars. New FCC filings reveal a new     Car Thing with a radically different design from the version previously     announced in 2019.",
                "url": "https://www.theverge.com/2021/1/14/22231876/    spotify-car-thing-fcc-design-screen-pictures-photos",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/ pklVHLh4hSpi4L63MB74oMDF5v8=/0x124:1733x1031/fit-in/1200x630/cdn.vox-cdn.    com/uploads/chorus_asset/file/22236681/image.png",
                "publishedAt": "2021-01-15T00:13:40Z",
                "content": "Perhaps well be hearing more about the Car Thing sometime   soon\r\nA photo of Spotifys Car Thing, taken from FCC filings.\r\nImage:  FCC filings\r\nBack in May 2019, Spotify announced that it would be  public… [+1657 chars]"
            }
        } 
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | This will contain all elements of navbar including a menu that will contain links to other pages | 
| Feed | This component will be in every page and will be used as a template to display a list of articles |
| Article | This will be a template for all the news articles shown in the feed |
| Card | This will be a template for the cards shown in the search | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
