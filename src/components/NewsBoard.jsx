import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const PAGE_SIZE = 10; // Number of news items per page
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const fetchNews = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_SECRET_KEY}`
            );
            setNews(response.data.articles || []);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        setCurrentPage(0); // Reset to first page when category changes
        fetchNews();
    }, [category]);

    const totalPages = Math.ceil(news.length / PAGE_SIZE);

    return (
        <div>
            <h3 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h3>

            {loading && <div className="spinner-border"></div>}

            <h5 className="text-center">Total Articles: {news.length}</h5>

            {/* Display paginated news */}
            {news.slice(startIndex, endIndex).map((n, index) => (
                <NewsItem key={index} title={n.title} description={n.description} url={n.url} urlToImage={n.urlToImage} />
            ))}

            {/* Pagination */}
            <nav className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>
                            Previous
                        </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(index)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages - 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NewsBoard;
