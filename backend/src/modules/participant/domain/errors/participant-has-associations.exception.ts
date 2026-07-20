import { DomainException } from '../../../../common/domain/domain.exception';

export class ParticipantHasAssociationsException extends DomainException {
  readonly status = 409;

  constructor(id: string) {
    super(
      `Participante con id "${id}" no se puede eliminar porque tiene reglas de aporte asociadas`,
    );
  }
}
