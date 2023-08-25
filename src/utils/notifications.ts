import addNotification from "react-push-notification";
export const mainNotification = (data: NotificationData) => {
  addNotification({
    title: data.title,
    message: data.message,
    theme: undefined,
    duration: data.duration ?? 5000,
    native: false,
    closeButton: "X"
  });
};

export const dangerNotification = (data: NotificationData) => {
  addNotification({
    title: data.title,
    message: data.message,
    theme: "red",
    duration: data.duration ?? 5000,
    native: false,
    closeButton: "X"
  });
};

export const successNotification = (data: NotificationData) => {
  addNotification({
    title: data.title,
    message: data.message,
    theme: "darkblue",
    duration: data.duration ?? 5000,
    native: false,
    closeButton: "X"
  });
};
