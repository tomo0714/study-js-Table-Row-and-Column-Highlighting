// DOM
const tableData = Array.from(document.getElementsByTagName('td'));

// Function
const getColumn = e => {
    const td = Array.from(document.querySelectorAll('td'));
    const index = td.indexOf(e.target);
    const column = document.querySelectorAll(`td:nth-child(${index % 7 + 2})`);
    return column;
}
 
const addHighlight = e => {
    const tr = e.target.parentNode;
    tr.classList.add('target');
    const column = getColumn(e);
    column.forEach(td => {
        td.classList.add('target');
    });
}

const removeHighlight = e => {
    const targets = Array.from(document.getElementsByClassName('target'));
    targets.forEach(target => {
        target.classList.remove('target');
    });
}

// Event
tableData.forEach(td => {
    td.addEventListener('mouseenter', addHighlight);
    td.addEventListener('mouseleave', removeHighlight);
});
    
