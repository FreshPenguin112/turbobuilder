import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'operator_';
const categoryColor = '#59C059';

function register() {
    // number
    registerBlock(`${categoryPrefix}number`, {
        message0: ' ⠀%1 ⠀',
        args0: [
            {
                "type": "field_number",
                "name": "NUMBER",
                "value": 0
            }
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const NUMBER = block.getFieldValue('NUMBER');
        const code = `Number(${NUMBER})`;
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // text
    registerBlock(`${categoryPrefix}text`, {
        message0: ' ⠀%1 ⠀',
        args0: [
            {
                "type": "field_input",
                "name": "TEXT",
                "text": ""
            }
        ],
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const TEXT = block.getFieldValue('TEXT');
        const code = `String(${JSON.stringify(TEXT)})`;
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // boolean
    registerBlock(`${categoryPrefix}boolean`, {
        message0: '%1',
        args0: [
            {
                "type": "field_dropdown",
                "name": "STATE",
                "options": [
                    ["True", "true"], 
                    ["False", "false"], 
                    ["Random", "Boolean(Math.round(Math.random()))"]
                ]
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const code = block.getFieldValue('STATE');
        return [code, javascriptGenerator.ORDER_NONE];
    })
    registerBlock(`${categoryPrefix}exactlyequals`, {
        message0: '%1 equals %2 exactly?',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE1"
            },
            {
                "type": "input_value",
                "name": "VALUE2"
            }
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `${VALUE1} === ${VALUE2}`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    
}

export default register;
