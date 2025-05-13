import Ajv from "ajv";

export function validateSchema(data: any , schema: any): boolean{
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const isValid = validate(data);
    if(!isValid) console.log(validate.errors);
    return isValid;

}