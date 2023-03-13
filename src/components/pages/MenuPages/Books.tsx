import RecommendBook, { IRecommendBookMock } from "mockdata/RecommendBook";
import { useState } from "react";
import {
  Book, BookBlock, DiagnTextBlack, DiagnTextBlackBoldBook, ItemBook,
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
            <DiagnTextBlackBoldBook>{value.title}</DiagnTextBlackBoldBook>
            <DiagnTextBlack>{value.description}</DiagnTextBlack>
          </TextItemBook>
        </Book>
      ))}
    </BookBlock>
  );
};

export default Books
