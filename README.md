
# NewsNest - top headlines 📰

NewsNest is a dynamic news website that delivers the latest headlines and updates using the News API. Built with Bootstrap, it offers a clean, responsive design for seamless browsing across devices. Users can explore various news categories and stay informed with real-time updates. 🚀


## API Reference 🌐

#### Base URL

```http
  GET https://newsapi.org/v2/top-headlines
```
#### Get Top Headlines

```http
  GET /v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${api_key}

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Category of news (e.g., business, entertainment, health, sports, technology). |
| `api_key`      | `string` | **Required**. Your API KEY from NewsAPI. |

#### Example request

```http
 GET https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=YOUR_API_KEY
```


