const { connect } = require('./MulheresRepository');
const { mulheresModel } = require('./MulheresSchema');
connect()

const getAll = async () => {
    return mulheresModel.find((error, mulheres) => {
        if(error) {
            console.error(error);
        }
        return mulheres;
    });
}


module.exports = {
    getAll
}