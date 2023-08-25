declare interface NotificationData {
  title: string;
  subtitle?: string;
  message?: string;
  onClick?: (e: Event | Notification) => void;
  theme?: "darkblue" | "red" | "light";
  duration?: number;
  backgroundTop?: string;
  backgroundBottom?: string;
  colorTop?: string;
  colorBottom?: string;
  closeButton?: string;
  native?: boolean;
  icon?: string;
  vibrate?: number[];
  silent?: boolean;
}
