# The Spider News

A React-based news app that fetches and displays the latest articles using a third-party News API. This app allows users to filter news based on categories and country selections. Please note that the API used is not free for production, so the live version is not available. However, a screenshot of the app is provided below.

## Features

- Filter news by country and category.
- Fetch and display articles dynamically.
- Responsive UI for desktop and mobile.

## Technologies Used

- **React** for UI components and state management.
- **Axios** for API calls.
- **React Hooks** (`useState`, `useEffect`) for managing state and side effects.
- **CSS/Styled Components** for responsive design.

## Screenshots

### Web View
![Web View](./web.png)

### iPad View
![iPad View](./ipad-view.png)

### iPhone 14 Pro Max View
![iPhone 14 Pro Max View](./iphone-14-pro-max.png)



## How to Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/spider-news.git
    ```

2. Navigate to the project directory:

    ```bash
    cd spider-news
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and add your News API key:

    ```
    REACT_APP_NEWS_API_KEY=your_api_key_here
    ```

5. Run the app:

    ```bash
    npm start
    ```

## Notes

- This app is for demonstration purposes only since the News API used in this project is not free for production use.
- To use the app locally, you will need to sign up for a News API key from [here](https://newsapi.org/).

## License

This project is licensed under the MIT License.


