import './AstronautTitle.css';
import iData, { dataSet } from "./data"


interface IAstronautTitle {
    cardTitle: string;
    cardDate: string;
    source: string;
    postText?: string;
}

function AstronautTitle({ cardTitle, cardDate, source, postText }: IAstronautTitle) {




    return (
        <>
            <div>
                <div className='container_astronaut'>
                    <div className='left_post_astranaut'>
                        <h3 className='astronaut_date'>{cardDate}</h3>
                        <h3 className='astronaut_title'>{cardTitle}</h3>
                        <h5 className='astronaut_text'>{postText}</h5>
                    </div>
                    <img src={source} alt="" className='astronaut_image' />
                    <img src={source} alt="" className='astronaut_image' />
                    <div className='low_astranaut_post'>
                        <div className='low_astranaut_left'>
                            <button className='astronaut_like'>
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_5_4929)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z" fill="#313037" />
                                    </g>
                                </svg>
                            </button>
                            <button className='astronaut_like'>
                                <svg width="32" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_5_4929)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3663 11.4239C24.2533 12.0519 23.6963 12.5129 23.0363 12.5009H21.3663V3.50088H23.0543C23.6963 3.45188 24.2523 3.94788 24.3663 4.57688V11.4239ZM19.3663 13.2879L15.7583 21.4059C14.9513 21.1479 14.3663 20.3909 14.3663 19.5009V15.5009C14.3663 14.9479 13.9183 14.5009 13.3663 14.5009H7.69729C7.65129 14.4979 7.59029 14.4989 7.53329 14.4899C6.98829 14.4069 6.61229 13.8959 6.69429 13.3519L8.07529 4.35088C8.14929 3.86088 8.60129 3.52188 9.08629 3.50088H19.3663V13.2879ZM26.3573 4.36588C26.1353 2.72288 24.7303 1.49988 23.0943 1.49988C23.0753 1.49988 23.0553 1.49988 23.0363 1.50088H9.09729C7.61029 1.51088 6.32029 2.58088 6.09829 4.04888L4.71729 13.0509C4.47029 14.6859 5.59829 16.2179 7.23029 16.4659C7.39029 16.4909 7.55329 16.5029 7.70629 16.5009H12.3663V19.5009C12.3663 21.7069 14.1603 23.5009 16.3663 23.5009C16.7623 23.5009 17.1193 23.2679 17.2803 22.9069L21.0153 14.5009H23.0183C24.6883 14.5059 26.1323 13.2979 26.3573 11.6349C26.3633 11.5909 26.3663 11.5459 26.3663 11.5009V4.50088C26.3663 4.45588 26.3633 4.41088 26.3573 4.36588Z" fill="#313037" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className='low_astranaut_right'>
                            <button className='astanaut_saved_btn'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12.204 15 12.407 15.062 12.581 15.187L18 19.057V5C18 4.449 17.552 4 17 4H7C6.449 4 6 4.449 6 5V19.057L11.419 15.187C11.593 15.062 11.796 15 12 15ZM19 22C18.795 22 18.592 21.937 18.419 21.813L12 17.229L5.581 21.813C5.277 22.032 4.875 22.062 4.542 21.89C4.209 21.718 4 21.375 4 21V5C4 3.346 5.346 2 7 2H17C18.654 2 20 3.346 20 5V21C20 21.375 19.791 21.718 19.458 21.89C19.313 21.963 19.156 22 19 22Z" fill="#313037" />
                                </svg>
                            </button>
                            <button className='astanaut_tree_btn'>
                                <svg className='svg_low_astranaut' width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 3.10267 0.897333 4 2 4C3.10267 4 4 3.10267 4 2C4 0.897333 3.10267 0 2 0C0.897333 0 0 0.897333 0 2ZM10 4C8.89733 4 8 3.10267 8 2C8 0.897333 8.89733 0 10 0C11.1027 0 12 0.897333 12 2C12 3.10267 11.1027 4 10 4ZM18 4C16.8973 4 16 3.10267 16 2C16 0.897333 16.8973 0 18 0C19.1027 0 20 0.897333 20 2C20 3.10267 19.1027 4 18 4Z" fill="#313037" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}






export default AstronautTitle;




