import axios from "axios";
import type { Article } from "../types/article";

interface ArticleHttpResponse{
    hits: Article[];
}
 
//function HTTP-query of articles
export const fetchArticles = async (topic: string): Promise<Article[]> => {
    const response = await axios.get<ArticleHttpResponse>(
        `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    return response.data.hits;
};