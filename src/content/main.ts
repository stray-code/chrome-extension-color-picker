import van from "vanjs-core";

import "./style.css";

const showToast = (colorCode: string) => {
  const { div } = van.tags;

  const toastElement = div(
    {
      class: "chrome-extension-color-picker",
    },
    `${colorCode}をコピーしました。`,
  );

  van.add(document.body, toastElement);

  setTimeout(() => {
    toastElement.remove();
  }, 2000);
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "showToast") {
    showToast(message.colorCode);
  }
});
