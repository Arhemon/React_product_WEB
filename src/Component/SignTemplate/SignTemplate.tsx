import Header from "../Header/Header";
import user from '..//../image/user.png'
import './SignTemplate.css'
import BodySign from "../BodySign/bodySign";
import { Children } from "react";
import { Link } from "react-router-dom";
const openMenu = function (): void {
    alert("hi")
}

interface ISign {
    Title: string
    children: any
}

function SignTemplate({ Title, children }: ISign) {
    return (
        <>
            <div className="signUp_container">
                <Header clickHeaderFunc={openMenu} text=" " foto={user} imageIcon="header_image_user1" right_btn="header_right_btn_no"></Header>
                <div className="container_text_header">
                    <Link to="/Home" >
                        <p className='back_home' >Back to home</p>
                    </Link>

                    <p className="title_name">{Title}</p>
                </div>
                <form className="container_form">
                    {children}
                </form>
                <div className="low_context">
                    <p className="a_link_blog">©2022 Blogfolio</p>
                    <p className="a_link_legacy">All rights reserved</p>
                </div>
            </div>
        </>
    );
}

export default SignTemplate;