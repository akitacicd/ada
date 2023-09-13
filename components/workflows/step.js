"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
const yaml = require("yaml");
const github = require("../../helpers/github/actions");
const step_1 = require("../types/workflows/step");
class Step extends step_1.StepClass {
    toString() {
        return yaml.stringify(this, {
            aliasDuplicateObjects: false,
            lineWidth: 0,
            minContentWidth: 0,
        });
    }
    async validate() {
        if (this.uses !== undefined) {
            const containsAllRequirerdArgs = await github.checkRequiredArgs(this.uses, this.with);
            if (!containsAllRequirerdArgs) {
                throw new Error(`Step ${this.name} missing required arg`);
            }
        }
        return true;
    }
}
exports.Step = Step;
new Step({
    name: "banana",
    run: "echo 1"
});
//# sourceMappingURL=step.js.map