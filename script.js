// script.js
const countries = [
    { name: "United States", capital: "Washington D.C." },
    { name: "India", capital: "New Delhi" },
    { name: "Germany", capital: "Berlin" },
    { name: "Japan", capital: "Tokyo" },
    { name: "Australia", capital: "Canberra" },
    { name: "Canada", capital: "Ottawa" },
    { name: "France", capital: "Paris" },
    { name: "United Kingdom", capital: "London" }
];

function showSuggestions(input) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    if (input.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }

    const filteredCountries = countries.filter(country => 
        country.name.toLowerCase().includes(input.toLowerCase()) || 
        country.capital.toLowerCase().includes(input.toLowerCase())
    );

    if (filteredCountries.length === 0) {
        suggestionsBox.innerHTML = '<div class="no-suggestions">No suggestions</div>';
    } else {
        filteredCountries.forEach(country => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.innerHTML = `${country.name} - ${country.capital}`;
            suggestionItem.onclick = () => {
                document.getElementById('search-input').value = country.name;
                suggestionsBox.style.display = 'none';
            };
            suggestionsBox.appendChild(suggestionItem);
        });
    }
    suggestionsBox.style.display = 'block';
}
