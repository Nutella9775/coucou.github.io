document.addEventListener("DOMContentLoaded", function() {
    const dateTimeElement = document.getElementById("datetime");
    
    function updateDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const formattedTime = now.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
        });
        
        dateTimeElement.textContent = `${formattedDate} - ${formattedTime}`;
    }

    // Mise à jour de la date et de l'heure immédiatement
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
