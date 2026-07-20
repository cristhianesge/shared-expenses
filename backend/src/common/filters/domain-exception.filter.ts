import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { DomainException } from '../domain/domain.exception';

@Catch(DomainException)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: DomainException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    response.status(exception.status).json({
      statusCode: exception.status,
      message: exception.message,
    });
  }
}
