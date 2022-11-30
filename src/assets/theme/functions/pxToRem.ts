function pxToRem(number: number, baseNumber = 16): string {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
