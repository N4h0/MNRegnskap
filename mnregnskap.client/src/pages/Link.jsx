import './Link.css';


const PDF_FILE_URL = "https://localhost:5173/file_pdf.pdf";
function Link() {
    const downloadFileAtURL = (url) => {
        //fuksjonen blob gjør at isteden for å åpne ny fane når man laster ned, så blir det lastet ned i samme fane under. 
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const fileName = url.split("/").pop();
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });

    };
    return (
        <div className="Link">
            <button
                onClick={() => {
                    downloadFileAtURL(PDF_FILE_URL);}}>Download PDF file</button>
        </div>
    );
}

export default Link;