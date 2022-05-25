
const UseSeoHelper = (textString) => {

    textString = textString.replace(/ /g, "-");
    textString = textString.replace(/</g, "");
    textString = textString.replace(/>/g, "");
    textString = textString.replace(/"/g, "");
    textString = textString.replace(/é/g, "");
    textString = textString.replace(/!/g, "");
    textString = textString.replace(/'/, "");
    textString = textString.replace(/£/, "");
    textString = textString.replace(/^/, "");
    textString = textString.replace(/#/, "");
    textString = textString.replace(/$/, "");
    textString = textString.replace(/\+/g, "");
    textString = textString.replace(/%/g, "");
    textString = textString.replace(/½/g, "");
    textString = textString.replace(/&/g, "");
    textString = textString.replace(/\//g, "");
    textString = textString.replace(/{/g, "");
    textString = textString.replace(/\(/g, "");
    textString = textString.replace(/\[/g, "");
    textString = textString.replace(/\)/g, "");
    textString = textString.replace(/]/g, "");
    textString = textString.replace(/=/g, "");
    textString = textString.replace(/}/g, "");
    textString = textString.replace(/\?/g, "");
    textString = textString.replace(/\*/g, "");
    textString = textString.replace(/@/g, "");
    textString = textString.replace(/€/g, "");
    textString = textString.replace(/~/g, "");
    textString = textString.replace(/æ/g, "");
    textString = textString.replace(/ß/g, "");
    textString = textString.replace(/;/g, "");
    textString = textString.replace(/,/g, "");
    textString = textString.replace(/`/g, "");
    textString = textString.replace(/|/g, "");
    textString = textString.replace(/\./g, "");
    textString = textString.replace(/:/g, "");
    textString = textString.replace(/İ/g, "i");
    textString = textString.replace(/I/g, "i");
    textString = textString.replace(/ı/g, "i");
    textString = textString.replace(/ğ/g, "g");
    textString = textString.replace(/Ğ/g, "g");
    textString = textString.replace(/ü/g, "u");
    textString = textString.replace(/Ü/g, "u");
    textString = textString.replace(/ş/g, "s");
    textString = textString.replace(/Ş/g, "s");
    textString = textString.replace(/ö/g, "o");
    textString = textString.replace(/Ö/g, "o");
    textString = textString.replace(/ç/g, "c");
    textString = textString.replace(/Ç/g, "c");
    textString = textString.replace(/--/g, "-");
    textString = textString.replace(/---/g, "-");
    textString = textString.replace(/----/g, "-");
    textString = textString.replace(/----/g, "-");
    
    return textString.toLowerCase();
}

export default UseSeoHelper