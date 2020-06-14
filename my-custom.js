function storedataEmail() {
    const userEmail = document.getElementById('userInputEmail').value;
    
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userEmail)
    };
    
    fetch('/api', options);
};

const data = 'This is my data, or isnt it?'

