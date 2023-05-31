import { Hearts } from "react-loader-spinner";


export const Loader = () => {
return (
    <Hearts 
    height="160"
    width="160"
    color="#4fa94d"
    ariaLabel="hearts-loading"
    wrapperStyle={{}}
    wrapperClass="loader"
    visible={true}
    // top= "0"
    // left= "0"
    // display= "flex"
    // justify-content= "center"
    // align-items= "center"
    // z-index= "9999"
/>
  );
}
