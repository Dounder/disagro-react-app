import Swal from 'sweetalert2';

export const useNotification = () => {
  const showSuccess = (message: string = 'Éxito', confirm: boolean = false) => {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: message,
      timer: confirm ? 3000 : undefined,
      showConfirmButton: confirm,
    });
  };

  const showError = (message: string = 'Error', confirm: boolean = false) => {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: message,
      timer: confirm ? 3000 : undefined,
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

  const closeLoading = () => {
    Swal.close();
  };

  return {
    showSuccess,
    showError,
    showLoading,
    closeLoading,
  };
};
