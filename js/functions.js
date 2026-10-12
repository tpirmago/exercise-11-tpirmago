const questions = document.querySelectorAll(".question");
const showAnswersButton = document.querySelector("#show-answers");

const answers = [
    "An Azure Resource Group is a container for Azure resources.",
    "Azure Functions runs code in response to events without managing servers.",
    "Azure Blob Storage stores unstructured data such as files, images, and documents.",
    "Azure App Service hosts web applications and APIs. Azure Functions runs code in response to events.",
    "Azure Monitor collects and analyzes data to monitor the performance and health of Azure resources."
];

showAnswersButton.addEventListener("click", () => {
    const answersVisible = showAnswersButton.textContent === "Hide Answers";

    questions.forEach((question, index) => {
        let answer = question.querySelector(".answer");

        if (!answer) {
            answer = document.createElement("p");
            answer.className = "answer";
            answer.textContent = answers[index];
            question.appendChild(answer);
        }

        answer.hidden = answersVisible;
    });

    showAnswersButton.textContent = answersVisible
        ? "Show Answers"
        : "Hide Answers";
});
