
# Project Overview

## Project Links

- [Github Repo](https://github.com/adrianmendez03/news-app)
- [add your deployment link](https://adrians-news-app.netlify.app/)

## Project Description

My goal for this app is to make a comprehensive news application that displays news from various different sources, making being news conscious easier for people.

## API

For this application I will be using NewsAPI. It's a well rounded API that provides current news events through various endpoints.

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

- [Mobile](https://drive.google.com/file/d/1aCa4Q1g4wJOdJS4ZMfsVNpUIWYnU_UFn/view?usp=sharing)
- [Tablet](https://drive.google.com/file/d/18ehVQiD_yDcOLAlnW7iqoEYpvAFw1onr/view?usp=sharing)
- [Desktop](https://drive.google.com/file/d/1UFILPRchjYQQBOto0EeyOTv6cJ31U1Ly/view?usp=sharing)
- [React Architecture](https://drive.google.com/file/d/1TijUrvVf28fiuKZJW7ahVHQAzMXO4W9g/view?usp=sharing)


### MVP/PostMVP - 5min

#### MVP
- Fetch data from NewsAPI 
- Route different pages
- Render correct data for different pages
- Tablet / Desktop responsivenes 
#### PostMVP
- Styling 
- Add compare feature

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | This will contain all the components and assign paths to each page| 
| Nav | This will contain all elements of navbar including a menu that will contain links to other pages |
| Home | This will fetch top news stories and render them using the feed component | 
| Source | This will fetch news from a selected source and render it using the feed component| 
| Search | This will fetch news based on search query and render it using the feed component | 
| Feed | This component will be in every page and will be used as a template to display a list of articles |
| Article | This will be a template for all the news articles shown in the feed |
| Card | This will be a template for the cards shown in the search | 


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Fetch from API | H | 2hrs| |  |
| Configure React Router | H | 1.5hrs |  |  |
| Tablet and Desktop Responsiveness | M | 3hrs |  |  |
| General Styling | M | 4hrs |  |  |
| Compare Feature | L | 3hrs |  |  |
| Total | H | 13.5hrs| 5hrs | 5hrs |

## Additional Libraries 

- SASS

## Code Snippet

When given the title of an article the API includes "- source name" at the end. I dont want the sources name attatched to the title so this function takes in the title and trims off the source at the end.

```
const formatTitle = (title) => {
    for (let i = title.length - 1; i > 0; i--) {
        if (title[i] === "-") {
            title = title.slice(0, i - 1)
            break
        }
    }
    return title
}
```
