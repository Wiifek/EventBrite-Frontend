
const showSuccessMessage =(container, message, title)=>{
    container.success(message, title, {
        closeButton: true,
        showAnimation: "animated slideInRight",
        hideAnimation: "animated slideOutRight"
    });     
}

const showErrorMessage =(container, message, title)=>{
    container.error(message, title, {
        closeButton: true,
        showAnimation: "animated slideInRight",
        hideAnimation: "animated slideOutRight"
    });        
}

export default {showSuccessMessage, showErrorMessage}