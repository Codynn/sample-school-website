async function submitContactForm(event) {
  event.preventDefault();
  const url = 'https://api.betterschool.app/api/contactMessage';
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQwZThlNjE2MjI0MzlhMjM0OTM3NyIsInJvbGUiOiJTQ0hPT0wiLCJpYXQiOjE3NDM0ODUxMzEsImV4cCI6MTc0NjA3NzEzMX0.eREMSlK1zCUAcHfawIIF2Onve8_YCv_k--7AX7KOSFA',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      school: "voidn",
      name: document.getElementById('full-name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    })
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      alert('Message sent successfully!');
      // Optionally reset the form
      document.getElementById('contact-form').reset();
    } else {
      alert('Error sending message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Error sending message. Please check your connection and try again.');
  }
}