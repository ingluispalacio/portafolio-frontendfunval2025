const getProjects = async () => {
  const response = await fetch("./data/projects.json");
  return response.json();
};

const fillCardProjects = async () => {
 let data = [];
  try {
     data = await getProjects();
  } catch (error) {
    console.log(error)
  }
  const projectCards = document.getElementById("projects");
   data.forEach((project) => {
    const cardContainer = document.createElement("div");
    cardContainer.className =
      "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition";

    const cardImg = document.createElement("img");
    cardImg.src = `./assets/img/${project.imgName}`;
    cardImg.alt = project.title;
    cardImg.className = "h-56 w-full object-cover";

    const cardContainerBody = document.createElement("div");
    cardContainerBody.className = "p-6";

     
    const cardTitle = document.createElement("h3");
    cardTitle.className = "text-xl font-semibold mb-2";
    cardTitle.textContent = project.title;

    
    const cardDescription = document.createElement("p");
    cardDescription.className =
      "text-gray-600 dark:text-gray-300 text-sm mb-4";
    cardDescription.textContent = project.description;

    
    const cardLink = document.createElement("a");
    cardLink.href = project.link;
    cardLink.className = "text-indigo-600 hover:text-indigo-800 font-medium";
    cardLink.textContent = "ir al sitio";

    
    cardContainerBody.appendChild(cardTitle);
    cardContainerBody.appendChild(cardDescription);
    cardContainerBody.appendChild(cardLink);

    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardContainerBody);

    projectCards.appendChild(cardContainer);

      
   });
}

export { fillCardProjects };