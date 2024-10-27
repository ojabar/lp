const focusFullName = () => {
  const targetDiv = document.getElementById("formCheckout");
  const input = document.getElementById("fullname");

  if (input && targetDiv) {
    targetDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      input.focus();
    }, 500);
  }
};

export { focusFullName };
