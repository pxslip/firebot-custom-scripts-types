import { Effects } from "../effects";
import TriggersObject = Effects.TriggersObject;
import Trigger = Effects.Trigger;

/**
 * The categories of variables
 */
export enum VariableCategory {
    COMMON = "common",
    TRIGGER = "trigger based",
    USER = "user based",
    TEXT = "text",
    NUMBERS = "numbers",
    ADVANCED = "advanced",
}
/**
 * The possible output types of variables
 */
export enum VariableOutputDataType {
    TEXT = "text",
    NUMBER = "number",
    ALL = "ALL",
}
export type ReplaceVariable = {
    definition: {
        handle: string;
        usage?: string;
        description: string;
        examples?: Array<{
            usage: string;
            description: string;
        }>;
        triggers?: TriggersObject;
        categories?:
            | VariableCategory[]
            | Array<
                  | "common"
                  | "trigger based"
                  | "user based"
                  | "text"
                  | "numbers"
                  | "advanced"
              >;
        possibleDataOutput: VariableOutputDataType[] | Array<"text" | "number">; // make this backwards compatible with prior code
    };
    evaluator(trigger: Trigger, ...args: any[]): any;
};

export type ReplaceVariableManager = {
    registerReplaceVariable(replaceVariable: ReplaceVariable): void;
};
