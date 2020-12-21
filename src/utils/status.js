const names = {
    1: 'Ошибок не надено',
    2: 'Присутствуют ошибки',
    3: 'Смена паспорта',
    4: 'Одобренно на следующую смену',
    5: 'Было одобренно в текущем семестре'
};

const cssClasses = {
    1: '',
    2: 'danger-row',
    3: 'warning-row',
    4: 'success-row',
    5: 'info-row'
};

[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]

const filterStatusParam = [
    { value: 1, text: 'Ошибок не надено' },
    { value: 2, text: 'Присутствуют ошибки' },
    { value: 3, text: 'Смена паспорта' },
    { value: 4, text: 'Одобренно на следующую смену' },
    { value: 5, text: 'Было одобренно в текущем семестре' }
];

function getName(id) {
    return names[id];
}

function getCssClass({ row }) {
    return cssClasses[row.status];
}

function formatDate(date) {
    const dateParam = date.split('-');
    let YYYY = dateParam[0];
    let MM = dateParam[1];
    let DD = dateParam[2];
    return `${DD}.${MM}.${YYYY}`;
}

function formatDateRow(row, column) {
    const dateParam = row.date.split('-');
    let YYYY = dateParam[0];
    let MM = dateParam[1];
    let DD = dateParam[2];
    return `${DD}.${MM}.${YYYY}`;
}

export {getName, getCssClass, formatDate, formatDateRow, filterStatusParam}