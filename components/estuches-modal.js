import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        borderRadius: '15px',
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
};

export default function EstuchesModal({ modelos, handleModelo }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="row py-3">
            <p>👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇</p>
            <button className="btn btn-secondary w-auto" onClick={openModal}>Presiona <b>aquí</b> para escoger tu modelo de iPhone</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button type="button" className="btn-close mb-2" onClick={closeModal} aria-label="Close"></button>
                <div className="row py-3">
                    <h2 className='text-center'>¿Cuál es tu modelo de iPhone?</h2>
                    <div className='d-flex flex-row row-cols-3 flex-wrap gap-2 mt-2 justify-content-center'>
                        {modelos.map((modelo) => (
                            <button key={modelo.slug} onClick={() => {handleModelo(modelo); closeModal();}}
                                className='btn btn-sm w-auto'>
                                {modelo.title}
                            </button>
                        ))}
                    </div>
                </div>
                {/* <div className="row py-3 px-5 d-flex justify-content-center">
                    <button className='btn btn-danger w-auto' onClick={closeModal}>Cerrar</button>
                </div> */}
            </Modal>
        </div>
    );
}