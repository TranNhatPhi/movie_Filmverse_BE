const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: { type: String, required: true },  // Tên phim
        description: { type: String, required: true },  // Mô tả phim
        releaseDate: { type: Date, required: true },  // Ngày phát hành
        genre: { type: String, required: true },  // Thể loại phim
        language: { type: String, required: true },  // Ngôn ngữ phim
        duration: { type: Number, required: true },  // Thời gian (phút)
        rating: { type: Number, min: 0, max: 10 },  // Đánh giá phim
        imageUrl: { type: String },  // URL hình ảnh
        videoUrl: { type: String },  // URL video (nếu có)
        category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },  // Khóa ngoại liên kết với Category
        slug: { type: String, required: true, unique: true },  // Slug của phim (unique)
        episodesCount: { type: Number, default: 0 },  // Tổng số tập (chỉ dùng cho series)
        episodes: [{ type: Schema.Types.ObjectId, ref: 'Episode' }], // Thêm trường episodes chứa các ObjectId của Episode
        currentEpisode: { type: String, default: '' },  // Tập hiện tại (nếu có)
        country: { type: String },  // Quốc gia sản xuất
        type: { type: String },  // Loại phim (movie hoặc series)
        actors: [String],  // Danh sách diễn viên
        directors: [String],  // Danh sách đạo diễn
    },
    { timestamps: true }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
