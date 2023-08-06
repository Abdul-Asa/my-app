"use server";

interface FetchDataProps {
  countries: { [key: string]: boolean };
  trending: string;
}

export const fetchData = async ({ countries, trending }: FetchDataProps) => {
  const fetchPromises: Promise<any>[] = [];
  let num = trending === "All" ? 11 : 3;

  // Get the country codes for which the value is true
  const countryCodes = Object.keys(countries).filter(
    (country) => countries[country]
  );

  for (let i = 1; i < num; i++) {
    // Fetch data for each country
    countryCodes.forEach((countryCode) => {
      const fetchPromise = fetch(
        `https://api.comick.app/v1.0/search?country=${countryCode}&limit=300&page=${i}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Add the 'country' key to each item in the data
          data.forEach((item: any) => {
            item.country = countryCode;
          });
          return data;
        });
      fetchPromises.push(fetchPromise);
    });
  }

  return await Promise.allSettled(fetchPromises);
};

