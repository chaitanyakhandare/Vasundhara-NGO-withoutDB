
var logo = document.querySelector(".nav-logo h4");
var midButtons = document.querySelector(".nav-middle h4");


gsap.to(".nav", {
    backgroundColor: "#192655",
    duration: 1,
    height: "12vh",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".nav-logo h4", {
    color: "white",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".nav-middle h4", {
    color: "white",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})



// REVIEWS SECTION

// dummy once
const reviewsData = [
    { name: "Ravi Kumar", stars: 4, description: "Great experience! The team at Vasundhara NGO is doing fantastic work in the community. I'm happy to support their cause."},
    { name: "Ankit Patel", stars: 3, description: "Good work, but there is room for improvement. Keep it up!"},
    { name: "Neha Singh", stars: 5, description: "Vasundhara NGO is doing incredible work for the community. Their efforts are truly commendable."},
    { name: "Rajesh Verma", stars: 4, description: "I've had a positive experience with Vasundhara NGO. Their team is passionate about making a difference."},
    { name: "Deepika Gupta", stars: 4, description: "I'm inspired by the work of Vasundhara NGO. They are bringing about real change in the lives of those they serve."},
    { name: "Rajendra Singh", stars: 3, description: "I appreciate the efforts of Vasundhara NGO. They are making a positive impact on the community."},
    { name: "Manoj Tiwari", stars: 4, description: "Vasundhara NGO is doing incredible work. Their commitment to the cause is truly commendable."},
    { name: "Anand Sharma", stars: 4, description: "Keep up the good work! The impact you're making is felt in the community."},
    { name: "Sanjay Kumar", stars: 3, description: "I'm grateful for the work Vasundhara NGO does. They are an inspiration."},
];


function createReviews(review) {
    return `
    <div class="review">
    <h3>${review.name}</h3>
    <p id="output-stars">${review.stars} stars</p>
    <p id="output-text">${review.description}</p>
    </div>
    `;
}

var reviewContainer = document.querySelector(".all-reviews");

reviewsData.forEach(review => {
    const reviewHTML = createReviews(review);
    reviewContainer.innerHTML += reviewHTML;
});


