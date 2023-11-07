import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'operator_';
const categoryColor = '#59C059';

function register() {
    // <true/false/random>
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
    
}

export default register;
