function ValidInput(inputType, str) {
  let isValid = false;
  switch (inputType) {
    case "Decimal":
      for (let i = 0; i < str.length; i++) {
        if (str.match(/^[0-9]+$/)) isValid = true;
        else isValid = false;
      }
      break;
    case "Binary":
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") isValid = true;
        else {
          isValid = false;
          break;
        }
      }
      break;
    case "Octal":
      const OctalValues = ["0", "1", "2", "3", "4", "5", "6", "7"];
      for (let i = 0; i < str.length; i++) {
        if (OctalValues.includes(str[i])) isValid = true;
        else {
          isValid = false;
          break;
        }
      }
      break;
    case "Hexadecimal":
      const HexaValues = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      for (let i = 0; i < str.length; i++) {
        if (HexaValues.includes(str[i])) isValid = true;
        else {
          isValid = false;
          break;
        }
      }
      break;
    case "BCD":
      if (str.length % 4 !== 0) break;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" || str[i] === "1") isValid = true;
        else {
          isValid = false;
          break;
        }
      }
      break;
    default:
      break;
  }
  if (isValid === true) return str;
}

const BCDtoDecimal = (inputValue) => {
  let str = "";
  if (ValidInput("BCD", inputValue)) {
    let arr = inputValue.match(/.{1,4}/g);
    for (let i = 0; i < arr.length; i++) {
      str = str + parseInt(arr[i], 2).toString();
    }
  }
  return str ? str : "Invalid Input";
};

const DecimaltoBCD = (inputValue) => {
  let arr = inputValue.split(""); let str = "";
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    str = str + parseInt(arr[i], 10).toString(2).padStart(4, "0");
    console.log(str);
  }
  return str ? str : "Invalid Input";
};

// const XS3toDecimal = () => {
//   //code
// };

// const DecimaltoXS3 = () => {
//   //code
// };

// const GraytoDecimal = () => {
//   //code
// };

// const DecimaltoGray = () => {
//   //code
// };

export default function logic(inputType, outputType, inputValue) {
  if (inputType === "Decimal" || outputType === "Decimal") {
    let func = `${inputType}to${outputType}`;
    switch (func) {
      case "BinarytoDecimal":
        return ValidInput("Binary", inputValue)
          ? parseInt(inputValue, 2)
          : "Invalid Input";
      case "OctaltoDecimal":
        return ValidInput("Octal", inputValue)
          ? parseInt(inputValue, 8)
          : "Invalid Input";
      case "HexadecimaltoDecimal":
        return ValidInput("Hexadecimal", inputValue)
          ? parseInt(inputValue, 16)
          : "Invalid Input";
      case "DecimaltoBinary":
        return ValidInput("Decimal", inputValue)
          ? Number(parseInt(inputValue)).toString(2)
          : "Invalid Input";
      case "DecimaltoOctal":
        return ValidInput("Decimal", inputValue)
          ? Number(parseInt(inputValue)).toString(8)
          : "Invalid Input";
      case "DecimaltoHexadecimal":
        return ValidInput("Decimal", inputValue)
          ? Number(parseInt(inputValue)).toString(16)
          : "Invalid Input";
      case "BCDtoDecimal":
        return BCDtoDecimal(inputValue);
      case "DecimaltoBCD":
        return DecimaltoBCD(inputValue);
    }
  }
}
