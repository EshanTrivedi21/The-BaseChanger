const BinarytoDecimal = (inp) => {
  return parseInt(inp, 2);
};

const DecimaltoBinary = (inp) => {
  return Number(parseInt(inp)).toString(2);
};

const OctaltoDecimal = (inp) => {
  return parseInt(inp, 8);
};

const DecimaltoOctal = (inp) => {
  return Number(parseInt(inp)).toString(8);
};

const HexadecimaltoDecimal = (inp) => {
  return parseInt(inp, 16);
};

const DecimaltoHexadecimal = (inp) => {
  return Number(parseInt(inp)).toString(16);
};

const BCDtoDecimal = () => {
  //code
};

const DecimaltoBCD = () => {
  //code
};

const XS3toDecimal = () => {
  //code
};

const DecimaltoXS3 = () => {
  //code
};

const GraytoDecimal = () => {
  //code
};

const DecimaltoGray = () => {
  //code
};

export default function logic(inputType, outputType, inputValue) {
  if (inputType === 0 && outputType === 1) {
    return DecimaltoBinary(inputValue);
  } else if (inputType === 1 && outputType === 0) {
    return BinarytoDecimal(inputValue);
  } else if (inputType === 0 && outputType === 2) {
    return DecimaltoOctal(inputValue);
  } else if (inputType === 2 && outputType === 0) {
    return OctaltoDecimal(inputValue);
  } else if (inputType === 0 && outputType === 3) {
    return DecimaltoHexadecimal(inputValue);
  } else if (inputType === 3 && outputType === 0) {
    return HexadecimaltoDecimal(inputValue);
  } else if (inputType === 0 && outputType === 4) {
    return DecimaltoBCD(inputValue);
  } else if (inputType === 4 && outputType === 0) {
    return BCDtoDecimal(inputValue);
  } else if (inputType === 0 && outputType === 5) {
    return DecimaltoXS3(inputValue);
  } else if (inputType === 5 && outputType === 0) {
    return XS3toDecimal(inputValue);
  } else if (inputType === 0 && outputType === 6) {
    return DecimaltoGray(inputValue);
  } else if (inputType === 6 && outputType === 0) {
    return GraytoDecimal(inputValue);
  } else {
    return inputValue;
  }
}
