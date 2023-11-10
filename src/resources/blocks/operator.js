import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'operator_';
const categoryColor = '#59C059';

function register() {
    // number, 12.3
    registerBlock(`${categoryPrefix}number`, {
        message0: ' ⠀%1 ⠀',
        args0: [
            {
                "type": "field_number",
                "name": "NUMBER",
                "value": 12.3
            }
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const NUMBER = block.getFieldValue('NUMBER');
        const code = `${NUMBER}`;
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // text, "foobar"
    registerBlock(`${categoryPrefix}text`, {
        message0: ' ⠀%1 ⠀',
        args0: [
            {
                "type": "field_input",
                "name": "TEXT",
                "text": "foobar"
            }
        ],
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const TEXT = block.getFieldValue('TEXT');
        const code = `${JSON.stringify(TEXT)}`;
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // boolean, true
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
    // equals, x == y
    registerBlock(`${categoryPrefix}equals`, {
        message0: '%1 = %2 ?',
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
        const code = `(${VALUE1 || 0} == ${VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // exactlyequals, x === y
    registerBlock(`${categoryPrefix}exactlyequals`, {
        message0: '%1 === %2 ?',
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
        const code = `(${VALUE1 || 0} === ${VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // join, "foo" + "bar"
    registerBlock(`${categoryPrefix}join`, {
        message0: 'join %1 , %2',
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
        output: "String",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `(${String(VALUE1) || '""'} + ${String(VALUE2) || '""'})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // plus, 0.5 + 1.5
    registerBlock(`${categoryPrefix}plus`, {
        message0: '%1 + %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `(${Number(VALUE1) || VALUE1 || 0} + ${Number(VALUE2) || VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // minus, 1.5 - 1
    registerBlock(`${categoryPrefix}minus`, {
        message0: '%1 - %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `(${Number(VALUE1) || VALUE1 || 0} - ${Number(VALUE2) || VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // times, 2 * 2
    registerBlock(`${categoryPrefix}times`, {
        message0: '%1 * %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `(${Number(VALUE1) || VALUE1 || 0} * ${Number(VALUE2) || VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // divide, 10 / 2
    registerBlock(`${categoryPrefix}divide`, {
        message0: '%1 / %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `(${Number(VALUE1) || VALUE1 || 0} / ${Number(VALUE2) || VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })
    // exponent, 5 ** 4
    registerBlock(`${categoryPrefix}exponent`, {
        message0: '%1 ^ %2',
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
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE1 = javascriptGenerator.valueToCode(block, 'VALUE1', javascriptGenerator.ORDER_ATOMIC);
        const VALUE2 = javascriptGenerator.valueToCode(block, 'VALUE2', javascriptGenerator.ORDER_ATOMIC)
        const code = `(${Number(VALUE1) || VALUE1 || 0} ** ${Number(VALUE2) || VALUE2 || 0})`
        return [code, javascriptGenerator.ORDER_NONE];
    })

}

export default register;
