function Converter() {
    let elementValue = document.querySelector("#value")
    let value = elementValue.value
    let valueConverterNum = parseFloat (value)
    let valueReal = valueConverterNum/5
    console.log(valueReal)
    let elementConverted = document.querySelector('#valueConvert');
    let valueConverter = `The value convert is $${valueReal}`;

     elementConverted.innerHTML = valueConverter;

}


