document.addEventListener("DOMContentLoaded", function () {
    const restaurantCards = document.querySelectorAll(".restaurant-card");
    const restaurantList = document.getElementById("restaurant-list");
    const detailsContainer = document.getElementById("restaurant-details");
    const detailsContent = document.getElementById("details-content");

    if (!restaurantList || !detailsContainer || !detailsContent) {
        console.error("Error: Missing required elements in HTML.");
        return;
    }

    const restaurantDetails = {
        "Gabel Loffel": {
            address: "12 Gourmet Ave, Meridien",
            phone: "(555) 123-4567",
            category: "European Cuisine",
            hours: "11 AM - 11 PM",
            price: "$$$",
            description: "A fine dining restaurant offering exquisite European flavors with a modern twist.",
            image: "rais.jpg"
        },
        "Gary Gari": {
            address: "76 No. Highland Ave., Meridien City",
            phone: "490 24 6709",
            category: "Japanese",
            hours: "5 PM - 10 PM",
            price: "$$",
            description: "A lively spot serving bold Japanese flavors with an artistic presentation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
            image: "Wendys_ServiceImage_02.jpg"
        },
        "Il Piatto": {
            address: "88 Pasta Lane, Meridien",
            phone: "(555) 555-1234",
            category: "Italian",
            hours: "12 PM - 10 PM",
            price: "$$$",
            description: "Authentic Italian cuisine with handmade pasta and traditional wood-fired pizzas.",
            image: "pizza.jpg"
        },
        "Pierre Platters": {
            address: "22 Bistro Blvd, Meridien",
            phone: "(555) 321-6789",
            category: "French Bistro",
            hours: "8 AM - 8 PM",
            price: "$$",
            description: "A cozy French bistro known for its delicious pastries, cheeses, and fine wines.",
            image: "pasta.jpg"
        }
    };

    restaurantCards.forEach((card) => {
        card.addEventListener("click", function () {
            const restaurantName = card.getAttribute("data-name");

            if (!restaurantName || !restaurantDetails[restaurantName]) {
                console.error("Error: Missing data for " + restaurantName);
                return;
            }

            const details = restaurantDetails[restaurantName];

           
            detailsContent.innerHTML = `
                <div class="d-flex border rounded shadow-lg overflow-hidden detail-box">
                    <!-- Left Side: Image -->
                    <div class="col-md-5 position-relative">
                        <img src="${details.image}" class="img-fluid h-100 w-100 object-fit-cover" alt="${restaurantName}">
                        <div class="position-absolute top-50 start-0 bg-warning text-dark fw-bold py-2 px-3 vertical-text">
                            ${restaurantName}
                        </div>
                    </div>

                    <!-- Right Side: Details -->
                    <div class="col-md-7 p-4 bg-light">
                        <h2 class="fw-bold text-danger">${restaurantName}</h2>
                        <div class="d-flex justify-content-between border-bottom pb-2">
                            <p class="mb-0"><strong>Address:</strong> ${details.address}</p>
                            <p class="mb-0"><strong>Category:</strong> ${details.category}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom pb-2 mt-2">
                            <p class="mb-0"><strong>Phone:</strong> ${details.phone}</p>
                            <p class="mb-0"><strong>Open:</strong> ${details.hours}</p>
                            <p class="mb-0"><strong>Price:</strong> ${details.price}</p>
                        </div>
                        <p class="mt-3">${details.description}</p>
                        <button class="btn btn-warning mt-3" onclick="hideDetails()">Main Menu</button>
                    </div>
                </div>
            `;

          
            restaurantList.style.display = "none";
            detailsContainer.style.display = "block";
        });
    });
});


function hideDetails() {
    document.getElementById("restaurant-list").style.display = "block";
    document.getElementById("restaurant-details").style.display = "none";
}
