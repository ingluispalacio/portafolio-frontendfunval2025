const getSkills = async () => {
  const response = await fetch("./data/skills.json");
  return response.json();
};

const fillCardSkills = async () => {
  let data = [];
  try {
     data = await getSkills();
  } catch (error) {
    console.log(error)
  }
  
  const skillCards = document.getElementById("skillCards")
  data.forEach((skill) => {
    const cardContainer = document.createElement("div");
    cardContainer.className =
      "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]";
    const cardContentTitle = document.createElement("div");
    cardContentTitle.className = "flex items-center mb-4";
    const cardContentTitleIcon = document.createElement("div");
    cardContentTitleIcon.className =
      "w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-4";
    cardContentTitleIcon.innerHTML = skill.icon;
    const cardContentTitleText = document.createElement("h3");
    cardContentTitleText.className =
      "text-xl font-semibold text-gray-800 dark:text-white";
    cardContentTitleText.textContent = skill.category;
    cardContentTitle.appendChild(cardContentTitleIcon);
    cardContentTitle.appendChild(cardContentTitleText);
    const cardContentBody = document.createElement("div");
    cardContentBody.className= "space-y-4 mt-6";
    skill.items.forEach((item) => {
        const cardContentBodyGroup = document.createElement("div");
        const cardContentBodyGroupText = document.createElement("div");
        cardContentBodyGroupText.className="flex justify-between mb-1";
        const cardContentBodyGroupTextSpam1 = document.createElement("spam");
        cardContentBodyGroupTextSpam1.className = "text-sm font-medium text-gray-700 dark:text-gray-300";
        cardContentBodyGroupTextSpam1.textContent = item.name;
        const cardContentBodyGroupTextSpam2 = document.createElement("spam");
        cardContentBodyGroupTextSpam2.className = "text-sm font-medium text-gray-700 dark:text-gray-300";
        cardContentBodyGroupTextSpam2.textContent = item.level;
        const cardContentBodyGroupBar = document.createElement("div");
        cardContentBodyGroupBar.className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700";
        const cardContentBodyGroupBarContent = document.createElement("div");
        cardContentBodyGroupBarContent.classList = "bg-indigo-600 h-2.5 rounded-full"
        cardContentBodyGroupBarContent.style.width = item.level;
        cardContentBodyGroupText.appendChild(cardContentBodyGroupTextSpam1);
        cardContentBodyGroupText.appendChild(cardContentBodyGroupTextSpam2);
        cardContentBodyGroupBar.appendChild(cardContentBodyGroupBarContent);
        cardContentBodyGroup.appendChild(cardContentBodyGroupText);
        cardContentBodyGroup.appendChild(cardContentBodyGroupBar);
        cardContentBody.appendChild(cardContentBodyGroup);
    });
    cardContainer.appendChild(cardContentTitle);
    cardContainer.appendChild(cardContentBody);
    skillCards.appendChild(cardContainer);
  });
  
};

export { fillCardSkills };
