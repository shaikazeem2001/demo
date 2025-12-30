document.addEventListener('DOMContentLoaded', () => {

    let inpvalue = document.querySelector('#inp-value');
    let inpamount = document.querySelector('#inp-amount');
    let inpbtn = document.querySelector('#inp-btn');

    let listContainer = document.querySelector('.spend-list');
    let totalDisplay = document.querySelector('.total-value');

    let totalAmount = 0;

    function addtolist() {
        let title = inpvalue.value.trim();
        let amount = Number(inpamount.value);

        if (title === '' || isNaN(amount)) return;

        // create list item
        let li = document.createElement('li');
        li.className = 'lidiv';
        li.innerHTML = `
            <span>${title}</span>
            <span>$${amount}</span>
        `;

        listContainer.appendChild(li);

        // update total
        totalAmount += amount;
        totalDisplay.textContent = `Total: $${totalAmount}`;

        // clear inputs
        inpvalue.value = '';
        inpamount.value = '';
    }

    // button click
    inpbtn.addEventListener('click', addtolist);

    // enter key
    inpamount.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addtolist();
        }
    });
});
