import './AstranautPost.css'
import AstronautTitle from '../../Component/AstronautTitle/AstronautTitle'
import iData from '../../Component/AstronautTitle/data';

interface IAstronautPostProps {
    dataSet: iData[];
}

function AstranautPost({ dataSet }: IAstronautPostProps) {



    return (
        <>

            {dataSet.map((item: any, index: number) =>
                <div className="general-box">
                    <div className="box" key={index}>
                        <AstronautTitle cardDate={item[0].date} cardTitle={item[0].title} postText={item[0].description} source={item[0].image} ></AstronautTitle>
                        <div className="box-add">
                            <AstronautTitle cardDate={item[1].date} cardTitle={item[1].title} source={item[1].image}></AstronautTitle>
                            <AstronautTitle cardDate={item[2].date} cardTitle={item[2].title} source={item[2].image}></AstronautTitle>
                        </div>
                    </div>
                    <div className="box">
                        <AstronautTitle cardDate={item[3].date} cardTitle={item[3].title} source={item[3].image}></AstronautTitle>
                        <AstronautTitle cardDate={item[4].date} cardTitle={item[4].title} source={item[4].image}></AstronautTitle>
                        <div className="box-add">
                            <AstronautTitle cardDate={item[5].date} cardTitle={item[5].title} source={item[5].image}></AstronautTitle>
                            <AstronautTitle cardDate={item[6].date} cardTitle={item[6].title} source={item[6].image}></AstronautTitle>
                        </div>
                    </div>
                    <div className="box">
                        <AstronautTitle cardDate={item[7].date} cardTitle={item[7].title} source={item[7].image}></AstronautTitle>
                        <AstronautTitle cardDate={item[8].date} cardTitle={item[8].title} source={item[8].image}></AstronautTitle>
                        <div className="box-add">
                            <AstronautTitle cardDate={item[9].date} cardTitle={item[9].title} source={item[9].image}></AstronautTitle>
                            <AstronautTitle cardDate={item[10].date} cardTitle={item[10].title} source={item[10].image}></AstronautTitle>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}


export default AstranautPost;
