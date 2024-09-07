function generateResume() {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    // Create resume preview with editable content
    const resumePreview = `
      <h1 contenteditable="true">${name}</h1>
      <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
      <h2>Education</h2>
      <p contenteditable="true">${education}</p>
      <h2>Work Experience</h2>
      <p contenteditable="true">${experience}</p>
      <h2>Skills</h2>
      <p contenteditable="true">${skills}</p>
    `;
  
    // Display resume preview
    document.getElementById('resume-preview')!.innerHTML = resumePreview;
  }
  
  function saveResume() {
    // Get the editable content
    const resumePreview = document.getElementById('resume-preview')!.innerHTML;
    
    // Optionally, you can save this content to local storage or send it to a server
    // For demonstration, we'll just log it to the console
    console.log('Saved Resume:', resumePreview);
  }
  