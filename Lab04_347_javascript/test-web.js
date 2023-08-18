document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("orderButton");
    const orderModal = document.getElementById("orderModal");
    const closeModal = document.querySelector(".close-modal");
  
    orderButton.addEventListener("click", function() {
      orderModal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function() {
      orderModal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === orderModal) {
        orderModal.style.display = "none";
      }
    });
  
    // Form Validation
    const orderForm = document.getElementById("orderForm");
  
    orderForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Perform form validation here and show appropriate messages
      // Example validation:
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
  
      if (nameInput.value === "") {
        // Show error message for name field
      }
  
      if (emailInput.value === "") {
        // Show error message for email field
      }
  
      // Calculate total price and apply discount
      const totalPrice = calculateTotalPrice(); // Implement this function
  
      if (totalPrice > 1000) {
        applyDiscount(totalPrice); // Implement this function
      }
    });
  
    // Implement functions for calculating total price and applying discount
    function calculateTotalPrice() {
      // Calculate total price based on selected products
    }
  
    function applyDiscount(totalPrice) {
      // Apply discount to total price
    }
});
document.addEventListener("DOMContentLoaded", function() {
    $(".carousel").slick({
      autoplay: true,   // เล่นอัตโนมัติ
      dots: true,       // แสดงจุดควบคุม
      infinite: true,   // เลื่อนไปมาอย่างไม่สิ้นสุด
      speed: 500,       // ความเร็วในการเปลี่ยนภาพ (มิลลิวินาที)
      slidesToShow: 1,  // จำนวนรูปที่แสดงในแต่ละครั้ง
      slidesToScroll: 1 // จำนวนรูปที่เลื่อนในแต่ละครั้ง
    });
});