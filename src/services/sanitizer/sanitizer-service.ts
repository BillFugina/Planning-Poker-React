import { injectable } from 'inversify'
import { ISanitizerService } from 'services/sanitizer'

@injectable()
export class SanitizerService implements ISanitizerService {
    LettersAndDigits(input: string): string {
        return input.split('').filter(c => (/[a-zA-Z0-9]/).test(c)).join('')
    }
}