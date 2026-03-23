document.getElementById('eventRegistrationForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const college = document.getElementById('college').value;

    const participant = { name, email, phone, college };
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
    participants.push(participant);
    localStorage.setItem('participants', JSON.stringify(participants));

    alert('Registration successful!');
    document.getElementById('eventRegistrationForm').reset();
});
