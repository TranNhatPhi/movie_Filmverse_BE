# 🎬 Movie Streaming Platform (Tên dự án của bạn)

![Project Logo](https://via.placeholder.com/150x50?text=Your+Logo)  

**Một nền tảng xem phim trực tuyến tương tự Netflix, tích hợp dữ liệu từ OPhim và các API phổ biến.**

---

## 🌟 Tính năng chính
- **Quản lý phim** (Thêm, sửa, xóa, xem chi tiết)
- **Crawl dữ liệu từ OPhim** (Phim mới, chi tiết phim, danh sách phim)
- **API Backend** hoàn chỉnh với Swagger documentation
- **Tìm kiếm & Lọc phim** (Theo thể loại, năm phát hành, rating...)
- **Phân trang & Xem phim trực tuyến**

---

## 🛠 technical
| Backend            | Frontend      | Database      | Crawling       |
| ------------------ | ------------- | ------------- | -------------- |
| Node.js (Express)  | React/Next.js | MongoDB       | Axios, Cheerio |
| Swagger (API docs) | TailwindCSS   | Redis (Cache) | Puppeteer      |
| JWT Authentication | Zustand/Redux |               |                |

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
