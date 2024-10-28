
document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    
    if (description === '' || isNaN(amount) || category === '') {
        alert('Please fill in all fields');
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = `${description} - $${amount.toFixed(2)} (${category})`;
    document.getElementById('expense-list').appendChild(li);

    updateTotal(amount);
    document.getElementById('expense-form').reset();
});


let total = 0;
function updateTotal(amount) {
    total += amount;
    document.getElementById('total-amount').textContent = total.toFixed(2);
}
