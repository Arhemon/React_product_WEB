import Astranaut from './../../image/Astranaut.png'
import './AstranautPostContent.css'

interface IAstranautPostContent {
    countPost: string
}

function AstranautPostContent({ countPost }: IAstranautPostContent) {
    return (
        <>

            <div className='container_astranaut_post'>
                <div className='astranaut_post_btn_container'>
                    <div className='astranaut_post_home_btn'>Home |</div>
                    <div className='astranaut_post_count_post'> {countPost}</div>
                </div>
                <div className='astranaut_post_title'>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</div>
                <img src={Astranaut} alt="" className='astranaut_image' />
                <div className='container_text'>
                    <div className='text_post'>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</div>
                    <div className='text_post'>During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.</div>
                    <div className='text_post'>During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.</div>
                    <div className='text_post'>The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.</div>
                    <div className='text_post'>During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.</div>
                    <div className='low_context_astroanaut'>
                        <div className='like_container'>
                            <svg className='svg_like' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.292 20.15C19.218 20.636 18.794 21 18.292 21H18.28H8V11.212L11.608 3.094C12.415 3.352 13 4.108 13 5V9C13 9.552 13.447 10 14 10H19.674C19.728 10.002 19.78 10.003 19.832 10.011C20.097 10.051 20.33 10.192 20.488 10.407C20.646 10.622 20.712 10.885 20.672 11.148L19.292 20.15ZM6 21H4C3.449 21 3 20.551 3 20V13C3 12.448 3.449 12 4 12H6V21ZM22.099 9.22C21.623 8.575 20.925 8.154 20.132 8.033C19.972 8.009 19.814 8.004 19.66 8H15V5C15 2.794 13.206 1 11 1C10.605 1 10.247 1.233 10.086 1.593L6.35 10H4C2.346 10 1 11.345 1 13V20C1 21.654 2.346 23 4 23H18.269H18.304C19.776 23 21.048 21.909 21.269 20.451L22.648 11.45C22.77 10.657 22.574 9.866 22.099 9.22Z" fill="#313037" />
                            </svg>
                            <svg className='svg_like' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6829 10.9239C20.5699 11.5519 20.0129 12.0129 19.3529 12.0009H17.6829V3.00088H19.3709C20.0129 2.95188 20.5689 3.44788 20.6829 4.07688V10.9239ZM15.6829 12.7879L12.0749 20.9059C11.2679 20.6479 10.6829 19.8909 10.6829 19.0009V15.0009C10.6829 14.4479 10.2349 14.0009 9.68294 14.0009H4.01394C3.96794 13.9979 3.90694 13.9989 3.84994 13.9899C3.30494 13.9069 2.92894 13.3959 3.01094 12.8519L4.39194 3.85088C4.46594 3.36088 4.91794 3.02188 5.40294 3.00088H15.6829V12.7879ZM22.6739 3.86588C22.4519 2.22288 21.0469 0.999878 19.4109 0.999878C19.3919 0.999878 19.3719 0.999878 19.3529 1.00088H5.41394C3.92694 1.01088 2.63694 2.08088 2.41494 3.54888L1.03394 12.5509C0.786937 14.1859 1.91494 15.7179 3.54694 15.9659C3.70694 15.9909 3.86994 16.0029 4.02294 16.0009H8.68294V19.0009C8.68294 21.2069 10.4769 23.0009 12.6829 23.0009C13.0789 23.0009 13.4359 22.7679 13.5969 22.4069L17.3319 14.0009H19.3349C21.0049 14.0059 22.4489 12.7979 22.6739 11.1349C22.6799 11.0909 22.6829 11.0459 22.6829 11.0009V4.00088C22.6829 3.95588 22.6799 3.91088 22.6739 3.86588Z" fill="#313037" />
                            </svg>
                        </div>
                        <div className='add_favorite'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12.204 15 12.407 15.062 12.581 15.187L18 19.057V5C18 4.449 17.552 4 17 4H7C6.449 4 6 4.449 6 5V19.057L11.419 15.187C11.593 15.062 11.796 15 12 15ZM19 22C18.795 22 18.592 21.937 18.419 21.813L12 17.229L5.581 21.813C5.277 22.032 4.875 22.062 4.542 21.89C4.209 21.718 4 21.375 4 21V5C4 3.346 5.346 2 7 2H17C18.654 2 20 3.346 20 5V21C20 21.375 19.791 21.718 19.458 21.89C19.313 21.963 19.156 22 19 22Z" fill="#313037" />
                            </svg>
                            <p className='add_favorite_text'>Add to favorites</p>


                        </div>
                    </div>
                </div>

            </div>
            <div className='low_context_menu'>
                <div className='left_container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                        <path d="M6.09375 11L1.09375 6M1.09375 6L6.09375 1M1.09375 6H17.5938" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className='left_container_text'>
                        <p className='text_prev'>Prev</p>
                        <p className='text_above_prev_next'>10 Things to Know About Salvador Dalí</p>
                    </div>
                </div>
                <div className='right_container'>

                    <div className='right_container_text'>
                        <p className='text_next'>Next</p>
                        <p className='text_above_prev_next'>8 Beautiful Villas Belonging to Artists You Need to See</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M13.0312 1L18.0312 6M18.0312 6L13.0312 11M18.0312 6H1.53125" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

        </>
    );
}

export default AstranautPostContent;