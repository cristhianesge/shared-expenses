import { DomainException } from '../../../../common/domain/domain.exception';

export class ParticipantNotFoundException extends DomainException {
  readonly status = 404;

  constructor(id: string) {
    super(`Participante con id "${id}" no encontrado`);
  }
}
