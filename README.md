# 🎬 MovieFlix - Netflix Clone Platform

![MovieFlix Logo](https://via.placeholder.com/150x50?text=MovieFlix)  
*A Netflix-like streaming platform with data integration from OPhim and other APIs*

---

## 🌟 Key Features
- **Complete Movie Management** (CRUD operations)
- **OPhim Data Integration** (Automated crawling for new movies, details, and listings)
- **RESTful API** with Swagger documentation
- **Advanced Search & Filtering** (Genre, year, rating, language)
- **Pagination & Streaming Capabilities**
- **User Authentication** (JWT-based)

---

## 🛠 Tech Stack
| Category       | Technologies                 |
| -------------- | ---------------------------- |
| **Backend**    | Node.js, Express, Mongoose   |
| **Frontend**   | React.js, Redux, TailwindCSS |
| **Database**   | MongoDB, Redis (caching)     |
| **API Docs**   | Swagger UI                   |
| **Crawling**   | Axios, Cheerio, Puppeteer    |
| **Deployment** | Docker, AWS/Heroku           |

---
---

## 🔧 setup
1. **Clone dự án**
   ```bash
   git clone https://github.com/TranNhatPhi/movie_Filmverse_BE
2. **setup dependencies**
    npm install
3. **config environment (.env)**
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/movie_db
    OPHIM_API=https://ophim1.com
    JWT_SECRET=your_jwt_secret
4. **Run server**
   npm run dev

# 🎬 Movie Streaming Platform 

[... Previous sections remain unchanged until the **API Endpoints** section ...]

---

## 📡 API Endpoints

### 🔹 Quick Summary
| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| POST   | `/api/movies`             | Add a new movie         |
| GET    | `/api/movies`             | Get all movies          |
| GET    | `/api/movies/:movieId`    | Get movie by ID         |
| PUT    | `/api/movies/:movieId`    | Update movie            |
| DELETE | `/api/movies/:movieId`    | Delete movie            |
| GET    | `/api/ophim/movies`       | Crawl movies from OPhim |
| GET    | `/api/ophim/movies/:slug` | Get OPhim movie details |

👉 **Interactive Docs:** [Swagger UI](http://localhost:3000/api-docs)

### 🔹 Detailed API Documentation

#### Movie Management
<details>
<summary><b>POST /api/movies</b> - Add new movie</summary>

```json
{
  "title": "Avengers: Endgame",
  "description": "The Avengers assemble to defeat Thanos.",
  "releaseDate": "2019-04-26",
  "genre": "Action",
  "duration": 181,
  "rating": 8.4,
  "imageUrl": "https://example.com/poster.jpg",
  "videoUrl": "https://example.com/video.mp4"
}
