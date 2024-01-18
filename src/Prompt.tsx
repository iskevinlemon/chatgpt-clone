import Svg from "./Svg";

const Prompt = () => {
    return (
        <div className="text-center gpt-prompt">
            <div className="gpt-circle text-dark">
                <Svg/>
            </div>
            <h5 className="font-weight-bold mt-3">
                How can I help you today?
            </h5>
        </div>
    );
}
 
export default Prompt;