document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from refreshing
    const query = document.getElementById("searchInput").value.trim();

    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a search term!");
    }
});