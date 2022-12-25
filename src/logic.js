function ValidInput(inputType,str) {
  let isValid = false; 
  /////// Validation for binary /////////////////////////////
  if(inputType === 1){
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0" || str[i] === "1") {
      isValid = true;
    } else {
      isValid =  false;
      break;
    }
  }
}


  ////////////// Validation for Hexadecimal //////////////////////////
  if(inputType === 3){
  const HexaValues = ['0','1','2','3','4','5','6','7','8','9','10','A','B','C','D','E','F'];
  
  for(let i = 0; i < str.length; i++) {
    let currValue = str[i] ;
    if(HexaValues.includes(currValue)){
      isValid = true;
    }
    else{
      isValid = false;
      break;
    }
  }
}

//////////////////// Validation for Octal //////////////////////////
if(inputType === 2){
  const OctalValues = ['0','1','2','3','4','5','6','7'];
  
  for(let i = 0; i < str.length; i++) {
    let currValue = str[i] ;
    if(OctalValues.includes(currValue)){
      isValid = true;
    }
    else{
      isValid = false;
      break;
    }
  }
}

  console.log(isValid);
  return isValid;
};

const BinarytoDecimal = (inp) => {
  // const isBinary = ValidInput(inp);
  if(ValidInput(1,inp) === true){
    return parseInt(inp, 2);
  }
  else{
    return 0;
  }
  
};

const DecimaltoBinary = (inp) => {
  return Number(parseInt(inp)).toString(2);
};

const OctaltoDecimal = (inp) => {
  if(ValidInput(2,inp) === true){
  return parseInt(inp, 8);
  }
  else{
    return 0;
  }
};

const DecimaltoOctal = (inp) => {
  return Number(parseInt(inp)).toString(8);
};

const HexadecimaltoDecimal = (inp) => {
  if(ValidInput(3,inp) === true){
  return parseInt(inp, 16);
  }
  else{
    return 0;
  }
};

const DecimaltoHexadecimal = (inp) => {
  return Number(parseInt(inp)).toString(16);
};

const BCDtoDecimal = (inp) => {
  const num = inp.split(" ");
  let str=" ";
  for(let i = 0; i < num.length;i++){
    let currNum = num[i];
    if(ValidInput(1,currNum) === true)
    {
      str = str + (BinarytoDecimal(currNum)).toString();
      console.log(str);
    }
    else{
      break;
    }
}

return str;
};

const DecimaltoBCD = (n) => {
  let str = " ";
  if (n == 0) {
    return ("0000");
}

// To store the reverse of n
let rev = 0;

// Reversing the digits
while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = parseInt(n / 10, 10);
}

// Iterate through all digits in rev
while (rev > 0) {

    // Find Binary for each digit
    // using bitset
    let b = (rev % 10).toString(2);
    while(b.length != 4)
    {
        b = "0" + b;
    }

    // Print the Binary conversion
    // for current digit
    str = str +(b + " ");

    // Divide rev by 10 for next digit
    rev = parseInt(rev / 10, 10);
}
return str;
  
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
    return 0;
  }
}
