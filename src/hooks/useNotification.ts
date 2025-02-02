import Swal from 'sweetalert2';

interface Params {
  text?: string;
  confirm?: boolean;
  timer?: number;
}

export const useNotification = () => {
  const showSuccess = ({ text = 'Éxito', confirm = false, timer = 3000 }: Params) => {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text,
      timer,
      showConfirmButton: confirm,
    });
  };

  const showError = ({ text = 'Error', confirm = false, timer }: Params) => {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text,
      timer,
      showConfirmButton: confirm,
    });
  };

  const showLoading = () => {
    Swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const dismissNotification = () => {
    Swal.close();
  };

  return {
    showSuccess,
    showError,
    showLoading,
    dismissNotification,
  };
};
