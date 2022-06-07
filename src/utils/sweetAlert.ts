import swal from "sweetalert2";
const sweetAlert = {
  async success(msg: string, title = "OK") {
    await swal.fire({
      icon: "success",
      title: title,
      text: msg,
      confirmButtonColor: "#17a673",
      cancelButtonColor: "#a75050",
      reverseButtons: true,
    });
  },
  async error(msg: string) {
    await swal.fire({
      icon: "error",
      title: "Oops",
      text: msg,
      confirmButtonColor: "#17a673",
      cancelButtonColor: "#a75050",
      reverseButtons: true,
    });
  },
  async confirm(
    msg: string,
    confirmText: string,
    cancelText: string,
    title = "Alerta",
    reverseButtons: boolean = false
  ) {
    const option: any = {
      title: title,
      text: msg,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1f0533",
      cancelButtonColor: "#1f0533",
      cancelButtonText: cancelText,
      confirmButtonText: confirmText,
      reverseButtons,
    };
    return swal
      .fire(option)
      .then((result) => {
        return result.value;
      })
      .catch(() => {
        return false;
      });
  },
  async input(title: any, type: any, confirmText = "") {
    let config: any = {
      title: title,
      input: type,
      reverseButtons: true,
      confirmButtonColor: "#17a673",
    };

    if (confirmText) {
      config.confirmButtonText = confirmText;
    }

    return swal.fire(config);
  },
  async html(title: string, html: any, icon: any) {
    return swal.fire({
      icon: icon,
      title: title,
      html: html,
      confirmButtonColor: "#17a673",
      reverseButtons: true,
    });
  },
};

export default sweetAlert;
