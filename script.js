// script.js

// Sample user data for the demo
let userData = {
    username: "Developer123",
    points: 20,  // Start with 20 points for the demo
    tier: "Novice",
    badges: ["First Milestone"] // Example badge
};

// Sample challenges
const challenges = [
    { name: "Monthly Bug Hunt", points: 30, badge: "Bug Hunter" },
    { name: "Feature Friday", points: 20, badge: "Feature Pro" },
    { name: "Code Reviewer", points: 15, badge: "Reviewer" } // Added for variety
];

// Update the profile with user data
function updateProfile() {
    document.getElementById("username").textContent = userData.username;
    document.getElementById("user-points").textContent = userData.points;
    document.getElementById("user-tier").textContent = userData.tier;
    const badgeList = document.getElementById("badge-list");
    badgeList.innerHTML = userData.badges.map(badge => `<li>${badge}</li>`).join('');
}

// Display challenges on the board
function populateChallenges() {
    const challengeList = document.getElementById("challenge-list");
    challengeList.innerHTML = challenges.map(challenge => `
        <li>
            <strong>${challenge.name}</strong> - ${challenge.points} points
            <button onclick="completeChallenge('${challenge.name}')">Complete Challenge</button>
        </li>
    `).join('');
}

// Function to complete a challenge and award points and badges
function completeChallenge(challengeName) {
    const challenge = challenges.find(c => c.name === challengeName);

    if (challenge) {
        // Award points
        userData.points += challenge.points;

        // Tier progression example
        if (userData.points >= 50) {
            userData.tier = "Explorer";
        }

        // Add badge if not already earned
        if (!userData.badges.includes(challenge.badge)) {
            userData.badges.push(challenge.badge);
        }

        updateProfile();
        alert(`Challenge "${challenge.name}" completed! You've earned ${challenge.points} points and the "${challenge.badge}" badge.`);
    } else {
        console.error("Challenge not found:", challengeName);
    }
}

// Initialize profile, leaderboard, and challenges on page load
document.addEventListener("DOMContentLoaded", () => {
    updateProfile();
    populateChallenges();
});
