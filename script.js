// Update membership summary text when plan changes
const planSelect = document.getElementById("plan");
const summaryPlan = document.getElementById("summaryPlan");
const form = document.getElementById("orderForm");
const toast = document.getElementById("toast");

if (planSelect && summaryPlan) {
  planSelect.addEventListener("change", () => {
    const value = planSelect.value;
    let text = "$0 / month (select a plan)";
    if (value === "basic") text = "Woof Basic — $9 / month";
    if (value === "plus") text = "Woof Plus — $19 / month";
    if (value === "pro") text = "Woof Pro — $29 / month";
    summaryPlan.textContent = text;
  });
}

// Fake submission handling
if (form && toast) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent real submission
    toast.style.display = "block";
    toast.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
