
let pageFlipInstance = null;

export function createFlipbook(images) {

    console.log("createFlipbook called");
    console.log("Images received:", images.length);

    const container = document.getElementById("flipbook");

    if (!container) {
        console.error("Flipbook container not found");
        return;
    }

    container.innerHTML = "";

    if (pageFlipInstance) {
        pageFlipInstance.destroy();
        pageFlipInstance = null;
    }

    const pages = [];

    images.forEach((item, index) => {

        const page = document.createElement("div");
        page.className = "page";

        const img = document.createElement("img");
        img.src = item.image;

        page.appendChild(img);

        container.appendChild(page);

        pages.push(page);

        console.log(`Page ${index + 1} added`);
    });

    console.log("Checking St:", typeof St);

    if (typeof St === "undefined") {
        console.error("PageFlip library not loaded");
        alert("PageFlip library not loaded");
        return;
    }

    pageFlipInstance = new St.PageFlip(container, {
        width: 500,
        height: 700,
        size: "stretch",
        showCover: true
    });

    console.log("PageFlip instance created");

    pageFlipInstance.loadFromHTML(pages);

    console.log("Pages loaded into flipbook");

    document.getElementById("pageInfo").innerText =
        `Page 1 of ${images.length} `;
}

