export class AppError {
  public readonly message!: string;

  public readonly status_code!: number;

  public readonly type_error!: string;

  constructor(message: string, status_code: number, type_error: string) {
    this.message = message;
    this.status_code = status_code;
    this.type_error = type_error;
  }
}
