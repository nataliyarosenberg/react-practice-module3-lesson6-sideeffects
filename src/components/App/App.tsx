
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import type { Article } from "../../types/article";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../../services/articleService";
import OrderForm from "../OrderForm/OrderForm";

export default function App() {
  //declair and typing a state
  const [articles, setArticles] = useState<Article[]>([]);
  // adding isLoading state
  const [isLoading, setIsLoading] = useState(false);
  //1.declare state error 
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    //2.add block try...catch
    try {
      //change isLoading state to "true" before the query
      setIsLoading(true);
      //3.set error state to false before every query
      setIsError(false);
      const data = await fetchArticles(topic);
      
      //Storing data into the state after the query
      setArticles(data);
    } catch {
      //4. set error state to true
      setIsError(true);
    } finally {
      //5. change isLoading state to "false" after the query
      setIsLoading(false);
    }
  };
  return (
    <div>
      <OrderForm />
      <hr />
      <hr />
      <hr />
      <hr />

      <SearchForm onSubmit={handleSearch} />
      {/*show the message about loading in JSX */}
      {isLoading && <h1>Loading data, please wait ...</h1>}
      {/*6. Use error state to show an error */}
      {isError && <h1>Whoops, something went wrong! Please try again!</h1>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}