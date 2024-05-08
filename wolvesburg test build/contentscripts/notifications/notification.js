class Toast {
    static #toastbox; // Private static property to store the toastbox element

    static #createToastbox () {
        // Private static method to create the toastbox element
        const toastbox = document.createElement('div');
        toastbox.classList.add('toastbox');
        document.body.appendChild(toastbox);
        Toast.#toastbox = toastbox;
    }

    static showToast (messageType, messageText) {
        try {
            // Create the toastbox element if it doesn't exist
            if (!Toast.#toastbox) {
                Toast.#createToastbox();
            }

            // Create a toast element with the message text
            const toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = `<i class="fa-solid fa-circle-info"></i><span>${ messageText }</span>`;

            // Add a class to the toast element based on the message type
            switch (messageType) {
                case 'success':
                    toast.classList.add('success');
                    break;
                case 'information':
                    toast.classList.add('information');
                    break;
                case 'error':
                    toast.classList.add('error');
                    break;
                default:
                    break;
            }

            Toast.#toastbox.appendChild(toast);

            // Remove the toast element after 10 seconds
            setTimeout(() => {
                toast.classList.add('out');
                setTimeout(() => {
                    toast.remove();
                }, 500);
            }, 10000);
        } catch (error) {
            console.error('Toast error:', error);
        }
    }
}

// export { Toast };