import { useState } from 'react';
import { ItemBook,TextItemBook,BookBlock,Book,DiagnTextBlackBold,DiagnTextBlack} from 'styles/pages/MenuPages/Recommendations';

import RecommendBook, { IRecommendBookMock } from 'mockdata/RecommendBook';

const Books = () => {
    const [books, setBooks] = useState<IRecommendBookMock[]>(RecommendBook)
    return (
            <BookBlock>
                {
                    books.map((value, index) =>
                    <Book>
                        <ItemBook  src={value.image}/>
                        <TextItemBook>
                            <DiagnTextBlackBold>{value.title}</DiagnTextBlackBold>
                            <DiagnTextBlack>{value.description}</DiagnTextBlack>
                        </TextItemBook>
                    </Book>
                    )
                }
            </BookBlock>      
    );
}

export default Books;
