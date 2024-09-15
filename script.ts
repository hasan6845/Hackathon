
const toggleBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

let isSkillsVisible = true;

function updateButtonText() {
    toggleBtn.innerText = isSkillsVisible ? 'Hide Skills Section' : 'Show Skills Section';
}

toggleBtn.addEventListener('click', () => {
    isSkillsVisible = !isSkillsVisible;
    skillsSection.style.display = isSkillsVisible ? 'block' : 'none';
    updateButtonText();
});

updateButtonText();
