document.addEventListener("DOMContentLoaded", function() {
    // General function to resolve IP-based location (State, City, Zip)
    function resolveLocation() {
        var ipInfoApiUrl = 'https://ipinfo.io/json?token=519bd16c17daf4';

        fetch(ipInfoApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Extract all necessary data
                    var state = data.region;
                    var city = data.city;
                    var zip = data.postal;

                    // Update state
                    if (state) {
                        console.log("User's State: " + state);
                        document.querySelectorAll('.state_code').forEach(el => {
                            el.textContent = state;
                        });
                    } else {
                        console.log("State not found.");
                    }

                    // Update city
                    if (city) {
                        console.log("User's City: " + city);
                        document.querySelectorAll('.city_code').forEach(el => {
                            el.textContent = city;
                            el.style.cssText = 'font-family: Lato; font-weight: Normal; font-size: 20px; color: #000; text-align: justify; line-height: 1.2em;';
                        });
                    } else {
                        console.log("City not found.");
                    }

                    // Update zip
                    if (zip) {
                        console.log("User's Zip: " + zip);
                        document.querySelectorAll('.zip_code').forEach(el => {
                            el.textContent = zip;
                            el.style.cssText = 'font-family: Lato; font-weight: Normal; font-size: 20px; color: #000; text-align: justify; line-height: 1.2em;';
                        });
                    } else {
                        console.log("Zip code not found.");
                    }
                } else {
                    console.log("Failed to resolve location.");
                }
            })
            .catch(error => console.error("Error fetching location data:", error));
    }

    // Call the function to resolve the location by IP
    resolveLocation();
});
