// in this page script file have a common element creating function
const create_element_groups = (tag_name, attributes = {}, content='') => {
    const _element = document.createElement(tag_name);
    _element.innerHTML = content;
    Object.entries(attributes).forEach(([attrName, attrValue]) => {
        _element.setAttribute(attrName,attrValue)
    })
    return _element;
}

// a display input boe creating and append in div-row-0
const input_box_element = create_element_groups('input',{'type':'text','name':'result','id':'result', "class" :"form-control",'onmouseover':'inputDisplayAfter()','onmouseout':'inputDisplayBefore()'})

// a button element like C, ←, %, / and append in div-row-1
const input_row_1_element = create_element_groups('button',{'type':'button','onclick':'clearDisplay()','id':'clear'},'C')
const input_row_2_element = create_element_groups('button',{'type':'button','onclick':'backspaceToDisplay(\'←\')'},'←')
const input_row_3_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'%\')'},'%')
const input_row_4_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'/\')'},'/')

// a button element like 7, 8, 9, * and append in div-row-2
const input_row_5_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'7\')'},'7')
const input_row_6_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'8\')'},'8')
const input_row_7_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'9\')'},'9')
const input_row_8_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'*\')'},'*')

// a button element like 4, 5, 6, - and append in div-row-3
const input_row_9_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'4\')'},'4')
const input_row_10_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'5\')'},'5')
const input_row_11_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'6\')'},'6')
const input_row_12_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'-\')','id':'subtract'},'-')

// a button element like 3, 2, 1, + and append in div-row-4
const input_row_13_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'3\')','id':'3'},'3')
const input_row_14_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'2\')','id':'2'},'2')
const input_row_15_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'1\')','id':'1'},'1')
const input_row_16_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'+\')','id':'add'},'+')

// a button element like 00, 0, ., = and append in div-row-5
const input_row_17_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'00\')'},'00')
const input_row_18_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'0\')'},'0')
const input_row_19_element = create_element_groups('button',{'type':'button','onclick':'addToDisplay(\'.\')'},'.')
const input_row_20_element = create_element_groups('button',{'type':'button','onclick':'calculate()','id':'equal'},'=')

// a button element like M+, M- functionalites behaviour and append in div-row-6
const input_row_MEA_element = create_element_groups('button',{'type':'button','onclick':'addToMemory()','id':'memory'},'M+')
const input_row_MES_element = create_element_groups('button',{'type':'button','onclick':'subtractFromMemory()','id':'memory'},'M-')

//div-row-1to6 are created and buttons are appended
const input_div = create_element_groups('div',{'class':'row-0'})
input_div.append(input_box_element)

const row_1_div = create_element_groups('div',{'class':'row-1'})
row_1_div.append(input_row_1_element,input_row_2_element,input_row_3_element,input_row_4_element)

const row_2_div = create_element_groups('div',{'class':'row-2'})
row_2_div.append(input_row_5_element,input_row_6_element,input_row_7_element,input_row_8_element)

const row_3_div = create_element_groups('div',{'class':'row-3'})
row_3_div.append(input_row_9_element,input_row_10_element,input_row_11_element,input_row_12_element)

const row_4_div = create_element_groups('div',{'class':'row-4'})
row_4_div.append(input_row_13_element,input_row_14_element,input_row_15_element,input_row_16_element)

const row_5_div = create_element_groups('div',{'class':'row-5'})
row_5_div.append(input_row_17_element,input_row_18_element,input_row_19_element,input_row_20_element)

const row_6_div = create_element_groups('div',{'class':'row-6'})
row_6_div.append(input_row_MEA_element,input_row_MES_element)

//calc heading dnd form element and p- description
const heading = create_element_groups('h1',{'id':'title'},'Calculator');
const form_elemenet = create_element_groups('form',{})
const desciption = create_element_groups('p',{'id':"description"},'This is a simple calculator that performs basic mathematics operations designed by <b>vijay<b> ')
form_elemenet.append(input_div,row_1_div,row_2_div,row_3_div,row_4_div,row_5_div,row_6_div)

//calculator contianer
const cal_container = create_element_groups('div', { 'class': 'calculator text-center row justify-content-center' } );
cal_container.append(heading,form_elemenet);
//bootstrp container
const main_container = create_element_groups('div', { 'class': 'container-sm' });
main_container.appendChild(cal_container);
document.body.append(main_container,desciption);


// calculator opreations
let result = document.getElementById("result");
let memory = parseFloat(localStorage.getItem("memory")) || 0;

const inputDisplayAfter = () => result.style.backgroundColor = "rgb(242, 172, 172)"
const inputDisplayBefore = () => result.style.backgroundColor = "white"

const clearDisplay = () => result.value = "";

const backspaceToDisplay = () => result.value = result.value.toString().slice(0,-1);

const addToDisplay = (value) => result.value += value;

function addToMemory() {
    memory += parseFloat(result.value) || 0;
    localStorage.setItem("memory", memory);
    clearDisplay();
}

function subtractFromMemory() {
    memory -= parseFloat(result.value) || 0;
    localStorage.setItem("memory", memory);
    clearDisplay();
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key.match(/[0-9]|[\+\-\*\/%.]/)) {
        addToDisplay(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === 'Backspace') {
        backspaceToDisplay()
    }
    else {
        alert("Only numbers and operators are allowed");
    }
});