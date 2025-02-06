

export default function Download() {
    const fileURL = "";

    const a = document.createElement("a");
    a.href = fileURL;
    a.download = "Magnus Kjønnøy CV"; // navn på filen
    a.click();
};