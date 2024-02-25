import './AstranautPost.css'
import AstronautTitle from '../../Component/AstronautTitle/AstronautTitle'
import { dataSet } from '../../Component/AstronautTitle/data';
import AstronautTitleTwo from '../..//Component/AstronautTitleTwo/AstronautTitleTwo'
import AstronautTitleThree from '../../Component/AstronautTitleTree/AstronautTitleTree';

function AstranautPost() {
    return (
        <div className="general-box">
            <div className="box">
                <AstronautTitle cardDate={dataSet[0].date} cardTitle={dataSet[0].title} postText={dataSet[0].description} source={dataSet[0].image} ></AstronautTitle>
                <div className="box-add">
                    <AstronautTitleThree cardDate={dataSet[1].date} cardTitle={dataSet[1].title} source={dataSet[1].image}></AstronautTitleThree>
                    <AstronautTitleThree cardDate={dataSet[2].date} cardTitle={dataSet[2].title} source={dataSet[2].image}></AstronautTitleThree>
                </div>
            </div>
            <div className="box">
                <AstronautTitleTwo cardDate={dataSet[3].date} cardTitle={dataSet[3].title} source={dataSet[3].image}></AstronautTitleTwo>
                <AstronautTitleTwo cardDate={dataSet[4].date} cardTitle={dataSet[4].title} source={dataSet[4].image}></AstronautTitleTwo>
                <div className="box-add">
                    <AstronautTitleThree cardDate={dataSet[5].date} cardTitle={dataSet[5].title} source={dataSet[5].image}></AstronautTitleThree>
                    <AstronautTitleThree cardDate={dataSet[6].date} cardTitle={dataSet[6].title} source={dataSet[6].image}></AstronautTitleThree>
                </div>
            </div>
            <div className="box">
                <AstronautTitleTwo cardDate={dataSet[7].date} cardTitle={dataSet[7].title} source={dataSet[7].image}></AstronautTitleTwo>
                <AstronautTitleTwo cardDate={dataSet[8].date} cardTitle={dataSet[8].title} source={dataSet[8].image}></AstronautTitleTwo>
                <div className="box-add">
                    <AstronautTitleThree cardDate={dataSet[9].date} cardTitle={dataSet[9].title} source={dataSet[9].image}></AstronautTitleThree>
                    <AstronautTitleThree cardDate={dataSet[10].date} cardTitle={dataSet[10].title} source={dataSet[10].image}></AstronautTitleThree>
                </div>
            </div>
        </div>
    )
}


export default AstranautPost;

