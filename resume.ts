// Get form and display elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const displayName = document.getElementById('display-name') as HTMLDivElement;
const displayEmail = document.getElementById('display-email') as HTMLDivElement;
const displayPhone = document.getElementById('display-phone') as HTMLDivElement;
const displayEducation = document.getElementById('display-education') as HTMLDivElement;
const displaySkills = document.getElementById('display-skills') as HTMLDivElement;
const displayExperience = document.getElementById('display-experience') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Update the display section with the input values
    displayName.innerText = `Name: ${name}`;
    displayEmail.innerText = `Email: ${email}`;
    displayPhone.innerText = `Phone: ${phone}`;
    displayEducation.innerText = `Education: ${education}`;
    displaySkills.innerText = `Skills: ${skills}`;
    displayExperience.innerText = `Work Experience: ${experience}`;
});
const downloadBtn = document.createElement('button');
downloadBtn.innerText = "Download as PDF";
document.body.appendChild(downloadBtn);

downloadBtn.addEventListener('click', () => {
    window.print();  // Simple way to print/download as PDF
});
