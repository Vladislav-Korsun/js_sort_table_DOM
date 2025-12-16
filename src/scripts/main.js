'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTableByColumn(index);
  });
});

function sortTableByColumn(columnIndex) {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const textA = rowA.children[columnIndex].textContent.trim();
    const textB = rowB.children[columnIndex].textContent.trim();

    const valueA = parseSalary(textA);
    const valueB = parseSalary(textB);

    return valueA - valueB;
  });

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}

function parseSalary(value) {
  return Number(value.replace(/[^0-9]/g, ''));
}
