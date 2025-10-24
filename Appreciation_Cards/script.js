
        const text = "Thank you for all your hard work throughout the year! 🙏🎁";
        const sender = 'Best wishes, Mayank';
        let staffName = [];
        let allCards = [];
        const inputBtn = document.getElementById("b1_input");
        const submitBtn = document.getElementById("b1_button");
        const peraBtn = document.getElementById("box2");
        const deltBtn = document.getElementById("b1_delete");
        const emptyState = document.getElementById("empty-state");
        const cardCounter = document.getElementById("card-counter");

        function updateCounter() {
            const count = allCards.length;
            cardCounter.textContent = `${count} card${count !== 1 ? 's' : ''} created`;
        }

        function updateEmptyState() {
            if (allCards.length > 0) {
                emptyState.style.display = 'none';
            } else {
                emptyState.style.display = 'block';
            }
        }

        submitBtn.addEventListener("click", function () {
            const input = inputBtn.value.trim();
            
            if (!input) {
                alert("Please enter a staff member's name!");
                return;
            }
            
            staffName.push(input);
            inputBtn.value = "";
            inputBtn.focus();
            
            const card = `<div class="label_card">
                <p class="label_card_l1">Dear ${input}</p> 
                <p class="label_card_l2">${text}</p> 
                <p class="label_card_l3">${sender}</p>
            </div>`;
            
            allCards.push(card);
            localStorage.setItem("card", JSON.stringify(allCards));
            peraBtn.innerHTML += card;
            
            updateCounter();
            updateEmptyState();
        });

        window.addEventListener("DOMContentLoaded", function () {
            const savedCards = JSON.parse(localStorage.getItem("card") || "[]");
            allCards = savedCards;
            
            if (savedCards.length > 0) {
                savedCards.forEach(card => {
                    peraBtn.innerHTML += card;
                });
            }
            
            updateCounter();
            updateEmptyState();
        });

        deltBtn.addEventListener("click", function() {
            if (allCards.length === 0) {
                alert("There are no cards to delete.");
                return;
            }
            
            if (confirm("Are you sure you want to delete all appreciation cards?")) {
                peraBtn.innerHTML = '';
                localStorage.removeItem("card");
                allCards = [];
                staffName = [];
                
                updateCounter();
                updateEmptyState();
                
                // Show empty state message
                peraBtn.innerHTML = `<div class="empty-state" id="empty-state">
                    <i class="fas fa-gift"></i>
                    <h3>No appreciation cards yet</h3>
                    <p>Add a staff member's name to create your first card</p>
                </div>`;
                emptyState = document.getElementById("empty-state");
            }
        });
   