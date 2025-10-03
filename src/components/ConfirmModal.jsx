import React from "react";

export const ConfirmModal = ({ 
  show, 
  title = "Confirmar acción", 
  message = "¿Seguro que quieres continuar?", 
  onConfirm, 
  onCancel 
}) => {
  if (!show) return null; // si no está visible, no renderiza nada

  return (
    <>
    <div className="modal fade show d-block" tabIndex="-1" role="dialog"  aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" >
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>

          <div className="modal-body">
            <p>{message}</p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancelar
            </button>
            <button type="button" className="btn btn-danger" onClick={onConfirm}>
              Sí, eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
    </>
  );
};
