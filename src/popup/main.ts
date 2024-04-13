import van from "vanjs-core";

import "./style.css";

const App = () => {
  const { div, button } = van.tags;

  const showToast = async (colorCode: string) => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tab.id) {
      return;
    }

    await chrome.tabs.sendMessage(tab.id, {
      type: "SHOW_TOAST",
      colorCode,
    });
  };

  const pickColor = () => {
    if (!window.EyeDropper) {
      return;
    }

    const eyeDropper = new window.EyeDropper();

    eyeDropper
      .open()
      .then(async (res) => {
        const colorCode = res.sRGBHex;
        await navigator.clipboard.writeText(colorCode);
        await showToast(colorCode);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return div(
    button(
      {
        onclick: pickColor,
      },
      "色を選択",
    ),
  );
};

van.add(document.getElementById("app")!, App());
