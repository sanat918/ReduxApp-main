import React from "react";
import jsonData from "./ProductData.json";
const Home = (props) => {
    // console.log(jsonData);
    // console.log("HOME", props.data, props.data.length);
    const countItem = props.data.length;
    const CRID = props.data?.filter((val) => {
        return val
    });
    console.log(CRID);
    return (<>
        <h4 className="HMTXT">Home Components</h4>
        {
            jsonData?.Product?.map((val, key) =>
            (
                <> 
                    <div className="cart-wrapper" id={val?.course_id}>
                        <div className="img-wrapper item">
                            <img src={val?.img}
                                alt="IMG " height={80} />
                        </div>
                        <div className="text-wrapper item">
                            <h5><span>{val?.name}</span></h5>
                            <h5><span> Starting From- ${val?.price} </span></h5>
                        </div>
                        <div className="btn-wrapper item">
                            <button style={{backgroundColor:"#dd4b5e"}} onClick={() => props.removeToCartHandler(val)}>Remove to Cart</button>
                            <span> &nbsp; &nbsp;</span>
                            <button onClick={() => props.addToCartHandler(val)}>Add to Cart</button>
                        </div>
                    </div>
                    <br /></>
            )
            )
        }
    </>);
}
export default Home;

