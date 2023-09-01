document.addEventListener("DOMContentLoaded", () => {
    const gorillaTable = document.getElementById("gorillaTable");
    const detailsContainer = document.getElementById("detailsContainer");
    const gorillaName = document.getElementById("gorillaName");
    const gorillaDetails = document.getElementById("gorillaDetails");
  
    fetch("http://localhost:3000/momoFamily")
      .then(response => response.json())
      .then(data => {
        data.forEach(gorilla => {
          const row = gorillaTable.insertRow();
          const nameCell = row.insertCell(0);
          const sexCell = row.insertCell(1);
          const birthdateCell = row.insertCell(2);
  
          nameCell.textContent = gorilla.Name;
          sexCell.textContent = gorilla.Gender;
          birthdateCell.textContent = gorilla.Birthdate;
  
          row.addEventListener("click", () => showDetails(gorilla));
          row.addEventListener("mouseover", () => row.classList.add("hovered"));
          row.addEventListener("mouseout", () => row.classList.remove("hovered"));
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  
      function showDetails(gorilla) {
        console.log("showDetails called with:", gorilla);
      
        gorillaName.textContent = gorilla.Name;
        detailsContainer.innerHTML = ""; // Clear previous details
      
        const detailsTable = document.createElement("table");
        detailsTable.classList.add("details-table");
      
        const lifeHistoryRow = detailsTable.insertRow();
        const lifeHistoryHeaderCell = lifeHistoryRow.insertCell(0);
        lifeHistoryHeaderCell.textContent = "Life History";
        const lifeHistoryValueCell = lifeHistoryRow.insertCell(1);
        lifeHistoryValueCell.textContent = gorilla.Bio.LifeHistory.join("\n");
      
        const featureRow = detailsTable.insertRow();
        const featureHeaderCell = featureRow.insertCell(0);
        featureHeaderCell.textContent = "Feature";
        const featureValueCell = featureRow.insertCell(1);
        featureValueCell.textContent = gorilla.Bio.Feature;
      
        const locationRow = detailsTable.insertRow();
        const locationHeaderCell = locationRow.insertCell(0);
        locationHeaderCell.textContent = "Location";
        const locationValueCell = locationRow.insertCell(1);
        locationValueCell.textContent = gorilla.Location;
      
        const motherRow = detailsTable.insertRow();
        const motherHeaderCell = motherRow.insertCell(0);
        motherHeaderCell.textContent = "Mother";
        const motherValueCell = motherRow.insertCell(1);
        motherValueCell.textContent = gorilla.Mother;
      
        const fatherRow = detailsTable.insertRow();
        const fatherHeaderCell = fatherRow.insertCell(0);
        fatherHeaderCell.textContent = "Father";
        const fatherValueCell = fatherRow.insertCell(1);
        fatherValueCell.textContent = gorilla.Father;
      
        gorillaDetails.appendChild(detailsTable);
      
        const gallerySection = document.createElement("div");
        gallerySection.classList.add("gallery-section");
      
        if (gorilla.Gallery && gorilla.Gallery.length > 0) {
          gorilla.Gallery.forEach(imageUrl => {
            const galleryImage = document.createElement("img");
            galleryImage.src = imageUrl;
            galleryImage.alt = gorilla.Name + " Gallery Image";
            galleryImage.classList.add("gallery-image");
            galleryImage.addEventListener("click", () => zoomImage(imageUrl, galleryImage));
            gallerySection.appendChild(galleryImage);
          });
        }
      
        detailsContainer.appendChild(gallerySection);
      }
      
    function zoomImage(imageUrl, clickedImage) {
      clickedImage.classList.toggle("zoomed");
    }
  });