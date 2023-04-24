
function isValidateObjectRequest(req: any, inputs: any[]) {
    let message = [];

    for (let i = 0; i < inputs.length; i++) {
        if (req.body[inputs[i].name] == undefined || req.body[inputs[i].name] == "") {
            message.push(inputs[i].message);
        }
    }

    return message.length == 0 ? true : message;
}
export { isValidateObjectRequest };