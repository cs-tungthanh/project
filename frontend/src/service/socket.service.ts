// import { SocketEvents } from 'constants/socket.constants';
// import {
//     Subscription, fromEvent, BehaviorSubject, Observable,
// } from 'rxjs';
// import io, { Socket, SocketOptions } from 'socket.io-client';

// export class SocketService {
//     private static subscriptions: Subscription[] = [];

//     static socket: Socket | undefined;

//     static socket$: BehaviorSubject<Socket | undefined> =
//         new BehaviorSubject<Socket | undefined>(undefined);

//     static connect(): Observable<Socket | undefined> {
//         return SocketService.socket$.asObservable();
//     }

//     static initSocket(url: string, data?: SocketOptions): void {
//         if (SocketService.socket) {
//             SocketService.socket.disconnect();
//         }
//         if (url) {
//             SocketService.socket = io(url, data);
//             SocketService.socket.connect();
//             SocketService.socket$.next(SocketService.socket);
//         }
//     }

//     static registerEventMessage<T>(eventName: SocketEvents): Observable<T> | undefined {
//         if (SocketService.socket) {
//             return fromEvent(SocketService.socket, eventName);
//         }

//         return undefined;
//     }

//     static destroy(): void {
//         SocketService.subscriptions.forEach((sub) => sub.unsubscribe());
//     }
// }

export const a = 1;
