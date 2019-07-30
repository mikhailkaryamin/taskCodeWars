function tribonacci(signature, n){
  while(signature.length < n) {
    signature
    .push(signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3])
  }

  return signature.slice(0, n);
}

