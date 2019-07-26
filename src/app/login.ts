export class Login {
    userName : string;
    password : string;

    constructor(values: Object = {}){    //values is JSON object. This is used to hdle multiple flavour of constructor
        Object.assign(this,values);
    }

    
}

