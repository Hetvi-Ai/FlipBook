
import { loadPDF } from "./pdf-handler.js";
import { createFlipbook } from "./flipbook.js";
import { downloadFlipbook } from "./download.js";

const uploadInput =
    document.getElementById("pdfUpload");

const downloadBtn =
    document.getElementById("downloadBtn");

const loader =
    document.getElementById("loader");

let generatedImages = [];

uploadInput.addEventListener(
    "change",
    async (e) => {

        const file =
            e.target.files[0];

        if (!file) return;

        try {

            loader.style.display =
                "flex";

            generatedImages =
                await loadPDF(file);

            // ADD THESE 2 LINES
            console.log("Generated Images:", generatedImages);
            console.log("Number of pages:", generatedImages.length);

            if (
                !generatedImages ||
                generatedImages.length === 0
            ) {
                return;
            }

            createFlipbook(
                generatedImages
            );

        } catch (error) {

            console.error(error);

        } finally {

            loader.style.display =
                "none";
        }
    }
);

downloadBtn.addEventListener(
    "click",
    () => {

        if (
            generatedImages.length === 0
        ) {
            alert(
                "Upload PDF first"
            );
            return;
        }

        downloadFlipbook(
            generatedImages
        );
    }
);

