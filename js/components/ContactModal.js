/**
 * ContactModal Component (Non-ESM Version)
 */
window.ContactModal = function (brandName) {
    const closeModal = () => {
        document.getElementById('modal-overlay').remove();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        form.innerHTML = '<div class="success-message"><h3>Message Sent!</h3><p>The supplier will contact you shortly.</p></div>';
        setTimeout(closeModal, 2000);
    };

    return window.Utils.createElement('div', {
        id: 'modal-overlay',
        className: 'modal-overlay',
        onclick: (e) => e.target.id === 'modal-overlay' && closeModal()
    },
        window.Utils.createElement('div', { className: 'modal-content' },
            window.Utils.createElement('button', { className: 'modal-close', onclick: closeModal }, '×'),
            window.Utils.createElement('h2', {}, `Contact ${brandName}`),
            window.Utils.createElement('form', { onsubmit: handleSubmit },
                window.Utils.createElement('div', { className: 'form-group' },
                    window.Utils.createElement('label', { for: 'name' }, 'Your Name'),
                    window.Utils.createElement('input', { type: 'text', id: 'name', required: true })
                ),
                window.Utils.createElement('div', { className: 'form-group' },
                    window.Utils.createElement('label', { for: 'email' }, 'Work Email'),
                    window.Utils.createElement('input', { type: 'email', id: 'email', required: true })
                ),
                window.Utils.createElement('div', { className: 'form-group' },
                    window.Utils.createElement('label', { for: 'message' }, 'Inquiry Details'),
                    window.Utils.createElement('textarea', { id: 'message', rows: 4, required: true, placeholder: 'Tell the supplier about your requirements...' })
                ),
                window.Utils.createElement('button', { type: 'submit', className: 'btn-primary' }, 'Send Inquiry')
            )
        )
    );
};
