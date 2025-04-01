// models/episode.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema(
    {
        name: { type: String, required: true }, // Tên tập phim
        slug: { type: String, required: true, unique: true }, // Slug của tập phim (tạo từ tên)
        filename: { type: String, required: true }, // Tên tệp video
        link_embed: { type: String, required: true }, // Liên kết video embed
        link_m3u8: { type: String, required: true }, // Liên kết m3u8 để phát video
        movie_id: { type: Schema.Types.ObjectId, ref: 'Movie', required: true }, // Liên kết với Movie
    },
    { timestamps: true }
);

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
