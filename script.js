// Add event listener to the contact link
document.querySelector('footer a').addEventListener('click', function() {
    // Open the link in a new tab
    window.open(this.href, '_blank');
});
