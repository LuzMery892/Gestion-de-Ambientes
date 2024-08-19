document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.select_amb');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
  
        // Add active class to the clicked tab
        this.classList.add('active');
        
        // Here you would typically handle showing/hiding content based on the active tab
        // Example:
        // const targetContent = document.querySelector(`#${this.dataset.role}`);
        // document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
        // targetContent.style.display = 'block';
      });
    });
  
    // Optionally, set the default tab to be active
    if (tabs.length > 0) {
      tabs[0].click(); // Simulate a click on the first tab to show the default content
    }
  });