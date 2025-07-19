import React from 'react';
import { X } from 'lucide-react';
import { modalStyles as styles } from '../assets/dummystyle';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,                             //NEXT 4 ARE FOR EDITRESUME
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick = () => { },
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>

        {!hideHeader && (
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>

            {/* DOWNLOAD BTN */}
            {showActionBtn && (
              <button className={styles.actionButton} onClick={onActionClick}>
                {actionBtnIcon}
                {actionBtnText}
              </button>
            )}

          </div>
        )}

        <button type="button" className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;