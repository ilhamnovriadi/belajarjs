let nilai = [20, 5, 10, 8, 7]

function SortApp(data) {
  return data.sort((a, b) => b - a);
}

let hasil = SortApp(nilai)

console.log('Nilai tertingi adalah '+hasil[0]+" dan Nilai terendah adalah "+hasil.pop())