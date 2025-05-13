import axios, {AxiosResponse} from "axios";

interface TestResult {
    passed: boolean;
    status?: number;
    data?: any;
    error?: string;
}
export async function runTest(testCase: any, baseUrl: string): Promise<TestResult>
{
    try {
        const response = await axios({
            method: testCase.method,
            url:`${baseUrl}${testCase.path}`,
            data: testCase.requestBody,
        });
        return {
            passed: true,
            status: response.data,
            data:response.data
        };

    } catch (error: any) {
        return {
            passed: false,
            status:error.response?.status,
            error: error.message,
        }
    }
}
