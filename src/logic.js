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
    default: break;
  }
  if (isValid === true) return str;
}

function InputtoDecimal(inputType, inputValue) {
  switch (inputType) {
    case "Decimal":
      return ValidInput("Decimal", inputValue) ? inputValue : "Invalid Input";
    case "Binary": 
      return ValidInput("Binary", inputValue) ? parseInt(inputValue, 2) : "Invalid Input";
    case "Octal":
      return ValidInput("Octal", inputValue) ? parseInt(inputValue, 8) : "Invalid Input";
    case "Hexadecimal":
      return ValidInput("Hexadecimal", inputValue) ? parseInt(inputValue, 16) : "Invalid Input";
    case "BCD":
      let strBCD = "";
      if (ValidInput("BCD", inputValue)) {
        let arr = inputValue.match(/.{1,4}/g);
        for (let i = 0; i < arr.length; i++) {
          strBCD += parseInt(arr[i], 2).toString();
        }
      }
      return strBCD ? strBCD : "Invalid Input";
    case "XS3":
      let strXS3 = "";
      if (ValidInput("BCD", inputValue)) {
        let arr = inputValue.match(/.{1,4}/g);
        for (let i = 0; i < arr.length; i++) {
          strXS3 += (parseInt(arr[i], 2) - 3).toString();
        }
      }
      return strXS3 ? strXS3 : "Invalid Input";
    case "Gray":
      let strGray = 0, flag = false; 
      if (ValidInput("Binary", inputValue)) {
        let n = parseInt(inputValue, 2);
        for (; n; n = n >> 1) {
          strGray ^= n; flag = true;
        }
      }
      return flag ? strGray : "Invalid Input";
    default: break;
  }
}

function DecimaltoOutput(outputType, inputValue) {
  switch (outputType) {
    case "Binary":
      return ValidInput("Decimal", inputValue) ? Number(parseInt(inputValue)).toString(2) : "Invalid Input";
    case "Octal":
      return ValidInput("Decimal", inputValue) ? Number(parseInt(inputValue)).toString(8) : "Invalid Input";
    case "Hexadecimal":
      return ValidInput("Decimal", inputValue) ? Number(parseInt(inputValue)).toString(16) : "Invalid Input";
    case "BCD":
      let strBCD = "";
      if (ValidInput("Decimal", inputValue)) {
        let arr = inputValue.split("");
        for (let i = 0; i < arr.length; i++) {
          strBCD += parseInt(arr[i], 10).toString(2).padStart(4, "0");
        }
      }
      return strBCD ? strBCD : "Invalid Input";
    case "XS3":
      let strXS3 = "";
      if (ValidInput("Decimal", inputValue)) {
        let arr = inputValue.split("");
        for (let i = 0; i < arr.length; i++) {
          strXS3 += (parseInt(arr[i], 10) + 3).toString(2).padStart(4, "0");
        }
      }
      return strXS3 ? strXS3 : "Invalid Input";
    case "Gray":
      return ValidInput("Decimal", inputValue) ? Number(parseInt((inputValue ^ (inputValue >> 1)))).toString(2) : "Invalid Input";
    default: break;
    }
}

export default function logic(inputType, outputType, inputValue) {
  if (inputType === "Decimal" || outputType === "Decimal") {
    if (inputType === "Decimal") {
      return DecimaltoOutput(outputType, inputValue);
    } else {
      return InputtoDecimal(inputType, inputValue);
    }
  } else {
    return DecimaltoOutput(outputType, InputtoDecimal(inputType, inputValue));
  }
}