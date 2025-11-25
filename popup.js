document.addEventListener('DOMContentLoaded', () => {
  const telegramBtn = document.getElementById('telegram-btn');
  const whatsappBtn = document.getElementById('whatsapp-btn');

  // Get current tab URL and title
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = encodeURIComponent(tab.url);
    const title = encodeURIComponent(tab.title);

    telegramBtn.addEventListener('click', () => {
      const telegramUrl = `https://t.me/share/url?url=${url}`;
      chrome.tabs.create({ url: telegramUrl });
    });

    whatsappBtn.addEventListener('click', () => {
      const whatsappUrl = `https://wa.me/?text=${url}`; // Or https://api.whatsapp.com/send?text=${url}
      chrome.tabs.create({ url: whatsappUrl });
    });
  });
});
