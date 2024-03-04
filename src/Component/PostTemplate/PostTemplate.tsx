import SignTemplate from '../../Component/SignTemplate/SignTemplate'
import './PostTemplate.css'
import SignInTable from '../../Component/SignInTable/SignInTable';
import Header from '../../Component/Header/Header';
import App from '../../App';
import user from '..//../image/user.png'



interface IPostTemplate {
    children: any
}

function PostTemplate({ children }: IPostTemplate) {
    return (
        <>
            <Header clickHeaderFunc={App} text=" " foto={user} imageIcon="header_image_user1" right_btn="header_right_btn_no"></Header>
            {children}
            <div className="low_context">
                <p className="a_link_blog">©2022 Blogfolio</p>
                <p className="a_link_legacy">All rights reserved</p>
            </div>
        </>
    );
}

export default PostTemplate;