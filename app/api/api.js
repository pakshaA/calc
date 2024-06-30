const URL = 'https://min-api.cryptocompare.com/data/price?fsym=';

export async function getConverterValues(from, to) {
    let url = URL + `${from}&tsyms=${to}`;
    try {
        var response = await fetch(url);
        if (!response.ok) throw new Error("HTTP error: " + response.status);
        var data = await response.json();
        return data[to]
    } catch (err) {
        alert(err);
    }
} 