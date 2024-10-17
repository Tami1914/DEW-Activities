//write your JS code here:

//1. Open an about:blank page in a new window/tab (size 200x100px)

function openWindow() {
    let blankWindow = window.open('', '', 'width=200, height=100'); //abre una ventana o pestaña
    debugger; //pausa aqui
}

//2. Open a new window called "MsgWindow", and write "some text" into it

function openWindowMsgWindow() {
    let msgWindow = window.open('', 'msgWindow', 'width=100 height=100');
    msgWindow = msgWindow.document.write('hola holita');
}

//3. Open a new window called "MsgWindow" again, and write "some other text" into it

function openNewMsgWindow() {
    let msgWindow2 = window.open('', 'msgWindow2', 'width=100 height=100');
    msgWindow2 = msgWindow2.document.write("nuevo nuevito");
}

//4. Replace the current window with a new window

function replaceWindow() {
    window.location.replace("about:blank"); //reemplaza la ventana actual con una nueva URL
}

//5. Open a new window and control its appearance (show toolbal, scrollbars, resizeable, position top: 100px, position left: 200px, width: 200px, height: 400px)

function controlApperance(){
    let windowApperance = window.open('','','toolbar=yes, resizable=yes, width=200, height=200, left=200, top=100');
}

//6. Open a new window and close if afterwards

function openCloseAfterwards (){
    let blankWindow = window.open('', '', 'width=200, height=200'); //abre una ventana o pestaña
    if(blankWindow){
        setTimeout(() => {
            blankWindow.close();
        }, 2000);
    }
}

// 7. Using the opener property: open a new window to return a reference to the window that created the new window and write "some window text" on the opener:


function openSomeWindowText (){
    let blankWindow = window.open('', '', 'width=200, height=200'); //abre una ventana o pestaña
    blankWindow.opener.document.write("some window text"); // escribe texto en la ventana desde la cual se abrió
}

// 8. Create an iframe, load iframe.html and write "some text" into it.

function createIframe(){
    let iframe = document.createElement('iframe'); // crea el iframe
    iframe.src = 'iframe.html';
    document.body.appendChild(iframe);
    iframe.onload = function() {
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.write('some text');
    };
}

// 9. Create an iframe, load iframe.html into it access its content and print it in this window.

function createIframe2(){
    let iframe = document.createElement('iframe'); // crea el iframe
    iframe.src = 'iframe.html';
    document.body.appendChild(iframe);
    iframe.onload = function() {
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        console.log(iframeDoc.write('some text'));
    };
}