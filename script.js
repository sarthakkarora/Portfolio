document.addEventListener('DOMContentLoaded', function() {
    var toggleModeButton = document.getElementById('toggleMode');
    var body = document.body;
    var avatarContainer = document.getElementById('avatarContainer');

    toggleModeButton.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            toggleModeButton.textContent = 'Light Mode 🌞';
            avatarContainer.classList.remove('dark-mode-border');
        } else {
            body.classList.add('light-mode');
            toggleModeButton.textContent = 'Dark Mode 🌙';
            avatarContainer.classList.add('dark-mode-border');
        }
    });
});
