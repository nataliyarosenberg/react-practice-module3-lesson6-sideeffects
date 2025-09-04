import type { Article } from "../../types/article";

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticleListProps) {
    return (
    <ul>
        {items.map((item) => (
            <li key={item.objectID}>
                <a href={item.url} target="_blank" rel="nonreferrer noopener">
                    {item.title}
                </a>
            </li>
        ))}
    </ul>
);
}