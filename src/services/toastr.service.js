
import container from "../index"
const showSuccessMessage =(message, title)=>{
    container.success(message, title, {
        closeButton: true,
        showAnimation: "animated slideInRight",
        hideAnimation: "animated slideOutRight"
    });     
}

const showErrorMessage =(message, title)=>{
    container.error(message, title, {
        closeButton: true,
        showAnimation: "animated slideInRight",
        hideAnimation: "animated slideOutRight"
    });        
}

export default {showSuccessMessage, showErrorMessage}