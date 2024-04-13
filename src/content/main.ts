const styles: Partial<CSSStyleDeclaration> = {
  position: "fixed",
  top: "40px",
  right: "20px",
  padding: "10px",
  backgroundColor: "#333",
  color: "#fff",
  zIndex: "calc(Infinity)",
};

const showToast = (colorCode: string) => {
  const toastElement = document.createElement("div");
  Object.assign(toastElement.style, styles);
  toastElement.innerText = `${colorCode}をコピーしました。`;
  document.body.appendChild(toastElement);

  setTimeout(() => {
    toastElement.remove();
  }, 2000);
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "SHOW_TOAST") {
    showToast(message.colorCode);
  }
});
