page = function () {
    let address = "bGVtbGV5Lmplc3NAZ21haWwuY29t";

    let pvt = {
        copyToBuffer: function (text) {
            let textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            let successful = false;

            try {
                successful = document.execCommand('copy');
                let msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            return successful;
        },
        copyEmail: function () {
            let text = $.base64.decode(address);
            let wasSuccessful = this.copyToBuffer(text);
            if (wasSuccessful) {
                pub.showToast("My email: " + text + " was copied to your clipboard");
            } else {
                pub.showToast("Sorry, my email was not copied to your clipboard");
            }
        },

    };

    let pub = {

        showToast: function (text) {
            alert(text);
        },

        init: function () {
            $("#my_email").click(function () {
                pvt.copyEmail();
            });
        }

    };

    return pub
}();

$(document).ready(function () {
    page.init();
});