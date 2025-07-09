/* function downloadPDF(){
    const element = document.querySelector('.container-lg');
    const opt = {
         margin: 0,
         filename: 'Hoja_de-Vida_Jorge_grajales.pdf',
         image: {type: 'jpeg', quality:1},
         html2canvas: {scale:1, useCors: true},
         jsPDF: {unit: 'mm', format: 'letter', orientation:'portrait'},
         pagebreak:{mode: ['css', 'legacy']}
    };
    html2pdf().set(opt).from(element).save();

} */


function converToPDF (){

    const elemento = document.body
    const marginH =

    const opciones = {
        margin:10,
        filename: 'Hoja_de_Vida_Jorge_Grajales',
        image: {type: "jpeg", quality: 0.98},
        html2canvas:{scale: 2, loggin: true, dpi: 192, letterRendering: true},
        jsPDF: {unit: "mm", format: "A4", orientation: "portrait"},
        pagebreak: { mode: ["avoid-all"]}
    
    }
    html2pdf().from(elemento).set(opciones).save();

}

