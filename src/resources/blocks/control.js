import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'control_';
const categoryColor = '#FFAB19';

function register() {
    // if, if (1 + 1 === 2) {console.log("foo")}
    registerBlock(`${categoryPrefix}if`, {
        message0: 'if %1 then %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const CONDITION = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `if (${CONDITION ? `Boolean(${CONDITION})` : 'false'}) { ${BLOCKS} };`;
        return `${code}\n`;
    })
    // ifelse, if ("foo" === "bar") {console.log("foo")} else {console.log("bar")}
    registerBlock(`${categoryPrefix}ifelse`, {
        message0: 'if %1 then %2 %3 else %4 %5',
        args0: [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS2"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const CONDITION = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const BLOCKS2 = javascriptGenerator.statementToCode(block, 'BLOCKS2');
        const code = `if (${CONDITION ? `Boolean(${CONDITION})` : 'false'}) { ${BLOCKS} } else { ${BLOCKS2} };`;
        return `${code}\n`;
    })
}

export default register;
