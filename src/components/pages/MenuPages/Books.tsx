import RecommendBook, { IRecommendBookMock } from "mockdata/RecommendBook";
import { useState } from "react";
import {
    Book, BookBlock, DiagnTextBlack, DiagnTextBlackBold, ItemBook,
    TextItemBook
} from "styles/pages/MenuPages/Recommendations";


const Books = () => {
  const [books, setBooks] = useState<IRecommendBookMock[]>(RecommendBook);
  return (
    <BookBlock>
      {books.map((value, index) => (
        <Book key={index}>
          <ItemBook src={value.image} />
          <TextItemBook>
            <DiagnTextBlackBold>{value.title}</DiagnTextBlackBold>
            <DiagnTextBlack>{value.description}</DiagnTextBlack>
          </TextItemBook>
        </Book>
      ))}
    </BookBlock>
  );
};

export default Books;
