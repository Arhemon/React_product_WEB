import ButtonTabs from '../../Component/ButtonTabs/ButtonTabs';
import ButtonPrimary from '../../Component/Button_Primary/ButtonPrimary';
import PostTemplate from '../../Component/PostTemplate/PostTemplate';
import SearchResult from '../../Component/SearchResult/SearchResult';
import SignTemplate from '../../Component/SignTemplate/SignTemplate'
import App from '..//..//App'
import AstranautPost from '../AstranautPost/AstranautPost';
import './SearchBlog.css'



interface ISearchBlog {

}

function SearchBlog() {
    return (
        <>
            <PostTemplate>
                <SearchResult />
            </PostTemplate>
        </>
    );
}

export default SearchBlog;