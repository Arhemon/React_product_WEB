import ButtonTabs from '../../Component/ButtonTabs/ButtonTabs';
import ButtonPrimary from '../../Component/Button_Primary/ButtonPrimary';
import PostTemplate from '../../Component/PostTemplate/PostTemplate';
import SignTemplate from '../../Component/SignTemplate/SignTemplate'
import App from '..//..//App'
import AstranautPost from '../AstranautPost/AstranautPost';
import './BlogPost.css'



interface IBlogPost {

}

function BlogPost() {
    return (
        <>
            <PostTemplate>
                <div className='separate_content'>
                    <div className='into_title'>
                        <p className='blog_title'>Blog</p>
                        <ButtonTabs typeButton="tabs_button" text="All" textsecond="My favorites" textthird="Popular" isDisabled={true} clickFunction={App}></ButtonTabs>
                    </div>
                </div>
                <div className='br'></div>
                <AstranautPost></AstranautPost>
                <div className='br'></div>
                <div className='container_wheel_blog'>
                    <div className='container_previus'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7095 5.29238C10.8995 5.49238 10.9995 5.74238 10.9995 6.00238C10.9995 6.26238 10.8995 6.51238 10.7095 6.71238L6.40945 11.0024L19.9995 11.0024C20.5495 11.0024 20.9995 11.4524 20.9995 12.0024C20.9995 12.5524 20.5495 13.0024 19.9995 13.0024L6.40945 13.0024L10.7095 17.2924C11.0995 17.6824 11.0995 18.3224 10.7095 18.7124C10.3195 19.1024 9.67945 19.1024 9.28945 18.7124L3.28945 12.7124C3.19945 12.6224 3.12945 12.5124 3.07945 12.3924C3.05945 12.3424 3.03945 12.3024 3.03945 12.2524C2.98945 12.0924 2.98945 11.9124 3.03945 11.7524C3.03945 11.7024 3.05945 11.6624 3.07945 11.6124C3.12945 11.4924 3.19945 11.3824 3.28945 11.2924L9.28945 5.29238C9.67945 4.90238 10.3195 4.90238 10.7095 5.29238Z" fill="#313037" />
                        </svg>
                        <p className='prev'>Prev</p>
                    </div>
                    <div className='blog_wheel'>
                        1 2 3 ... 6
                    </div>
                    <div className='container_previus'>
                        <p className='prev'>Next</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2905 18.7076C13.1005 18.5076 13.0005 18.2576 13.0005 17.9976C13.0005 17.7376 13.1005 17.4876 13.2905 17.2876L17.5905 12.9976L4.00055 12.9976C3.45055 12.9976 3.00055 12.5476 3.00055 11.9976C3.00055 11.4476 3.45055 10.9976 4.00055 10.9976L17.5905 10.9976L13.2905 6.70762C12.9005 6.31762 12.9005 5.67762 13.2905 5.28762C13.6805 4.89762 14.3205 4.89762 14.7105 5.28762L20.7105 11.2876C20.8005 11.3776 20.8705 11.4876 20.9205 11.6076C20.9405 11.6576 20.9605 11.6976 20.9605 11.7476C21.0105 11.9076 21.0105 12.0876 20.9605 12.2476C20.9605 12.2976 20.9405 12.3376 20.9205 12.3876C20.8705 12.5076 20.8005 12.6176 20.7105 12.7076L14.7105 18.7076C14.3205 19.0976 13.6805 19.0976 13.2905 18.7076Z" fill="#313037" />
                        </svg>
                    </div>
                </div>
            </PostTemplate>
        </>
    );
}

export default BlogPost;