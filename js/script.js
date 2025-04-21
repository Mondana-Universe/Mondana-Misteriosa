    const reviews = [];

    document.getElementById('submit-review').addEventListener('click', function (e) {
        e.preventDefault();

        const name = document.getElementById('user_name').value.trim();
        const rating = document.getElementById('rating').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        const newReview = {
            name,
            rating,
            message
        };

        reviews.push(newReview);

        document.getElementById('user_name').value = '';
        document.getElementById('rating').value = '1';
        document.getElementById('message').value = '';

        appendReview(newReview); // Append just the new review
    });

    function appendReview(review) {
        const reviewsList = document.getElementById('reviews-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>By ${review.name}</h4>
            <h5>${review.rating}/5 Rating</h5>
            <p>${review.message}</p>
        `;
        reviewsList.appendChild(li);
    }

