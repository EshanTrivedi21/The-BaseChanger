function ValidInput(inputType, str) {
  let isValid = false;
  switch (inputType) {
    case "Decimal":
      for (let i = 0; i < str.length; i++) {
        if (str.match(/^[0-9]+$/)) isValid = true; else { isValid = false; break;}
      } break;
    case "Binary":
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") isValid = true; else { isValid = false; break;}
      } break;
    case "Octal":
      const OctalValues = ["0", "1", "2", "3", "4", "5", "6", "7"];
      for (let i = 0; i < str.length; i++) {
        if (OctalValues.includes(str[i])) isValid = true; else { isValid = false; break;}
      } break;
    case "Hexadecimal":
      const HexaValues = ["0","1","2","3","4","5","6","7","8","9","10","A","B","C","D","E","F"];
      for (let i = 0; i < str.length; i++) {
        if (HexaValues.includes(str[i])) isValid = true; else { isValid = false; break;}
      } break;
    case "BCD":
      if (str.length % 4 !== 0) break;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") isValid = true; else { isValid = false; break;} 
      } break;
    case "XS3":
      if (str.length % 4 !== 0) break;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") isValid = true; else { isValid = false; break;} 
      } break;
    case "Gray":
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") isValid = true; else { isValid = false; break;}
      } break;
    default: break;
  }
  if (isValid === true) return str;
}

function InputtoDecimal(inputType, inputValue) {
  if (ValidInput(inputType, inputValue)) {
    switch (inputType) {
      case "Binary": 
        return parseInt(inputValue, 2);
      case "Octal":
        return parseInt(inputValue, 8);
      case "Hexadecimal":
        return parseInt(inputValue, 16);
      case "BCD":
        let strBCD = "";
        let arrBCD = inputValue.match(/.{1,4}/g);
        for (let i = 0; i < arrBCD.length; i++) {
          strBCD += parseInt(arrBCD[i], 2).toString();
        }
        return strBCD ? strBCD : "Invalid Input";
      case "XS3":
        let strXS3 = "";
        let arrXS3 = inputValue.match(/.{1,4}/g);
        for (let i = 0; i < arrXS3.length; i++) {
          strXS3 += (parseInt(arrXS3[i], 2) - 3).toString();
        }
        return strXS3 ? strXS3 : "Invalid Input";
      case "Gray":
        let strGray = 0, flag = false; 
        let n = parseInt(inputValue, 2);
        for (; n; n = n >> 1) {
          strGray ^= n; flag = true;
        }
        return flag ? strGray : "Invalid Input";
      default: break;
    }
  } else {
    return "Invalid Input";
  }
}

function DecimaltoOutput(outputType, inputValue) {
  if (ValidInput("Decimal", inputValue)) {
    switch (outputType) {
      case "Binary":
        return Number(parseInt(inputValue)).toString(2);
      case "Octal":
        return Number(parseInt(inputValue)).toString(8);
      case "Hexadecimal":
        return Number(parseInt(inputValue)).toString(16);
      case "BCD":
        let strBCD = "";
        let arrBCD = inputValue.split("");
        for (let i = 0; i < arrBCD.length; i++) {
          strBCD += parseInt(arrBCD[i], 10).toString(2).padStart(4, "0");
        }
        return strBCD ? strBCD : "Invalid Input";
      case "XS3":
        let strXS3 = "";
        let arrXS3 = inputValue.split("");
        for (let i = 0; i < arrXS3.length; i++) {
          strXS3 += (parseInt(arrXS3[i], 10) + 3).toString(2).padStart(4, "0");
        }
        return strXS3 ? strXS3 : "Invalid Input";
      case "Gray":
        return Number(parseInt((inputValue ^ (inputValue >> 1)))).toString(2);
      default: break;
    }
  } else {
    return "Invalid Input";
  }
}

export default function logic(inputType, outputType, inputValue) {
  if (inputType === outputType) {
    return ValidInput(inputType, inputValue) ? inputValue : "Invalid Input";
  } else if (inputType === "Decimal" || outputType === "Decimal") {
    if (inputType === "Decimal") {
      return DecimaltoOutput(outputType, inputValue);
    } else {
      return InputtoDecimal(inputType, inputValue);
    }
  } else {
    return DecimaltoOutput(outputType, InputtoDecimal(inputType, inputValue));
  }
}