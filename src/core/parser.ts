import SwaggerParser from "../../node_modules/@apidevtools/swagger-parser/lib/index";

export async function parseOpenAPISpec(specPath: string): Promise<any> {
    try {
        const api = await SwaggerParser.parse(specPath)
        return api
    } catch (error: any) {
        throw new Error(`Failed to parse openAPI spec : ${error.message}`)
    }
}