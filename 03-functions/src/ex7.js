function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
      break
    }
  }
  // Пиши код выше этой строки
}
