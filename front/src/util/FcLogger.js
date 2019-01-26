/**
 * Created by coder on 2018/6/4.
 */

const log = function ( ...values ){
    if(process.env.NODE_ENV === 'development'){
        console.log(values);
    }
};

export default {
    log,
};