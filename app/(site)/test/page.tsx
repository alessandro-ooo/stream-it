import Notify from "@/app/Components/Notify/Notify";

const test = () => {
    return(
        <Notify text="Questa è una notifica che appare e poi sparisce da sola" trigger={true} uploading={false}/>
    )
}

export default test;