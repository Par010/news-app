# News API with React Native

### The App consumes data from the [newsapi.org](https://newsapi.org/docs/endpoints/top-headlines) and uses the React Native framework to display News on both Android and iOS devices. A snippet of the App can be found at [Expo](https://snack.expo.io/@par010/news-app)

### The features of the App are as follows..

* The App loads the first set of data (10 news snippets) when the App loads.
* The App loads futher data as the user nears the end of the initial set of news. snippets, it uses Flatlist insted of Scrollview which is performance and cost friendly.
* The App uses infinite scroll till no more results are fetched.
* The App refreshes when the user pulls down/swipes down.
* The App has a search bar which returns updated results with the search term, in case of no results it prompts the user of no results and a clear search button.
* In case of no image returned by the article snippet, the app renders a default picture to maintain consistency 
* In case of any error, the App renders an error page with try again button.

### Screenshots of the App 