function filterTable() {
    var selectedCategory = document.getElementById('categoryFilter').value;
    var tableRows = document.querySelectorAll('#ratingsTable tbody tr');

    tableRows.forEach(row => {
        var category = row.getAttribute('data-category');
        if (selectedCategory === 'all' || selectedCategory === category) {
            row.style.display = ''; // Show row
        } else {
            row.style.display = 'none'; // Hide row
        }
    });
}
