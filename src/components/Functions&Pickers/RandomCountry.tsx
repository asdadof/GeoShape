export async function randomCountry(continent: string | null, selectedMinSize: number) {
    try {
        let url: string;

        //Gets all countries from a public API
        if (continent?.toLowerCase() === "all" || continent === null) {
            url = `https://restcountries.com/v3.1/all`;
        } else {
            url = `https://restcountries.com/v3.1/region/${continent}`;
        }

        //Retrieves the data and parse the JSON response
        const response = await fetch(url);
        let countries = await response.json();

        //Filters out all countries that have an area smaller that the selectedMinSize
        countries = countries.filter((country: any) => country.area > selectedMinSize);

        //Returns a random index of the countries
        return countries[Math.floor(Math.random() * countries.length)];

    } catch (error) {
        console.error('Error fetching country:', error);
        return null;
    }
}
