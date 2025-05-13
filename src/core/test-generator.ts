import {OpenAPIV3} from "openapi-types"

export function generateTests(apiSpec: OpenAPIV3.Document): any[]
{
    const tests = [];
    for(const path in apiSpec.paths)
    {
        const methods = apiSpec.paths[path];
        for(const method in methods)
        {
            const endpoint = methods[method as OpenAPIV3.HttpMethods];
            tests.push({
                path,
                method,
                parameters: endpoint?.parameters,
                requestBody: endpoint?.requestBody,
                responses: endpoint?.responses,
            });
        }
    }
    return tests;
}