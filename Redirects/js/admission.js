async function submitAdmissionForm(event) {
  event.preventDefault();
  const url = 'https://api.betterschool.app/api/admissions/';

  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQwZThlNjE2MjI0MzlhMjM0OTM3NyIsInJvbGUiOiJTQ0hPT0wiLCJpYXQiOjE3NDM0ODUxMzEsImV4cCI6MTc0NjA3NzEzMX0.eREMSlK1zCUAcHfawIIF2Onve8_YCv_k--7AX7KOSFA',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      school: "voidn",
      fullName: document.getElementById("full-name").value.trim(),
      email: document.getElementById("email").value.trim(),
      dateOfBirth: document.getElementById("dob").value,
      phoneNumber: document.getElementById("phone").value.trim(),
      address: document.getElementById("address").value.trim(),
      class: document.getElementById("grade").value,
      queries: document.getElementById("additional-querries").value.trim()
    })
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    alert('Application submitted successfully!');
  } catch (error) {
    console.error(error);
    alert('An error occurred while submitting the application. Please try again later.');
  }
}