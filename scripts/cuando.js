const targetDate = new Date("2024-12-28T16:00:00");
// const targetDate = new Date("2024-12-24T18:11:00");

const interval = setInterval(() => {
    const now = new Date(); 
    const timeDifference = targetDate - now; 

    if (timeDifference > 0) {
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)));
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    document.getElementById("timer").textContent = `
        ${hours.toString().padStart(2, '0')}h :
        ${minutes.toString().padStart(2, '0')}m :
        ${seconds.toString().padStart(2, '0')}s
    `;
    } else {
    // Detiene el cronómetro cuando el tiempo se agota
    clearInterval(interval);
    document.getElementById("container").style.display = "block";
    }
}, 1000);