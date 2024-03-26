import React from 'react';
import './AstranautPost.css';
import AstronautTitle from '../../Component/AstronautTitle/AstronautTitle';
import { dataSet } from '../../Component/AstronautTitle/data';
import AstronautTitleTwo from '../..//Component/AstronautTitleTwo/AstronautTitleTwo';
import AstronautTitleThree from '../../Component/AstronautTitleTree/AstronautTitleTree';
import { Link } from 'react-router-dom';

function AstranautPost() {
    return (
        <div className="general-box">
            <div className="box">

                {/* <Link to={`/${dataSet[0].id}`}> */}
                <AstronautTitle cardDate={dataSet[0].date} cardTitle={dataSet[0].title} postText={dataSet[0].description} source={dataSet[0].image} ></AstronautTitle>
                {/* </Link> */}
                <div className="box-add">
                    <Link to={`/${dataSet[1].id}`}>
                        <AstronautTitleThree cardDate={dataSet[1].date} cardTitle={dataSet[1].title} source={dataSet[1].image}></AstronautTitleThree>
                    </Link>
                    <Link to={`/${dataSet[2].id}`}>

                        <AstronautTitleThree cardDate={dataSet[2].date} cardTitle={dataSet[2].title} source={dataSet[2].image} ></AstronautTitleThree>
                    </Link>

                </div>
            </div>
            <div className="box">
                <Link to={`/${dataSet[3].id}`}>

                    <AstronautTitleTwo cardDate={dataSet[3].date} cardTitle={dataSet[3].title} source={dataSet[3].image} ></AstronautTitleTwo>
                </Link>
                <Link to={`/${dataSet[4].id}`}>

                    <AstronautTitleTwo cardDate={dataSet[4].date} cardTitle={dataSet[4].title} source={dataSet[4].image} ></AstronautTitleTwo>
                </Link>

                <div className="box-add">
                    <Link to={`/${dataSet[4].id}`}>
                        <AstronautTitleThree cardDate={dataSet[5].date} cardTitle={dataSet[5].title} source={dataSet[5].image} ></AstronautTitleThree>
                    </Link>
                    <Link to={`/${dataSet[5].id}`}>

                        <AstronautTitleThree cardDate={dataSet[6].date} cardTitle={dataSet[6].title} source={dataSet[6].image} ></AstronautTitleThree>
                    </Link>

                </div>
            </div>
            <div className="box">ё
                <Link to={`/${dataSet[7].id}`}>

                    <AstronautTitleTwo cardDate={dataSet[7].date} cardTitle={dataSet[7].title} source={dataSet[7].image} ></AstronautTitleTwo>
                </Link>
                <Link to={`/${dataSet[8].id}`}>

                    <AstronautTitleTwo cardDate={dataSet[8].date} cardTitle={dataSet[8].title} source={dataSet[8].image} ></AstronautTitleTwo>
                </Link>

                <div className="box-add">
                    <Link to={`/${dataSet[9].id}`}>

                        <AstronautTitleThree cardDate={dataSet[9].date} cardTitle={dataSet[9].title} source={dataSet[9].image} ></AstronautTitleThree>
                    </Link>
                    <Link to={`/${dataSet[9].id}`}>

                        <AstronautTitleThree cardDate={dataSet[10].date} cardTitle={dataSet[10].title} source={dataSet[10].image} ></AstronautTitleThree>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default AstranautPost;
