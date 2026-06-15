
export async function loadPDF(file) {

    try {

        console.log("PDF Selected:", file);

        const pdfUrl = URL.createObjectURL(file);

        const pdf =
            await pdfjsLib.getDocument(pdfUrl).promise;

        console.log("PDF Loaded");
        console.log("Total Pages:", pdf.numPages);

        const images = [];

        for (
            let pageNumber = 1;
            pageNumber <= pdf.numPages;
            pageNumber++
        ) {

            console.log(
                "Processing Page:",
                pageNumber
            );

            const page =
                await pdf.getPage(pageNumber);

            const viewport =
                page.getViewport({
                    scale: 1.5
                });

            const canvas =
                document.createElement("canvas");

            const context =
                canvas.getContext("2d");

            canvas.width =
                viewport.width;

            canvas.height =
                viewport.height;

            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;

            images.push({
                page: pageNumber,
                image: canvas.toDataURL("image/png")
            });

            console.log(
                "Page Converted:",
                pageNumber
            );
        }

        console.log(
            "Images Generated:",
            images.length
        );

        return images;

    } catch (error) {

        console.error(
            "PDF ERROR:",
            error
        );

        return [];
    }
}

