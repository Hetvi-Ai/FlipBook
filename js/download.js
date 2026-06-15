
export async function downloadFlipbook(images) {

    const zip = new JSZip();

    // Create folders
    const pagesFolder = zip.folder("pages");
    const jsFolder = zip.folder("js");

    // Save images
    images.forEach((img, index) => {

        const base64Data = img.image.split(",")[1];

        pagesFolder.file(
            `page${index + 1}.png`,
            base64Data,
            { base64: true }
        );
    });

    // Standalone HTML
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Offline Flipbook</title>

<script src="https://cdn.jsdelivr.net/npm/page-flip/dist/js/page-flip.browser.min.js"></script>

<style>
body{
    margin:0;
    background:#111827;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

#flipbook{
    width:1000px;
    height:700px;
}

.page{
    background:white;
}

.page img{
    width:100%;
    height:100%;
    object-fit:contain;
}
</style>
</head>

<body>

<div id="flipbook"></div>

<script src="./js/flipbook.js"></script>

</body>
</html>
`;

    zip.file("index.html", htmlContent);

    // Standalone flipbook JS
    let pageList = "";

    images.forEach((img, index) => {

        pageList += `
        {
            src:"./pages/page${index + 1}.png"
        },
        `;
    });

    const flipbookJS = `
const pages = [
${pageList}
];

const container =
document.getElementById("flipbook");

const htmlPages = [];

pages.forEach(item => {

    const page =
    document.createElement("div");

    page.className = "page";

    const image =
    document.createElement("img");

    image.src = item.src;

    page.appendChild(image);

    container.appendChild(page);

    htmlPages.push(page);
});

const flipbook =
new St.PageFlip(
    container,
    {
        width:500,
        height:700,
        size:"stretch",
        showCover:true,
        mobileScrollSupport:true
    }
);

flipbook.loadFromHTML(htmlPages);
`;

    jsFolder.file(
        "flipbook.js",
        flipbookJS
    );

    // Generate ZIP
    const blob =
        await zip.generateAsync({
            type: "blob"
        });

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "OfflineFlipbook.zip";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

