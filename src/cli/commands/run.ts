import { Command,Flags} from "@oclif/core"
import { parseOpenAPISpec } from "../../core/parser.js"
import { generateTests } from "../../core/test-generator.js"
import { runTest } from "../../core/test-runner.js"
import { spec } from "node:test/reporters";

export default class Run extends Command {
  static description = 'Run API tests from an OpenAPI spec';

  static flags = {
    spec: Flags.string({ char: 's', description: 'Path to OpenAPI spec', required: true }),
    baseUrl: Flags.string({ char: 'u', description: 'Base URL of the API', required: true }),
  };

  async run() {
    try {
        const { flags } = await this.parse(Run);
        this.log(`[DEBUG] Starting tests with spec: ${flags.spec}`);
        const apiSpec = await parseOpenAPISpec(flags.spec);
        const tests = generateTests(apiSpec);
        
        for (const test of tests) {
          const result = await runTest(test, flags.baseUrl);
          this.log(`Test ${test.method} ${test.path}: ${result.passed ? 'PASSED' : 'FAILED'}`);
        }
    } catch (error) {
        console.log(error)
    }
  }
}