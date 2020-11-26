export default class NotificationError extends Error {
  constructor(message, variant) {
    super(message);
    this.variant = variant;
  }
}
