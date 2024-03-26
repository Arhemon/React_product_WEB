import SignTemplate from '../../Component/SignTemplate/SignTemplate'
import './SelectPost.css'
import SignInTable from '../../Component/SignInTable/SignInTable';
import Header from '../../Component/Header/Header';
import App from '../../App';
import user from '..//../image/user.png'
import PostTemplate from '../../Component/PostTemplate/PostTemplate';
import AstranautPostContent from '../../Component/AstranautPostContent/AstranautPostContent';
import { dataSet } from '../../Component/AstronautTitle/data';



interface ISelectPost {

}

function SelectPost() {
    return (
        <>
            <PostTemplate>
                <AstranautPostContent countPost={dataSet[0].id.toString()} />
            </PostTemplate>
        </>
    );
}

export default SelectPost;