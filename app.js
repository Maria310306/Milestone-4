function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume preview with editable content
    var resumePreview = "\n      <h1 contenteditable=\"true\">".concat(name, "</h1>\n      <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n      <h2>Education</h2>\n      <p contenteditable=\"true\">").concat(education, "</p>\n      <h2>Work Experience</h2>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n      <h2>Skills</h2>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display resume preview
    document.getElementById('resume-preview').innerHTML = resumePreview;
}
function saveResume() {
    // Get the editable content
    var resumePreview = document.getElementById('resume-preview').innerHTML;
    // Optionally, you can save this content to local storage or send it to a server
    // For demonstration, we'll just log it to the console
    console.log('Saved Resume:', resumePreview);
}
