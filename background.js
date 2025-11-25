chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "linkShare",
        title: "LinkShare",
        contexts: ["page"]
    });

    chrome.contextMenus.create({
        id: "shareTelegram",
        parentId: "linkShare",
        title: "Telegram",
        contexts: ["page"]
    });

    chrome.contextMenus.create({
        id: "shareWhatsApp",
        parentId: "linkShare",
        title: "WhatsApp",
        contexts: ["page"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "shareTelegram") {
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(tab.url)}`;
        chrome.tabs.create({ url: telegramUrl });
    } else if (info.menuItemId === "shareWhatsApp") {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(tab.url)}`;
        chrome.tabs.create({ url: whatsappUrl });
    }
});
