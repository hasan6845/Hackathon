// Make resume sections editable on click
displayName.addEventListener('click', () => {
    const newName = prompt('Edit Name:', displayName.innerText.replace('Name: ', ''));
    if (newName) {
        displayName.innerText = `Name: ${newName}`;
    }
});

displayEmail.addEventListener('click', () => {
    const newEmail = prompt('Edit Email:', displayEmail.innerText.replace('Email: ', ''));
    if (newEmail) {
        displayEmail.innerText = `Email: ${newEmail}`;
    }
});

displayPhone.addEventListener('click', () => {
    const newPhone = prompt('Edit Phone:', displayPhone.innerText.replace('Phone: ', ''));
    if (newPhone) {
        displayPhone.innerText = `Phone: ${newPhone}`;
    }
});

// Repeat for Education, Skills, and Experience
