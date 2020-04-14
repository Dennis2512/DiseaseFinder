import { UserDto } from './user.dto';
export declare class MessagesController {
    getSymptoms(): {
        message: string;
    };
    getMessage(id: any): {
        message: string;
    };
    sendSymptoms(user: UserDto): UserDto;
}
