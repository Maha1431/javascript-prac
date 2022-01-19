function pow(n, e) {
    let num = n;
    for (let i = 1; i < e; i++) {
      num *= n;
    }
    return num;
  }
  console.log(pow(-3, 3));